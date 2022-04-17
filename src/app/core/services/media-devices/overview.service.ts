import { Injectable, OnDestroy } from '@angular/core';
import { DesktopCapturer, DesktopCapturerSource, Dialog } from 'electron';
import { Observable, share, Subject } from 'rxjs';
import { Configuration } from '../../configuration';
import { MaterIalSelectItem } from '../../../models/materIal-select';
import { SourceConfiguration } from './source-configuration';
import * as fs from 'fs';

/**
 * 局部生命周期
 */
@Injectable()
export class OverviewService implements OnDestroy {
    protected desktopCapturer: DesktopCapturer;
    protected dialog: Dialog;
    protected fs: typeof fs;

    private _capturerSource = new Subject<MaterIalSelectItem<DesktopCapturerSource>[]>();

    get CapturerSource(): Observable<MaterIalSelectItem<DesktopCapturerSource>[]> {
        return this._capturerSource.pipe(share());
    }

    constructor() {
        if (Configuration.isElectron) {

            const electron = window.require("electron");
            this.desktopCapturer = electron.desktopCapturer as DesktopCapturer;
            this.dialog = electron.dialog as Dialog;
            this.fs = window.require('fs');

            this.desktopCapturer.getSources({
                types: ['window', 'screen']
            }).then(sources => {
                if (sources) {
                    const data = sources.map(res => {
                        return new MaterIalSelectItem<DesktopCapturerSource>(res.name, res.id, res);
                    })
                    this._capturerSource.next(data);
                }
            });
        }
    }

    ngOnDestroy(): void {
        this._capturerSource.unsubscribe();
    }

    private _sourceConfig: SourceConfiguration | null = null;
    private _recordedChunks: Blob[] = [];
    /**
     * 选中需要监控的源
     * @param source 
     */
    async changeSource(config: SourceConfiguration) {
        this._sourceConfig = config;
        const constraints = {
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: config.source.id
                }
            }
        };
        const videoElement = config.videoElement.nativeElement;

        /* Create a Stream */
        const media = navigator.mediaDevices as any;
        const stream = await media.getUserMedia(constraints);
        videoElement.srcObject = stream;
        videoElement.play();

        const options = { mimeType: 'video/webm; codecs=vp9' };
        let mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.ondataavailable = this.videoStart;
        mediaRecorder.onstop = this.videoStop;
    }

    private videoStart(ev: BlobEvent) {
        if (this._sourceConfig && this._sourceConfig.onStart) this._sourceConfig.onStart(ev);
        this._recordedChunks.push(ev.data);
    }

    private videoStop(ev: Event) {
        if (this._sourceConfig && this._sourceConfig.onStop) this._sourceConfig.onStop(ev);

        this.saveVideo();
    }

    private async saveVideo() {
        const blob = new Blob(this._recordedChunks, {
            type: 'video/webm; codecs=vp9'
        });

        const buffer = Buffer.from(await blob.arrayBuffer());
        const { filePath } = await this.dialog.showSaveDialog({
            buttonLabel: 'Save video',
            defaultPath: `vid-${Date.now()}.webm`
        });

        if (filePath) {
            let callBack: () => void = () => { };
            if (this._sourceConfig && this._sourceConfig.afterSaveFile) callBack = this._sourceConfig.afterSaveFile;

            this.fs.writeFile(filePath, buffer, callBack);
        }
    }
}
