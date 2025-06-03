import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shell';
  loadTime = 0;

  constructor() {
    // Calculate load time from performance timing
    this.calculateLoadTime();
  }

  private calculateLoadTime() {
    // Use performance.now() to get the current time since navigation started
    this.loadTime = Math.round(performance.now());
    
    // Also listen for the load event to get more accurate timing
    window.addEventListener('load', () => {
      this.loadTime = Math.round(performance.now());
    });
  }
}
