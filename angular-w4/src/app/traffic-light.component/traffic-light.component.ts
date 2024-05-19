import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
  imports:[FormsModule,CommonModule],
  standalone: true
})
export class TrafficLightComponent implements OnInit {
  @Input() lightId: string;
  @Input() currentLight: string;
  @Input() emergency: boolean;
  
  buttonDisabled: boolean;
  showMessage: boolean;

  constructor() {
    this.buttonDisabled = false;
    this.showMessage = false;
  }

  ngOnInit(): void {
    this.updateButtonState();
  }

  ngOnChanges(): void {
    this.updateButtonState();
  }

  updateButtonState(): void {
    this.buttonDisabled = this.currentLight === 'red' || this.emergency;
  }

  onPressButton(): void {
    if (this.currentLight === 'yellow') {
      this.showMessage = true;
      setTimeout(() => this.showMessage = false, 2000);
    }
  }
}
