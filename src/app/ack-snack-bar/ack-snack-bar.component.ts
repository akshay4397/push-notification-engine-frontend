import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ack-snack-bar',
  templateUrl: './ack-snack-bar.component.html',
  styleUrls: ['./ack-snack-bar.component.css']
})
export class AckSnackBarComponent implements OnInit {

  message = "Notification generated";

  constructor() { }

  ngOnInit(): void {
  }


}
