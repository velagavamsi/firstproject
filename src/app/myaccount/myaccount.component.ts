import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;
  addSomeStyles1: boolean = false;
  addSomeStyles2: boolean = false;
  addSomeStyles3: boolean = false;
  oneFun(event){
    this.one = true;
    this.two = false;
    this.three = false;
    this.addSomeStyles1 = true;
    this.addSomeStyles2 = false;
    this.addSomeStyles3 = false;
  }
  twoFun(event){
    this.one = false;
    this.two = true;
    this.three = false;
    this.addSomeStyles1 = false;
    this.addSomeStyles2 = true;
    this.addSomeStyles3 = false;
  }
  threeFun(event){
    this.one = false;
    this.two = false;
    this.three = true;
    this.addSomeStyles1 = false;
    this.addSomeStyles2 = false;
    this.addSomeStyles3 = true;
  }

  isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
