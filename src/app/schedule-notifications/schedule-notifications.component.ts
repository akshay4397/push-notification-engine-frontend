import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-schedule-notifications',
  templateUrl: './schedule-notifications.component.html',
  styleUrls: ['./schedule-notifications.component.css']
})
export class ScheduleNotificationsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

}
