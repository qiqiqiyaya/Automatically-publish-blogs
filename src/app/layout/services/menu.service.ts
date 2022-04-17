import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //#region 菜单
  private menu:Menu[]=[
    new Menu("home","home",null,"/system/cup-info"),
    new Menu("Media Devices","important_devices",[
      new Menu("Overview","dashboard",null,"/media-devices/overview"),
    ]),
    new Menu("test","settings",null,"/test"),
    new Menu("system","computer",[
      new Menu("Cup Information","show_chart",null,"/system/cup-info"),
    ]),
  ];
  //#endregion

  constructor(private http:HttpClient) { }

  get(){
    // get menus from back end
    return of(this.menu);
  }
}

