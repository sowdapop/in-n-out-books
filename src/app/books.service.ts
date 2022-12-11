
  // Title: Exercise 6.2 - Output Properties
  // Author: Professor Krasso
  // Date: 27 Nov 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.


import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0345443683',
        title: 'Blackwood Farm',
        description: 'Welcome to Blackwood Farm: soaring white columns, spacious dining rooms, sun-drenched gardens, and a dark strip of the dense Sugar Devil Swamp. This is the world of Quinn Blackwood, a brilliant young man haunted by birth by a mysterious doppelganger, a spirit known as Goblin.',
        numOfPages: 626,
        authors: ['Anne Rice']
      },
      {
        isbn: '0393319296',
        title: 'Invisible Monsters',
        description: 'Shes a fashion model who has everything: a boyfriend, a career, a loyal best friend. But when a sudden freeway "accident" leaves her disfigured and incapable of speech, she goes from being the beautiful center of attention to being an invisible monster, so hideous that no one will acknowledge she exists.',
        numOfPages: 297,
        authors: ['Chuck Palahniuk']
      },
      {
        isbn: '0385474547',
        title: 'Things Fall Apart',
        description: 'The novel chronicles the life of Okonkwo, the leader of an Igbo community, from the events leading up to his banishment from the community for accidentally killing a clansman, through the seven years of his exile, to his return, and it addresses a particular problem of emergent Africa—the intrusion in the 1890s of white missionaries and colonial government into tribal Igbo society.',
        numOfPages: 209,
        authors: ['Chinua Achebe']
      },
      {
        isbn: '0375702709',
        title: 'A Lesson Before Dying',
        description: 'In the late 1940s backdrop of a small Cajun community, Jefferson, a young black man, is accused and convicted of a murder for perpetrating a shoot-out in a liquor store which left three men killed. Being the sole survivor of a crime that occurred unwittingly, Jefferson is sentenced to death.',
        numOfPages: 256,
        authors: ['Ernest J. Gaines']
      },
      {
        isbn: '0743293398',
        title: 'Hyper-Chondriac',
        description: 'Achingly funny, uncomfortably true and always entertaining, Hyperchondriac is just the medicine for anyone who wants to take it down a notch.',
        numOfPages: 240,
        authors: ['Brian Frazer']
      }
    ]
   }

   //returns entire array of books
   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   //returns individual book via loop
   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }

}
