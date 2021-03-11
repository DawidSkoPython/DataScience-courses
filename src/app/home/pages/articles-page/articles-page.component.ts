import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css'],
})
export class ArticlesPageComponent implements OnInit {
  constructor() {}
  htmlCode = `
  import { Component, OnInit } from &#39;@angular/core&#39;;

@Component({
  selector: &#39;app-articles-page&#39;,
  templateUrl: &#39;./articles-page.component.html&#39;,
  styleUrls: [&#39;./articles-page.component.css&#39;]
})
export class ArticlesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

  `;
  ngOnInit(): void {}
}
