import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { PatientcardComponent } from './patientcard/patientcard.component';
import { AllpatientsComponent } from './allpatients/allpatients.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { DeletepatientsComponent } from './deletepatients/deletepatients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AssistantComponent } from './assistant/assistant.component';
import { FilterPipe } from './filter.pipe';
import { ExpComponent } from './exp/exp.component';
import { MatdialogComponent, DialogOverviewExampleDialog } from './matdialog/matdialog.component';

const appRoutes: Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'patientcard', component: PatientcardComponent},
  {path: 'allpatients', component: AllpatientsComponent},
  {path: 'searchpatient', component: SearchpatientComponent},
  {path: 'deletepatients', component: DeletepatientsComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'myaccount', component: MyaccountComponent},
  {path: 'assistant', component: AssistantComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PagenotfoundComponent,
    HomeComponent,
    PatientcardComponent,
    AllpatientsComponent,
    SearchpatientComponent,
    DeletepatientsComponent,
    AppointmentsComponent,
    MyaccountComponent,
    AssistantComponent,
    FilterPipe,
    ExpComponent,
    MatdialogComponent, 
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule, NoopAnimationsModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, RouterModule.forRoot(appRoutes),
    MatFormFieldModule, MatInputModule, MatSelectModule, FlexLayoutModule, MatTabsModule, MatAutocompleteModule, MatRadioModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExpComponent]
})
export class AppModule { }
