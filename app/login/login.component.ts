import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Login { pr: string,password:string }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Login>;
logins: Observable<Login[]>;
  t={username:"",password:""}
 mode="false";
  
  constructor() { }

  ngOnInit() {
  }

  login()
  {
    if(this.t.username=='j' && this.t.password=='k')
    {
      this.mode="true";
    }
    else{
      this.mode="false";
    }
  }

}
