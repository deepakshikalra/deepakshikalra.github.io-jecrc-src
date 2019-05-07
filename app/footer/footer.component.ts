import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



export interface Task { name: string,priority:string }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

private itemsCollection: AngularFirestoreCollection<Task>;
tasks: Observable<Task[]>;
  t={name:"",pr:""}
 mode="true";
  


  add(){
    
    let task = {name:this.t.name,priority:this.t.pr};
    this.itemsCollection.add(task);

    this.t.name="";
    this.t.pr="";


  }
 



  constructor(db: AngularFirestore) {

    this.itemsCollection = db.collection<Task>('tasks',);
    this.tasks = this.itemsCollection.valueChanges();

 } 
  ngOnInit() {
    
  }

}
