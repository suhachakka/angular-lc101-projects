import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-page-title',
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
title:string = "Angular projects lesson1 exercises";
  constructor() { }

  ngOnInit() {
  }

}
