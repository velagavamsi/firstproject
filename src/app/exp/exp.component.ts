import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  _ref:any;
  constructor() { }

  removeObject(){
    this._ref.destroy();
  }
  
  save(){
    alert('Saved Successfully!');
  }

  ngOnInit() {
  }

}
