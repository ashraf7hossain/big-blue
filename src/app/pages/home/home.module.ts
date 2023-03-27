import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TopTabsModule } from 'src/app/components/top-tabs/top-tabs.module';
// import { TopTabsComponent } from 'src/app/components/top-tabs/top-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    TopTabsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
