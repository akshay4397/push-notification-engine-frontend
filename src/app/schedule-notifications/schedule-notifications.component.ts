import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AckSnackBarComponent } from '../ack-snack-bar/ack-snack-bar.component';
@Component({
  selector: 'app-schedule-notifications',
  templateUrl: './schedule-notifications.component.html',
  styleUrls: ['./schedule-notifications.component.css']
})
export class ScheduleNotificationsComponent implements OnInit {

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  scheduleNotification(message: string, timeInSec: number) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    var headers = new HttpHeaders(headerDict);

    var notification = {
      "notification_message": message,
      "time_interval": timeInSec
    }

    const body = JSON.stringify(notification);

    this.http.post('http://localhost:8080/notifications/schedule', body, { headers: headers })
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
