import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.component.html',
  styleUrls: ['./qrgenerator.component.css']
})
export class QRGeneratorComponent implements OnInit {
  public myAngularxQrCode: string = null;
  constructor() {
    this.myAngularxQrCode = 'facebook.com/helgincolin'; //Will be changed into variable for dynamic purposes
  }

  ngOnInit() {
  }

}
