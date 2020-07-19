import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements OnInit {

  notifications = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  ngOnInit(): void {
  }

  calculateTimePassed(timestamp: number) {
    var notificationTime = new Date(timestamp);
    var currentTime = new Date();
    var diff = currentTime.getTime() - notificationTime.getTime();
    diff = Math.floor(diff / 1000);
    var passedTime = diff + " seconds ago";

    if (diff >= 60) {
      diff = Math.floor(diff / 60);
      passedTime = diff + " minutes ago";
    }

    return passedTime;
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/notification-push-engine';
    const ws = new SockJS(serverUrl);
    var stompClient = Stomp.over(ws);
    const that = this;
    stompClient.connect({}, function (frame) {
      stompClient.subscribe('/topic/new_notifications', (message: any) => {
        if (message.body) {
          var newMessage = JSON.parse(message.body);
          that.notifications.push(newMessage);
        }
      });
    });
  }
}

