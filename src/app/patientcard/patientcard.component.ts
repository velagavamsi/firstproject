import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { ExpComponent } from '../exp/exp.component';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export class State {
  constructor(public name: string) { }
}

/*-- Email --*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/*-- Email --*/


@Component({
  selector: 'app-patientcard',
  templateUrl: './patientcard.component.html',
  styleUrls: ['./patientcard.component.css']
})

export class PatientcardComponent implements OnInit {
  signInArea: boolean = true;
  signUpArea: boolean = false;
  stateCtrl: FormControl;
  Password: string;
  confirmPasswordCtrl= new FormControl(['', Validators.required]);
  confirmPassword: string;
  loginArea(){
    this.signInArea = true;
    this.signUpArea = false;
  }
  registerForm(){
    this.signInArea = false;
    this.signUpArea = true;
  }
  onSubmit() {
    console.log(this.form);
  }
  /*-- Auto Complete --*/
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'One'
    },
    {
      name: 'Two'
    },
    {
      name: 'Three'
    },
   /*  {
      name: 'Four'
    } */
  ];
/*-- Auto Complete --*/

form: FormGroup;
  constructor(fb: FormBuilder, private _cfr: ComponentFactoryResolver) {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    /*-- Auto Complete --*/
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
/*-- Auto Complete --*/
  /*-- Add Remove Component --*/
  ngOnInit() {
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
  

  /*-- Email --*/
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}

