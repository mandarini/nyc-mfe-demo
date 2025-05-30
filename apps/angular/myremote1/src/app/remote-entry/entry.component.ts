import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-myremote1-entry',
  template: `
    <div class="hmr-demo-container">
      <div class="header">
        <h1>🚀 Remote 1 - HMR Demo</h1>
        <p class="subtitle">This content is loaded from Remote 1 via Module Federation</p>
      </div>
      
      <div class="demo-content">
        <div class="color-box" [style.background]="currentColor">
          <h2>{{ currentMessage }}</h2>
          <p>Current Time: {{ currentTime | date:'medium' }}</p>
        </div>
        
        <div class="actions">
          <button (click)="changeColor()" class="demo-button">
            Change Color
          </button>
          <button (click)="updateMessage()" class="demo-button">
            Update Message
          </button>
        </div>
        
        <div class="info-panel">
          <h3>🔥 HMR Demo Instructions:</h3>
          <ol>
            <li>Start with: <code>nx serve shell --devRemotes=myremote1</code></li>
            <li>Make changes to this component</li>
            <li>Watch for instant updates without page refresh!</li>
          </ol>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hmr-demo-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .header h1 {
      color: #1976d2;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    .subtitle {
      color: #666;
      font-size: 1.1rem;
      font-style: italic;
    }
    
    .demo-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .color-box {
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      color: white;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      transition: all 0.3s ease;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .color-box h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    
    .demo-button {
      background: linear-gradient(45deg, #1976d2, #42a5f5);
      border: none;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: transform 0.2s ease;
    }
    
    .demo-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
    }
    
    .info-panel {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 8px;
      border-left: 4px solid #4caf50;
    }
    
    .info-panel h3 {
      margin-top: 0;
      color: #2e7d32;
    }
    
    .info-panel code {
      background: #333;
      color: #ffeb3b;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }
    
    .info-panel ol {
      margin: 1rem 0;
    }
    
    .info-panel li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class RemoteEntryComponent {
  currentColor = '#e91e63';
  currentMessage = 'HMR is AWESOME! 🔥';
  currentTime = new Date();
  
  private colors = [
    '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
    '#2196f3', '#00bcd4', '#009688', '#4caf50',
    '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107',
    '#ff9800', '#ff5722', '#795548', '#607d8b'
  ];
  
  private messages = [
    'HMR is AWESOME! 🔥',
    'Module Federation + Nx = ❤️',
    'Building the Future! 🚀',
    'Hot Reload Magic! ✨',
    'Micro-frontends FTW! 🎯',
    'Development Paradise! 🏝️',
    'Instant Updates! ⚡',
    'Zero Downtime Dev! 💪'
  ];
  
  constructor() {
    // Update time every second to show the component is live
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  
  changeColor() {
    const currentIndex = this.colors.indexOf(this.currentColor);
    const nextIndex = (currentIndex + 1) % this.colors.length;
    this.currentColor = this.colors[nextIndex];
  }
  
  updateMessage() {
    const currentIndex = this.messages.indexOf(this.currentMessage);
    const nextIndex = (currentIndex + 1) % this.messages.length;
    this.currentMessage = this.messages[nextIndex];
  }
}
