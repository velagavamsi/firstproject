import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {   MatToolbarModule } from '@angular/material';
import {  MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [BrowserModule,MatButtonModule,MatFormFieldModule,MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, NoopAnimationsModule, MatIconModule, MatMenuModule, BrowserAnimationsModule, MatStepperModule],
  exports: [BrowserModule,MatButtonModule,MatFormFieldModule,MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, NoopAnimationsModule, MatIconModule, MatMenuModule, BrowserAnimationsModule, MatStepperModule],
})
export class MaterialModule { }