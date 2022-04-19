import { Injectable, OnDestroy } from '@angular/core';
import { DesktopCapturer, DesktopCapturerSource, Dialog } from 'electron';
import { Observable, share, Subject } from 'rxjs';
import { Configuration } from '../../configuration';
import { MaterIalSelectItem } from '../../../models/materIal-select';
import { ScreenSource } from './screen-source';
import * as fs from 'fs';
import { MediaRecorderContext } from './media-recorder-context';

/**
 * 局部生命周期
 */
@Injectable()
export class RecordScreenService implements OnDestroy {
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
            debugger;
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

    /**
     * 选中需要监控的源
     * @param source 
     */
    async changeSource(config: ScreenSource) {
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
        return new MediaRecorderContext(stream, videoElement);
    }

    /**
     * 保存视频
     * @param blobs 
     */
    async saveVideo(blobs: Blob[]) {
        const blob = new Blob(blobs, {
            type: 'video/webm; codecs=vp9'
        });

        const buffer = Buffer.from(await blob.arrayBuffer());
        const { filePath } = await this.dialog.showSaveDialog({
            buttonLabel: 'Save video',
            defaultPath: `vid-${Date.now()}.webm`
        });

        if (filePath) {
            this.fs.writeFile(filePath, buffer, () => { });
        }
    }
}
