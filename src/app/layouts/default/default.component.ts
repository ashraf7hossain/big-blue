import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent  implements OnInit {

  constructor(translate : TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('ar');
  }

  ngOnInit() {}

}
