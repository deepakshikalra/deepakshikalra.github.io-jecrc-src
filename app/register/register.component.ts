import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Reg { name: string,email:string,contact:string }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Reg>;
Regs: Observable<Reg[]>;
  t={name:"",email:"",contact:""}
 mode="true";
  


  add(){
    
    let reg = {name:this.t.name,email:this.t.email,contact:this.t.contact};
    this.itemsCollection.add(reg);

    this.t.name="";
    this.t.email="";
    this.t.contact="";


  }

  constructor(db: AngularFirestore) {
    this.itemsCollection = db.collection<Reg>('Regs',);
    this.Regs = this.itemsCollection.valueChanges();
   }

  ngOnInit() {
  }

}
