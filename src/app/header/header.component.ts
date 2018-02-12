import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string = "assets/images/logo.png";
  headerProfilePic: string = "assets/images/if_photo_370076.png";
  languages: string[] =[
    "English","Telugu","Hindi","Kanada","Tamil"
  ];
  languageToggle: boolean = false;
  headerProfileToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
