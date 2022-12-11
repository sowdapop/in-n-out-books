  // Title: Assignment 8.2 – Server-side Communications
  // Author: Professor Krasso
  // Date: 10 Dec 2022
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
  books: Array<IBook[]>;

  //maps to book object
  book!: IBook;

  //for entire book list
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
        }
      }

      this.books.push({
        isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
        title: res[key].details.title,
        description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
        numOfPages: res[key].details.number_of_pages,
        authors: authors
      })
    })
   }



  ngOnInit(): void {
  }

  //for individual book detail
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, { data: { book: this.book, disableClose: true, width: '800px'} });

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') { this.book == null; }});


  }

}
