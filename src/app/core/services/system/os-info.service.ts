import { Injectable, OnDestroy } from '@angular/core';
import { Observable, share, Subject, Subscription, timer } from 'rxjs';
import * as os from 'os';

/**
 * 局部服务
 */
@Injectable()
export class OsInfoService implements OnDestroy {
  private osInfo: any;
  private os: typeof os;
  private _cpu: Subject<number>;
  private _disk: Subject<number>;
  private _mem: Subject<number>;

  constructor() {
    this.osInfo = window.require("@felipebutcher/node-os-info");
    this.os = window.require("os");

    this._cpu = new Subject<number>();
    this._disk = new Subject<number>();
    this._mem = new Subject<number>();
  }

  /**
   * architecture 
   */
  get arch() {
    return this.os.arch();
  }

  /**
   * get current home directory of user
   */
  get homeDir() {
    return this.os.homedir();
  }

  get platform() {
    return this.os.platform();
  }

  get tmpDir() {
    return this.os.tmpdir();
  }

  get hostname() {
    return this.os.hostname();
  }

  get type() {
    return this.os.type();
  }

  ngOnDestroy(): void {
    this.osInfo = null;
    /**
     * must unsubscribe first
     */
    if (this._timer) this._timer.unsubscribe();
    this._cpu.unsubscribe();
    this._mem.unsubscribe();
    this._disk.unsubscribe();
  }

  get cpu(): Observable<number> {
    return this._cpu;
  }

  get disk(): Observable<number> {
    return this._disk;
  }

  get mem(): Observable<number> {
    return this._mem;
  }

  private _timer: Subscription;

  /**
   * 开始监听
   */
  start() {
    /**
     * 每2秒执行一次
     */
    this._timer = timer(0, 3500).subscribe(d => {
      this.osInfo.cpu((res) => {
        this._cpu.next(Math.round(res * 100));
      });
      this.osInfo.disk((res) => {
        this._disk.next(Math.round(res * 100))
      });
      this.osInfo.mem((res) => {
        this._mem.next(Math.round(res * 100))
      });
    });
  }
}
