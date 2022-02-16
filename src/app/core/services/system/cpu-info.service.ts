import { Injectable } from '@angular/core';
import * as os from 'os'

/**
 * 局部服务
 */
@Injectable()
export class CpuInfoService {
  os:typeof os;
  constructor() {
    this.os = window.require('os');
    
    this.os.cpus().length
  }
}
