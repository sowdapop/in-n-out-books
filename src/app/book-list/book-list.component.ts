
  // Title: Assignment 5.4 - Dialogs
  // Author: Professor Krasso
  // Date: 20 Nov 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //field properties for material data table
  books: Observable<IBook[]>;
  //header for table
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //maps to book object
  book!: IBook;

  //for entire book list
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  //for individual book detail
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, { data: { book: this.book, disableClose: true} });

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') { this.book == null; }});


  }

}
