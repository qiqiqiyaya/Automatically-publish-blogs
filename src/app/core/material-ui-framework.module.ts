import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule
    ],
    exports: [
        MatButtonModule,
        MatSliderModule
    ]
})
export class MaterialUiFrameworkModule { }
