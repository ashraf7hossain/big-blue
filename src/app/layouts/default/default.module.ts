import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DefaultComponent } from './default.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// import { SharedModule } from 'src/app/shared/shared.moduel';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    RouterModule
    // SharedModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ]
})
export class DefaultModule { }
