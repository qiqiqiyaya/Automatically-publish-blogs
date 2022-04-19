import { ElementRef } from "@angular/core";
import { DesktopCapturerSource } from "electron";

export interface ScreenSource {
    source: DesktopCapturerSource;
    videoElement: ElementRef;
}
