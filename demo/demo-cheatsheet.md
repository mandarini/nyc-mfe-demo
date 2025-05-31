# 🚀 Angular NYC Demo Cheat Sheet

## 🔥 Quick Start
```bash
# Start the demo app
nx serve shell --devRemotes=myremote1

# Navigate to
http://localhost:4200/myremote1
```

## ⚡ HMR Demo (2 min)

### **Manual Changes**
1. **Edit**: `apps/angular/myremote1/src/app/remote-entry/entry.component.ts`
2. **Change message**:
   ```typescript
   currentMessage = 'LIVE DEMO - Changes instantly! ⚡';
   ```
3. **Change color**:
   ```typescript
   color: #e91e63;
   ```
4. **Save** and watch instant updates!

### **Key Points**
- ✅ **No page refresh** - state preserved
- ✅ **Cross-boundary HMR** - works across micro-frontends
- ✅ **Zero configuration** - just works with `--devRemotes`

## 🎯 Build Performance Demo (2 min)

```bash
# First build (cold)
nx build shell

# Second build (cached)
nx build shell  # Near instant!

# Show affected builds
echo "// Updated" >> apps/angular/myremote2/src/app/remote-entry/entry.component.ts
nx affected:build  # Only myremote2 rebuilds
```

### **Key Points**
- ✅ **Smart caching** - reuse unchanged builds
- ✅ **Affected builds** - only rebuild what changed
- ✅ **Team sharing** - cache shared across developers

## 🚨 Reset
```bash
git checkout .
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
git checkout .
nx reset
```

## Key Talking Points
- ✅ **No page refresh** with HMR
- ✅ **Selective development** mode
- ✅ **Smart caching** across team
- ✅ **Zero configuration** setup 

## 🙏 Credits

**[Colum Ferry](https://github.com/Coly010)** - Nx Module Federation integrations & plugins  
**[Leosvel Pérez Espinosa](https://github.com/leosvelperez)** - @nx/angular-rspack collaboration

🚀 **Coming Soon**: Rspack integration demo! 