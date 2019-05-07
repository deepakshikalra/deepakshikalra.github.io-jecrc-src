import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { MeditationComponent } from './meditation/meditation.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './book/book.component';
import { LectureComponent } from './lecture/lecture.component';
import { LoginComponent } from './login/login.component';
import { Activities1Component } from './activities1/activities1.component';
import { AjfkutdtydgjchvhfkfyuComponent } from './ajfkutdtydgjchvhfkfyu/ajfkutdtydgjchvhfkfyu.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ActivitiesComponent,
    ProjectsComponent,
    EventsComponent,
    MeditationComponent,
    FooterComponent,
    AdminComponent,
    RegisterComponent,
    BookComponent,
    LectureComponent,
    LoginComponent,
    Activities1Component,
    AjfkutdtydgjchvhfkfyuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
   AngularFirestoreModule,
   FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
