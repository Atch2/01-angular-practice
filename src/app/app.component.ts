import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningComponent } from './learning/components/learning/learning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
