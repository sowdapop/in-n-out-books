
  // Title: Exercise 6.2 - Output Properties
  // Author: Professor Krasso
  // Date: 27 Nov 2022
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
  this.assignment = 'Exercise 6.2 - Output Properties'
}
}
