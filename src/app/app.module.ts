import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateNotificationComponent } from './generate-notification/generate-notification.component';
import { ScheduleNotificationsComponent } from './schedule-notifications/schedule-notifications.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { NotificationInputComponent } from './notification-input/notification-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AckSnackBarComponent } from './ack-snack-bar/ack-snack-bar.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    GenerateNotificationComponent,
    ScheduleNotificationsComponent,
    NavbarComponent,
    NotificationInputComponent,
    AckSnackBarComponent,
    NotificationPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
