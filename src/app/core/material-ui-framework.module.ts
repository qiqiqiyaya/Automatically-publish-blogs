import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule,
        MatMenuModule
    ]
})
export class MaterialUiFrameworkModule { }
