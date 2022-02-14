import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';

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

  menuList: Observable<IMenu[]>;
  constructor(private httpService: HttpClient,
    private menu: MenuService) { }

  ngOnInit() {
    this.menuList = this.menu.get();
  }

}
