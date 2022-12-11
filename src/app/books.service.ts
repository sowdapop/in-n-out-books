  // Title: Assignment 8.2 – Server-side Communications
  // Author: Professor Krasso
  // Date: 10 Dec 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: Array<string> = ['0345339681','0261103571', '9780593099322', '9780261102361', '9780261102378', '9780590302715', '9780316769532', '9780743273565', '9780590405959'];


  constructor(private http: HttpClient) {

   }

   //returns entire array of books from open library
   getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys',`ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details')

    return this.http.get('https://openlibrary.org/api/books', {params: params})
   }


}
