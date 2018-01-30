import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    name: string = "vamsi";
    showHide: boolean = false;
    twoWay: string = "vamsi";
    
    constructor(){ }
    
  }
