import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostTeller } from 'src/app/models/queueing_models';

@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']

})

export class MTellersComponent implements OnInit {
  public anyTeller: any[];
  public dept: any = [];
  public passTeller = new PostTeller('', '', '', '', '', '', false, 1);

  public tableid: number;

  constructor() {}
  
  ngOnInit() {

  }
}


