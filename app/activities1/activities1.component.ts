import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities1',
  templateUrl: './activities1.component.html',
  styleUrls: ['./activities1.component.scss']
})
export class Activities1Component implements OnInit {
  acts1: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.acts1 = db.collection('Acts').valueChanges();
 
   }

  ngOnInit() {
  }

}
