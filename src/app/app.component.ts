import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public childText:string;
  title = 'app';
  logo: string = "assets/images/logo.png";
  headerProfilePic: string = "assets/images/if_photo_370076.png";
  languages: string[] =[
    "English","Telugu","Hindi","Kanada","Tamil"
  ];
  languageToggle: boolean = false;
  headerProfileToggle: boolean = false;

}
