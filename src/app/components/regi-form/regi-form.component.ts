import { Component, OnInit } from '@angular/core';
import { FormData } from '../../classes/form-data';
 
@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent implements OnInit {

  date = new Date();
  // dummy data, replace pag nagkadb
  model = new FormData(this.date, 1, 'asd', 'asd', 'asd', 'single', 'agriculture', 'taadadasdasdasd');

  constructor() { }

  ngOnInit() {
  }
  
}
