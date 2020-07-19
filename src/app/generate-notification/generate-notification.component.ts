import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-generate-notification',
  templateUrl: './generate-notification.component.html',
  styleUrls: ['./generate-notification.component.css']
})
export class GenerateNotificationComponent implements OnInit {

  constructor(private http : HttpClient) {

   }

  ngOnInit(): void {
  }

 
generateNotification(input:string){

 var notification = {
  "notification_message": input
 }
  const body=JSON.stringify(notification);
    console.log(body)
    this.http.post('http://13.232.65.18:9000/notifications/generate' ,body).subscribe(
    data =>{
      console.log(data);
    }
    )
}

 


}
