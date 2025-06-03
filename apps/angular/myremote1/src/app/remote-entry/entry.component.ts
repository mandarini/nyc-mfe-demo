import { Component, OnInit, OnDestroy } from '@angular/core';
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
          <p class="change-counter">Changes made: {{ changeCounter }}</p>
        </div>
        
        <div class="actions">
          <button (click)="changeColor()" class="demo-button">
            Change Color
          </button>
          <button (click)="updateMessage()" class="demo-button">
            Update Message
          </button>
          <button (click)="resetState()" class="demo-button reset">
            Reset State
          </button>
        </div>
        
        <div class="info-panel">
          <h3>🔥 HMR Demo Instructions:</h3>
          <ol>
            <li>Start with: <code>nx serve shell --devRemotes=myremote1</code></li>
            <li>Make changes to this component</li>
            <li>Watch for instant updates without page refresh!</li>
            <li>Notice how state persists through changes!</li>
          </ol>
          <div class="status-indicator">
            <span class="status-dot" [class.active]="isHmrActive"></span>
            HMR Status: {{ isHmrActive ? 'Active' : 'Inactive' }}
          </div>
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
    
    .change-counter {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-top: 0.5rem;
      font-weight: bold;
    }
    
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
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
    
    .demo-button.reset {
      background: linear-gradient(45deg, #ff5722, #ff8a65);
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
    
    .status-indicator {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
    }
    
    .status-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ccc;
      transition: background-color 0.3s ease;
    }
    
    .status-dot.active {
      background: #4caf50;
      box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
    }
  `]
})
export class RemoteEntryComponent implements OnInit, OnDestroy {
  currentColor = '#e91e63';
  currentMessage = 'LIVE DEMO - Changes instantly! ⚡';
  currentTime = new Date();
  changeCounter = 0;
  isHmrActive = false;
  
  private timeInterval: any;
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
  
  ngOnInit() {
    // Load persisted state
    this.loadState();
    
    // Check for HMR support
    this.checkHmrStatus();
    
    // Update time every second to show the component is live
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    
    // Increment change counter to track HMR effectiveness
    this.changeCounter++;
    this.saveState();
  }
  
  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
  
  changeColor() {
    const currentIndex = this.colors.indexOf(this.currentColor);
    const nextIndex = (currentIndex + 1) % this.colors.length;
    this.currentColor = this.colors[nextIndex];
    this.changeCounter++;
    this.saveState();
  }
  
  updateMessage() {
    const currentIndex = this.messages.indexOf(this.currentMessage);
    const nextIndex = (currentIndex + 1) % this.messages.length;
    this.currentMessage = this.messages[nextIndex];
    this.changeCounter++;
    this.saveState();
  }
  
  resetState() {
    this.currentColor = this.colors[0];
    this.currentMessage = this.messages[0];
    this.changeCounter = 0;
    this.clearState();
  }
  
  private loadState() {
    try {
      const savedState = localStorage.getItem('myremote1-demo-state');
      if (savedState) {
        const state = JSON.parse(savedState);
        this.currentColor = state.currentColor || this.currentColor;
        this.currentMessage = state.currentMessage || this.currentMessage;
        this.changeCounter = state.changeCounter || 0;
      }
    } catch (error) {
      console.warn('Failed to load state from localStorage:', error);
    }
  }
  
  private saveState() {
    try {
      const state = {
        currentColor: this.currentColor,
        currentMessage: this.currentMessage,
        changeCounter: this.changeCounter
      };
      localStorage.setItem('myremote1-demo-state', JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save state to localStorage:', error);
    }
  }
  
  private clearState() {
    try {
      localStorage.removeItem('myremote1-demo-state');
    } catch (error) {
      console.warn('Failed to clear state from localStorage:', error);
    }
  }
  
  private checkHmrStatus() {
    // Check if we're in development mode and if webpack HMR is available
    this.isHmrActive = typeof window !== 'undefined' && 
                      (
                        !!(window as any).__webpack_hmr_runtime__ ||
                        typeof (window as any).webpackHotUpdate === 'function' ||
                        !!(window as any).module?.hot
                      );
  }
}
