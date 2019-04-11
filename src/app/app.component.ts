import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ngOnInit() {
    // remove hanggat di final deployment
    // window.onbeforeunload =
    //   function logout() {
    //     localStorage.removeItem("CurrentUser");
    //   }
  }
}
