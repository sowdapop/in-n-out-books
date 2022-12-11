
  // Title: Assignment 8.2 – Server-side Communications
  // Author: Professor Krasso
  // Date: 10 Dec 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.



import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//provides a variable to use globally for the assignment title.
assignment: string;

constructor() {
  this.assignment = 'Welcome to In-N-Out Books'
}
}
