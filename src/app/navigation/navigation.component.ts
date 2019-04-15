import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.marginLeft = "17%";
  }


  logout() {
    localStorage.removeItem("CurrentUser");
  }
}
