import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopTabsComponent } from './top-tabs.component';



@NgModule({
  declarations: [TopTabsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    // TopTabsModule,
    TopTabsComponent
  ]
})
export class TopTabsModule { }
