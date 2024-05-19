import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrafficLightComponent } from '../traffic-light.component/traffic-light.component';
@Component({
  selector: 'app-intersection',
  standalone: true,
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css'],
  imports:[TrafficLightComponent]
})
export class IntersectionComponent implements OnInit,OnChanges {
  currentLight1: string;
  currentLight2: string;
  emergency: boolean;
  emergencyActive: boolean;
  emergencyCooldown:boolean;
  intervalId: any;

  constructor() {
    this.currentLight1 = 'red';
    this.currentLight2 = 'green';
    this.emergency = false;
    this.emergencyActive = false;
  }

  ngOnInit(): void {
    this.startTrafficCycle1();
    this.startTrafficCycle2();
  }
  ngOnChanges(): void {
    setTimeout(() => {
        this.startTrafficCycle1();
        this.startTrafficCycle2();
      }, 10000);
  }

  startTrafficCycle1(): void {
    let counter = 0;
    this.intervalId = setInterval(() => {
      if (!this.emergencyActive) {
        counter = (counter + 1) % 14;
        if (counter < 5) {
          this.currentLight1 = 'red';
        } else if (counter < 7) {
          this.currentLight1 = 'yellow';
        } else if(counter<12){
          this.currentLight1 = 'green';
        }
        else{
            this.currentLight1='yellow';
        }
      }
    }, 1000);
  }
  startTrafficCycle2(): void {
    let counter = 0;
    this.intervalId = setInterval(() => {
      if (!this.emergencyActive) {
        counter = (counter + 1) % 14;
        if (counter < 5) {
          this.currentLight2 = 'green';
        } else if (counter < 7) {
          this.currentLight2 = 'yellow';
        } else if(counter<12){
          this.currentLight2 = 'red';
        }
        else{
            this.currentLight2='yellow';
        }
      }
    }, 1000);
  }

  onEmergencyButtonClick(): void {
    this.emergencyActive = true;
        
    this.currentLight1 = 'yellow';
    this.currentLight2 = 'yellow';
    setTimeout(() => {
      this.emergencyActive = false;
      this.emergencyCooldown=true;
    }, 10000);
    if(this.emergencyCooldown)
        this.emergencyActive=true;
        setTimeout(() => {
            this.emergencyActive=false;
        }, 10000);
    }
}
