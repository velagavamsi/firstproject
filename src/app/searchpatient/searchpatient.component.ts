import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css']
})
export class SearchpatientComponent implements OnInit {
  oneLeft: boolean = true;
  twoLeft: boolean = false;
  threeLeft: boolean = false;
  oneRight: boolean = true;
  twoRight: boolean = false;
  threeRight: boolean = false;
  oneContent: boolean = true;
  twoContent: boolean = false;
  threeContent: boolean = false;
  oneDrop: boolean = true;
  twoDrop: boolean = false;
  threeDrop: boolean = false;
  myClass(){
    alert("YES");
  }
  _oneLeft(){
    this.oneContent = true;
    this.twoContent = false;

    this.oneLeft = true;
    this.twoLeft = false;

    this.oneRight = true;
    this.twoRight = false;

    this.oneDrop = true;
    this.twoDrop = false;
  }
  _twoLeft(){
    this.oneContent = false;
    this.twoContent = true;
    this.threeContent = false;

    this.oneLeft = true;
    this.twoLeft = false;

    this.oneRight = false;
    this.twoRight = true;
    this.threeRight = false;

    this.oneDrop = false;
    this.twoDrop = true;
    this.threeDrop = false;
  }

  _oneRight(){
    this.oneContent = false;
    this.twoContent = true;

    this.oneLeft = true;

    this.oneRight = false;
    this.twoRight = true;

    this.oneDrop = false;
    this.twoDrop= true;
  }
  _twoRight(){
    this.twoContent = false;
    this.threeContent = true;

    this.oneLeft = false;
    this.twoLeft = true;

    this.oneRight = false;
    this.twoRight = false;
    this.threeRight = true;

    this.twoDrop = false;
    this.threeDrop = true;
  }
  _threeRight(){}
  ones = [
    {value: 'steak-0', viewValue: 'One A'},
    {value: 'pizza-1', viewValue: 'One B'},
    {value: 'tacos-2', viewValue: 'One C'}
  ];
  twos = [
    {value: 'steak-0', viewValue: 'Two A'},
    {value: 'pizza-1', viewValue: 'Two B'},
    {value: 'tacos-2', viewValue: 'Two C'}
  ];
  
  threes = [
    {value: 'steak-0', viewValue: 'Three A'},
    {value: 'pizza-1', viewValue: 'Three B'},
    {value: 'tacos-2', viewValue: 'Three C'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
