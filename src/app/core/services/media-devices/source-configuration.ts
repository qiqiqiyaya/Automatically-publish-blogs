import { ElementRef } from "@angular/core";
import { DesktopCapturerSource } from "electron";

export interface SourceConfiguration {
    source: DesktopCapturerSource;
    videoElement: ElementRef;
    onStart?: ((ev: BlobEvent) => any) | null;
    /**
     * 默认情况，停止即保存录制视频
     */
    onStop?: (ev: Event) => void;

    /**
     * 文件保存完成之后
     */
    afterSaveFile?: () => void;
}
