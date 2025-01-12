import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input('errorMessage') message: string = '';
  @Output('closeBox') Close = new EventEmitter<void>();

  onClose() {
    this.Close.emit();
  }
}
