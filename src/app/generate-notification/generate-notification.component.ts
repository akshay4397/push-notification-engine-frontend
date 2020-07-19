import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AckSnackBarComponent } from '../ack-snack-bar/ack-snack-bar.component';
@Component({
  selector: 'app-generate-notification',
  templateUrl: './generate-notification.component.html',
  styleUrls: ['./generate-notification.component.css']
})
export class GenerateNotificationComponent implements OnInit {

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  generateNotification(notificationMessage: string) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    var headers = new HttpHeaders(headerDict);

    var notification = {
      "notification_message": notificationMessage
    }

    const body = JSON.stringify(notification);

    this.http.post('http://localhost:8080/notifications/generate', body, { headers: headers })
      .subscribe(
        (response: any) => {
          this.openSnackBar(response.message);
        });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(AckSnackBarComponent, {
      duration: 5 * 1000
    });
  }

}
