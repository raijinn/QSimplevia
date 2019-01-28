import { Component, OnInit } from '@angular/core';

import { FormData } from '../../classes/form-data';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new FormData(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
