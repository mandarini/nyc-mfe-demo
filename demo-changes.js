#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentPath = 'apps/angular/myremote1/src/app/remote-entry/entry.component.ts';

const demoChanges = [
  {
    name: 'Change Message',
    search: /currentMessage = '[^']*';/,
    replace: "currentMessage = 'LIVE DEMO - Changes instantly! ⚡';"
  },
  {
    name: 'Change Color',
    search: /color: #1976d2;/,
    replace: 'color: #e91e63;'
  },
  {
    name: 'Add Emoji Button',
    search: /(Update Message<\/button>\s+<\/div>)/,
    replace: `$1
          <button (click)="addEmoji()" class="demo-button">
            Add Emoji 🎉
          </button>
        </div>`
  },
  {
    name: 'Add Emoji Method',
    search: /(updateMessage\(\) \{[^}]+\})/,
    replace: `$1
  
  addEmoji() {
    this.currentMessage += ' 🎉';
  }`
  }
];

function applyChange(changeIndex) {
  if (changeIndex >= demoChanges.length) {
    console.log('All demo changes applied!');
    return;
  }

  const change = demoChanges[changeIndex];
  console.log(`\n🎯 Applying: ${change.name}`);
  
  let content = fs.readFileSync(componentPath, 'utf8');
  
  if (content.match(change.search)) {
    content = content.replace(change.search, change.replace);
    fs.writeFileSync(componentPath, content);
    console.log(`✅ Applied: ${change.name}`);
    console.log('👀 Check your browser for the change!');
  } else {
    console.log(`⚠️  Pattern not found for: ${change.name}`);
  }
}

function resetComponent() {
  console.log('🔄 Resetting component to original state...');
  
  // Read the current git version
  const { execSync } = require('child_process');
  try {
    execSync(`git checkout HEAD -- ${componentPath}`);
    console.log('✅ Component reset!');
  } catch (error) {
    console.log('⚠️  Could not reset via git. Please manually reset the component.');
  }
}

// Parse command line arguments
const command = process.argv[2];
const changeIndex = parseInt(process.argv[3]) || 0;

if (command === 'apply') {
  applyChange(changeIndex);
} else if (command === 'reset') {
  resetComponent();
} else if (command === 'demo') {
  console.log('🎭 Demo Mode - Applying changes one by one...');
  console.log('Press any key to apply the next change, or "q" to quit\n');
  
  let currentIndex = 0;
  
  const readline = require('readline');
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'q' || key.ctrl && key.name === 'c') {
      console.log('\n👋 Demo finished!');
      process.exit();
    }
    
    if (currentIndex < demoChanges.length) {
      applyChange(currentIndex);
      currentIndex++;
    } else {
      console.log('\n🎉 All changes applied! Press "q" to quit.');
    }
  });
  
  console.log('Press any key to start...');
} else {
  console.log(`
🚀 HMR Demo Helper

Usage:
  node demo-changes.js apply [index]  - Apply a specific change (0-${demoChanges.length-1})
  node demo-changes.js demo          - Interactive demo mode
  node demo-changes.js reset         - Reset component to original state

Available changes:
${demoChanges.map((change, i) => `  ${i}: ${change.name}`).join('\n')}

Example:
  node demo-changes.js apply 0       - Change the message
  node demo-changes.js demo          - Interactive demo
  node demo-changes.js reset         - Reset everything
`);
} 