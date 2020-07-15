import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
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


  notification:string;
  TimeStamp:any;
generate(noti:string,time=null){
this.notification = noti;
this.TimeStamp = time;
this.http.post<any>('http://localhost:3000/posts',{title:'test'}).subscribe(data =>{
  this.notification = data.notification;
 this.TimeStamp = data.TimeStamp;


 this.sendPostRequest(noti).subscribe(
  res => {
    console.log(res);
  }
);


})

} //generate end

sendPostRequest(data: any): Observable<any> {
  return this.http.post<any>('http://localhost:3000/posts',data);
}


}
