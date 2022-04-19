export class MediaRecorderContext {
    private _mediaRecorder: MediaRecorder;
    private _recordedChunks: Blob[] = [];
    private _videoElement: HTMLVideoElement;

    constructor(stream: MediaStream, videoElement: HTMLVideoElement) {
        this._videoElement = videoElement;
        this._videoElement.srcObject = stream;
        this._videoElement.play();

        const options = { mimeType: 'video/webm; codecs=vp9' };
        this._mediaRecorder = new MediaRecorder(stream, options);
        this._mediaRecorder.ondataavailable = this.recording;
        this._mediaRecorder.start(1000);
    }

    /**
     * start video
     * @param ev 
     */
    private recording = (ev: BlobEvent) => {
        this._recordedChunks.push(ev.data);
    }

    start() {
        this._videoElement.play();
    }

    stop() {
        this._videoElement.pause();
    }

    delete() {
        this.stop();
        this._recordedChunks = [];
    }

    get recordedChunks() {
        return this._recordedChunks;
    }
}
