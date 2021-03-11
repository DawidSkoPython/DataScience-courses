import { element } from 'protractor';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headingcategories',
  templateUrl: './headingcategories.component.html',
  styleUrls: ['./headingcategories.component.css'],
})
export class HeadingcategoriesComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}
  public ids = ['section1', 'section2', 'section3', 'ssection4'];
  ngOnInit(): void {}

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
