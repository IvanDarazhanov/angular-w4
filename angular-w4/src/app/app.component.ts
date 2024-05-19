import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntersectionComponent } from './intersection.component/intersection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntersectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
   

}
