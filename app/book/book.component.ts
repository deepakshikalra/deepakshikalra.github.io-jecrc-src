import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.books = db.collection('Books').valueChanges();
   }

  ngOnInit() {
  }

}
