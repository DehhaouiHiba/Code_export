import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: string = 'My Angular App'; // Declare the title property

  constructor() {}

  ngOnInit(): void {}
}
