import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  thinCards: any[] = [
    {
      img: 'assets/image/book.png',
      content: ' ITF Dpclers Sectopm Jea;tj amd Safetu Charter',
    },
    {
      img: 'assets/image/book.png',
      content: ' ITF Dpclers Sectopm Jea;tj amd Safetu Charter',
    },
    {
      img: 'assets/image/book.png',
      content: ' ITF Dpclers Sectopm Jea;tj amd Safetu Charter',
    },
  ];

  cards: any[] = [
    {title: "Introduction to OSH Ports", img: "assets/image/card.png"},
    {title: "Introduction to OSH Ports", img: "assets/image/card.png"},
    {title: "Introduction to OSH Ports", img: "assets/image/card-wide.png"},
    {title: "Introduction to OSH Ports", img: "assets/image/card-wide.png"},
  ]
  constructor() {}

  ngOnInit() {}
}
