import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';


import { AboutPage } from './about.page';

import { TopTabsModule } from 'src/app/components/top-tabs/top-tabs.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    TopTabsModule,HeaderModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
