  // Title: Assignment 5.4 - Dialogs
  // Author: Professor Krasso
  // Date: 20 Nov 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book!: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  //initializes the book object
   this.book = {
        isbn:'',
        title:'',
        description: '',
        numOfPages: 0,
        authors: ['']
      }

    //displays book data in dialog box
    this.book.title = data.book.title;
    this.book.isbn = data.book.isbn;
    this.book.authors = data.book.authors;
    this.book.numOfPages = data.book.numOfPages;
    this.book.description = data.book.description;



  }

  ngOnInit(): void {
  }

}
