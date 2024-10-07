import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.css'
})
export class AlertMessageComponent {
  @Input() message: string;
  @Input() messageType: string;
  @Output() closeAlertEvent = new EventEmitter<void>();
  sendSignalToCloseAlert() {
    this.closeAlertEvent.emit();
  }
}
