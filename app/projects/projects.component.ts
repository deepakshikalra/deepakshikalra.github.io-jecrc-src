import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.projects = db.collection('Projects').valueChanges();
   }

  ngOnInit() {
  }

}
