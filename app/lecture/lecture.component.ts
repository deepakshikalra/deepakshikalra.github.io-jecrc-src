import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {
  lectures: Observable<any[]>;
  constructor(db: AngularFirestore) { 
    this.lectures = db.collection('Lectures').valueChanges();
  }

  ngOnInit() {
  }

}
