import { HttpClient } from '@angular/common/http';
import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { ThemeService } from '../../services/theme.service';

export interface IMenu {
  text: string;
  icon: string;
  routerLink?: string;
  children?: IMenu[]
}

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {

  /**
   * icon color
   */
  expansionIconStyle = {};

  menuList: Observable<IMenu[]>;
  constructor(private httpService: HttpClient,
    private menu: MenuService,
    private theme: ThemeService,) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.menuList = this.menu.get();
    this.theme.theme.subscribe(res => {
      this.expansionIconStyle = {
        color: res.primaryColor
      };
    });
  }

}
