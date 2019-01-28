import { Component, OnInit } from '@angular/core';
import { QRGeneratorComponent } from '../qrgenerator/qrgenerator.component'; //Imported but not used for now

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
