import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  
})

export class EventsComponent implements OnInit {
  events: Observable<any[]>;
 

  constructor(db: AngularFirestore) {
    this.events = db.collection('Events').valueChanges();
 
    

 } 
  ngOnInit() {
    
  }

}
