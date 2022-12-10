import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-background',
  templateUrl: './button-background.component.html',
  styleUrls: ['./button-background.component.css']
})
export class ButtonBackgroundComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  // it changes the background colour to dark and the font-color to a brighter colour
  changeBackground() {
    document.body.style.backgroundColor = 'grey';
    document.body.style.color = 'white';
  }


}
