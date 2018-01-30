import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EmployeetableComponent,HomeComponent, ContactComponent, PagenotfoundComponent
  ],
  imports: [
    BrowserModule,MaterialModule,
    FormsModule, MatButtonModule, MatCheckboxModule, RouterModule.forRoot(appRoutes)      
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
