import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { MeditationComponent } from './meditation/meditation.component';
import { BookComponent } from './book/book.component';
import { LectureComponent } from './lecture/lecture.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Activities1Component } from './activities1/activities1.component';
import { FooterComponent } from './footer/footer.component';
import { AjfkutdtydgjchvhfkfyuComponent } from './ajfkutdtydgjchvhfkfyu/ajfkutdtydgjchvhfkfyu.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
    {path:'activities',component:ActivitiesComponent},
    {path:'events',component:EventsComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'admin',component:AdminComponent},
    {path:'med',component:MeditationComponent},
    {path:'book',component:BookComponent},
    {path:'lecture',component:LectureComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'activities1',component:Activities1Component},
    {path:'footer',component:FooterComponent },
    {path:'Ajfkutdtydgjchvhfkfyu',component:AjfkutdtydgjchvhfkfyuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
