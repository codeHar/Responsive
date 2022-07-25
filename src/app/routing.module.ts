import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Home2Component } from './home/home2/home2.component';

const routes:Routes=[
  {
    path:'home',component:Home2Component
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
