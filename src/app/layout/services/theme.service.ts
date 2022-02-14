import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    this.$defaultThemeColor.unsubscribe();
  }

  /**
   * theme
   */
  private _them: Theme = new Theme('deeppurple-amber', '#673ab7');
  private $defaultThemeColor = new BehaviorSubject<Theme>(this._them);

  /**
   * get theme
   */
  get theme(): Observable<Theme> {
    return this.$defaultThemeColor;
  }
}
