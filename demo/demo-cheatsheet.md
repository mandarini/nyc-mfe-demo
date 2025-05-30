# 🚀 Nx Module Federation Demo Cheatsheet

## Quick Start Commands
```bash
# HMR Demo
nx serve shell --devRemotes=myremote1

# All Static
nx serve shell

# Multiple Dev Remotes  
nx serve shell --devRemotes=myremote1,myremote2

# Build Demo
nx build shell
nx affected:build

# Visualization
nx graph
```

## Demo Helper Script
```bash
# Interactive mode
node demo-changes.js demo

# Manual changes
node demo-changes.js apply 0    # Change message
node demo-changes.js apply 1    # Change color  
node demo-changes.js reset      # Reset all
```

## Key URLs
- **Main App**: http://localhost:4200
- **HMR Demo**: http://localhost:4200/myremote1
- **Remote 2**: http://localhost:4200/myremote2
- **Remote 3**: http://localhost:4200/myremote3

## File to Edit for HMR Demo
```
apps/angular/myremote1/src/app/remote-entry/entry.component.ts
```

## Quick Changes for Demo
```typescript
// Change 1: Message
currentMessage = 'LIVE DEMO - Changes instantly! ⚡';

// Change 2: Color  
color: #e91e63;
```

## Demo Flow (5 mins)
1. **Start**: `nx serve shell --devRemotes=myremote1`
2. **Show**: HMR working (2 mins)
3. **Show**: Build caching (2 mins) 
4. **Show**: Dependency graph (1 min)

## Troubleshooting
```bash
# Reset everything
node demo-changes.js reset
git checkout .
nx reset
```

## Key Talking Points
- ✅ **No page refresh** with HMR
- ✅ **Selective development** mode
- ✅ **Smart caching** across team
- ✅ **Zero configuration** setup 