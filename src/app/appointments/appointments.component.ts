import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef  } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { ExpComponent } from '../exp/exp.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  firstNameCtrl= new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern("^[a-zA-Z]+$")]);
  lastNameCtrl= new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(8), Validators.pattern("^[a-zA-z]+$")]);
  
  /** Email Control */
  emailFormControl = new FormControl('', [Validators.email]);
  matcher = new MyErrorStateMatcher();
  /** Email Control */

  landCtrl= new FormControl('',[Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]+$")]);

  mobileCtrl= new FormControl('',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]);
  mciCtrl= new FormControl('',[Validators.pattern("^[a-zA-Z0-9]+$")]);
  
  constructor(private _formBuilder: FormBuilder, private _cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.addComponent();
  }

  @ViewChild('parent', {read: ViewContainerRef}) container: ViewContainerRef;
  addComponent(){
      // check and resolve the component
      var comp = this._cfr.resolveComponentFactory(ExpComponent);

      // Create component inside container
      var expComponent = this.container.createComponent(comp);

      // see explanations
      expComponent.instance._ref = expComponent;
      /*-- Add Remove Component --*/
  }

  hiddenForm1: boolean = true;
  hiddenForm2: boolean = true;
  hiddenForm3: boolean = true;
  hiddenForm4: boolean = true;
  removeObject(event){
    if(event == 'hiddenForm1'){
      this.hiddenForm1 = false;
    }else if(event == 'hiddenForm2'){
      this.hiddenForm2 = false;
    }else if(event == 'hiddenForm3'){
      this.hiddenForm2 = false;
    }else if(event == 'hiddenForm4'){
      this.hiddenForm2 = false;
    }
  }
  
  save(){
    alert('Saved Successfully!');
  }

  firstError(){
    return this.firstNameCtrl.hasError('required') ? 'Please Enter First Name' :  
    this.firstNameCtrl.hasError('pattern') ? 'Value Should be Letters only' :
    this.firstNameCtrl.hasError('minlength') || this.firstNameCtrl.hasError('maxlength') ? 'length must be in 4-8' : '';
  }
  lastError(){
    return this.lastNameCtrl.hasError('required') ? 'Please Enter Last Name' :
    this.lastNameCtrl.hasError('pattern') ? "Value should be letters only" :
    this.lastNameCtrl.hasError('minlength') || this.lastNameCtrl.hasError('maxlength') ? 'length must be in 1-8' :'';
  }
  mobileError(){
    return this.mobileCtrl.hasError('pattern') ? "Enter Only numbers" : this.mobileCtrl.hasError('minlength') || this.mobileCtrl.hasError('maxlength') ? "enter 10 numbers" : ''; 
  }
  landError(){
    return this.landCtrl.hasError('pattern') ? "Enter Only numbers" : this.mobileCtrl.hasError('minlength') || this.mobileCtrl.hasError('maxlength') ? "enter 11 numbers" : ''; 
  }

  emailError(){
    return this.emailFormControl.hasError('email') ? "Enter Valid Email" : '';
  }
  mciError(){
    return this.mciCtrl.hasError('pattern') ? "Enter Only Alpha and Numbers" : "";
  }

}
