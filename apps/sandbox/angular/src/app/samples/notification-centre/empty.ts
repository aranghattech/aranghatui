import { Component } from '@angular/core';
import { ArtNotificationCentre } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-notification-centre-empty',
  imports: [ArtNotificationCentre],
  template: `
    <art-notification-centre inline></art-notification-centre>
  `,
})
export class NotificationCentreEmpty {}
