import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tabs',
  templateUrl: './top-tabs.component.html',
  styleUrls: ['./top-tabs.component.scss'],
})
export class TopTabsComponent  implements OnInit {
  @Input()tabs:any[] = [];
  constructor() {}

  ngOnInit() {}

}
