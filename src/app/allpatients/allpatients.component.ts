import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpatients',
  templateUrl: './allpatients.component.html',
  styleUrls: ['./allpatients.component.css']
})
export class AllpatientsComponent implements OnInit {
  imagesPath: string = "assets/images/";
  constructor() { }

  ngOnInit() {
  }

}
