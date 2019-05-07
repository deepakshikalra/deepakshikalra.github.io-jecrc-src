import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Act { name: string,photo:string }
export interface Project { name: string,description:string,photo:string }
export interface Event { name: string,description:string,photo:string }
export interface Book { photo: string,description:string,pdf:string }
export interface Lecture { name: string,description:string,video:string }
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Act>;
  Acts: Observable<Act[]>;
    t={name:"",photo:""}
   mode="true";

   private itemsCollection1: AngularFirestoreCollection<Project>;
  Projects: Observable<Act[]>;
    t1={name:"",description:"",photo:""}


    private itemsCollection2: AngularFirestoreCollection<Event>;
  Events: Observable<Event[]>;
    t2={name:"",description:"",photo:""}

    private itemsCollection3: AngularFirestoreCollection<Lecture>;
    Lectures: Observable<Lecture[]>;
      t3={name:"",description:"",video:""}


      private itemsCollection4: AngularFirestoreCollection<Book>;
      Books: Observable<Book[]>;
        t4={photo:"",description:"",pdf:""}
   
    
  
  
    add(){
      
      let act = {name:this.t.name,photo:this.t.photo};
      this.itemsCollection.add(act);
  
      this.t.name="";
      
      this.t.photo="";
  
  
    }

    add1(){
      
      let project = {name:this.t1.name,description:this.t1.description,photo:this.t1.photo};
      this.itemsCollection1.add(project);
  
      this.t1.name="";
      this.t1.description="";
      this.t1.photo="";
  
  
    }


    add2(){
      
      let event = {name:this.t2.name,description:this.t2.description,photo:this.t2.photo};
      this.itemsCollection2.add(event);
  
      this.t2.name="";
      this.t2.description="";
      this.t2.photo="";
  
  
    }


    add3(){
      
      let lecture = {name:this.t3.name,description:this.t3.description,video:this.t3.video};
      this.itemsCollection3.add(lecture);
  
      this.t3.name="";
      this.t3.description="";
      this.t3.video="";
  
  
    }


    add4(){
      
      let book = {photo:this.t4.photo,description:this.t4.description,pdf:this.t4.pdf};
      this.itemsCollection4.add(book);
  
      this.t4.photo="";
      this.t4.description="";
      this.t4.pdf="";
  
  
    }
  
  
    constructor(db: AngularFirestore) {
      this.itemsCollection = db.collection<Act>('Acts',);
      this.Acts = this.itemsCollection.valueChanges();

      this.itemsCollection1 = db.collection<Project>('Projects',);
      this.Projects = this.itemsCollection1.valueChanges();

      this.itemsCollection2 = db.collection<Event>('Events',);
      this.Events = this.itemsCollection2.valueChanges();

      this.itemsCollection3 = db.collection<Lecture>('Lectures',);
      this.Lectures = this.itemsCollection3.valueChanges();

      this.itemsCollection4 = db.collection<Book>('Books',);
      this.Books = this.itemsCollection4
      .valueChanges();
     }
  

  

  ngOnInit() {
  }

}
