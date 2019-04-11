import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.paddingLeft = "18%";
  }


  logout() {
    localStorage.removeItem("CurrentUser");
  }
}
