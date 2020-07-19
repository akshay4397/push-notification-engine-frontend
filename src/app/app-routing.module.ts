import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { NotificationInputComponent } from './notification-input/notification-input.component';

const routes: Routes = [
  {path: 'notification-panel', component: NotificationPanelComponent},
  {path: 'notification-generator', component: NotificationInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
