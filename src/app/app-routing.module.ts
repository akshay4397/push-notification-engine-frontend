import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerateNotificationComponent} from './generate-notification/generate-notification.component';
import {ScheduleNotificationsComponent} from './schedule-notifications/schedule-notifications.component'

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
