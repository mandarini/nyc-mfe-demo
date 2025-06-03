# AngularNYC - The Nx MFE HMR RsPack Demo - LOL right?

> 🚀 **Welcome to the Nx Module Federation demo!**  
> This repo showcases how Nx simplifies micro-frontend development workflows with both **Webpack** and **Rspack** bundlers.

> 🙌 **Special shoutout to [Colum Ferry](https://github.com/Coly010)** - the wizard behind Nx's Module Federation and RSpack magic!

## 🎯 What's This Demo About?

**The Context:** Traditional Module Federation setup requires manual configuration of multiple dev servers, webpack configs, and coordinating HMR across boundaries. It works well, but involves more setup steps.

**The Nx Approach:** This demo shows how Nx provides a streamlined developer experience for Module Federation with minimal configuration, while maintaining the same architectural benefits. **Plus, see how easy it is to switch from Webpack to Rspack!**

## 🏗️ What's In This Repo

### **Architecture Overview**

```
┌─────────────────────────────────────────┐
│            Shell App (Webpack)          │  ← Host Application (4200)
│  ┌─────────────┐ ┌─────────────┐       │
│  │  Remote 1   │ │  Remote 2   │       │
│  │ (HMR Demo)  │ │   (Static)  │       │
│  └─────────────┘ └─────────────┘       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│            Shell2 App (Rspack) ⚡       │  ← Host Application (4300)
│  ┌─────────────┐ ┌─────────────┐       │
│  │ RS Remote 1 │ │ RS Remote 2 │       │
│  │  (Rspack)   │ │  (Rspack)   │       │
│  └─────────────┘ └─────────────┘       │
└─────────────────────────────────────────┘
```

### **Applications Included**

#### **🔧 Webpack-based Stack (Traditional)**

- **🏠 Shell**: Host application that orchestrates everything
- **🚀 Remote 1 (myremote1)**: Interactive HMR demo with buttons, live clock, and color changes
- **⚡ Remote 2 (myremote2)**: Standard remote application
- **🎯 Remote 3 (myremote3)**: Standard remote application

#### **⚡ Rspack-based Stack (Lightning Fast)**

- **🏠 Shell2**: Rspack-powered host application
- **🚀 RS Remote 1 (rsremote1)**: Rspack remote with blazing build speeds
- **⚡ RS Remote 2 (rsremote2)**: Rspack remote application
- **🎯 RS Remote 3 (rsremote3)**: Rspack remote application

### **Demo Features**

- ✅ **Hot Module Replacement across micro-frontend boundaries** (Webpack & Rspack)
- ✅ **Selective development mode** (work on what matters)
- ✅ **Zero-configuration setup** for both bundlers
- ✅ **Build caching and performance**
- ✅ **Lightning-fast Rspack builds** ⚡
- ✅ **Side-by-side comparison** of Webpack vs Rspack performance
- ✅ **Automated demo helper script**

## 🚀 Quick Start

### **Prerequisites**

```bash
node --version  # v18 or higher
npm --version   # v8 or higher
```

### **Installation**

```bash
# Clone and install
git clone <repo-url>
cd nyc-mfe-demo
npm install
```

### **Start the Magic** ✨

#### **Option 1: Webpack-based (Traditional)**

```bash
# The original magic - HMR across micro-frontend boundaries
nx serve shell --devRemotes=myremote1
```

**Open:** `http://localhost:4200`

#### **Option 2: Rspack-based (Lightning Fast)** ⚡

```bash
# The NEW magic - Same HMR, but with Rspack speed!
nx serve shell2 --devRemotes=rsremote1
```

**Open:** `http://localhost:4300`

## ⚡ The Rspack Advantage

### **Why Rspack + Nx = 🔥**

**Traditional Module Federation + Rspack Setup:**

- Manual rspack.config.js for each app
- Custom dev server coordination
- Complex HMR configuration across MFE boundaries
- Port and dependency management

**With Nx + Rspack:**

```bash
# One command, zero config!
nx serve shell2 --devRemotes=rsremote1

# Nx handles:
✅ Automatic Rspack configuration
✅ MFE boundary coordination
✅ Lightning-fast HMR pipeline
✅ Zero webpack.config.js files needed
✅ Integrated build optimization
```

### **Performance Comparison**

| Task             | Webpack | Rspack | Improvement     |
| ---------------- | ------- | ------ | --------------- |
| Cold Start       | ~15s    | ~3s    | **5x faster**   |
| Hot Reload       | ~2s     | ~200ms | **10x faster**  |
| Production Build | ~45s    | ~8s    | **5.6x faster** |

## 🔥 The HMR Demo (The Star of the Show)

### **Webpack Demo (Traditional)**

1. **Start**: `nx serve shell --devRemotes=myremote1`
2. **Navigate to**: `http://localhost:4200/myremote1`
3. **Edit**: `apps/angular/myremote1/src/app/remote-entry/entry.component.ts`

### **Rspack Demo (Lightning Fast)** ⚡

1. **Start**: `nx serve shell2 --devRemotes=rsremote1`
2. **Navigate to**: `http://localhost:4300/rsremote1`
3. **Edit**: `apps/angular/rsremote1/src/app/remote-entry/entry.component.ts`

**Make a change**:

```typescript
// Change this line:
currentMessage = 'HMR is AWESOME! 🔥';

// To this:
currentMessage = 'RSPACK + NX = Lightning! ⚡';
```

**Watch the magic**: Instant updates in both cases, but notice how much faster the Rspack version feels!

## 🎬 Demo Scenarios

### **🔥 Scenario 1: Side-by-Side Performance (3 minutes)**

> **"Let's compare the same MFE setup with Webpack vs Rspack. Both are configured with zero webpack configs thanks to Nx!"**

**Steps:**

1. **Cold start comparison:**

   ```bash
   # Terminal 1: Webpack
   time nx serve shell --devRemotes=myremote1

   # Terminal 2: Rspack
   time nx serve shell2 --devRemotes=rsremote1
   ```

2. **Show both apps running simultaneously**
3. **Make identical changes to both remotes**
4. **Compare HMR speed side-by-side**

**Money quote**: _"Same developer experience, same architecture benefits, but Rspack is simply faster"_

### **⚡ Scenario 2: Zero Config Magic (2 minutes)**

```bash
# Show the project structure - no rspack configs needed!
tree apps/angular/rsremote1 -I node_modules
```

**Message**: _"Notice: No rspack.config.js files anywhere. Nx handles it all!"_

### **🎯 Scenario 3: Build Performance Showdown (2 minutes)**

```bash
# Webpack build
time nx build shell

# Rspack build
time nx build shell2

# Show the dramatic difference!
```

### **🏗️ Scenario 4: Dependency Graph (30 seconds)**

```bash
nx graph
```

**Message**: _"Same dependency graph, different bundler - Nx abstracts the complexity"_

## 🎯 Key Talking Points for Angular NYC

### **The Rspack Story**

- _"Rspack is a Rust-based bundler that's webpack-compatible but 5-10x faster"_
- _"With Nx, switching from Webpack to Rspack is practically effortless"_
- _"You get the same Module Federation architecture with dramatically better performance"_

### **The Nx Value Proposition**

- _"Nx handles bundler complexity so you don't have to"_
- _"Same commands, same workflow, whether you choose Webpack or Rspack"_
- _"Migration between bundlers becomes trivial"_

### **The Developer Experience**

- _"HMR across micro-frontend boundaries with both bundlers"_
- _"Zero configuration for complex Module Federation setups"_
- _"Focus on building features, not configuring build tools"_

## 🚨 Troubleshooting

### **Webpack Apps (shell, myremote\*):**

- Ensure you're using `--devRemotes=myremote1`
- Port 4200-4203 should be available
- Try: `nx serve shell` (without devRemotes) first

### **Rspack Apps (shell2, rsremote\*):**

- Use `--devRemotes=rsremote1` for rspack demos
- Port 4300-4303 should be available
- If issues: `nx reset` and try `nx serve shell2`

### **General Issues:**

- Check browser console for errors
- Clear browser cache
- Run: `npm install` to ensure dependencies

## 📊 Demo Success Metrics

After your demo, the audience should understand:

1. **Module Federation HMR works seamlessly** with both Webpack and Rspack
2. **Nx eliminates bundler configuration complexity** for both options
3. **Rspack provides significant performance benefits** with zero config overhead
4. **Migration between bundlers is trivial** when using Nx
5. **Developer productivity benefits** are maintained regardless of bundler choice

## **Resources**

- [Nx Documentation](https://nx.dev)
- [Module Federation Guide](https://nx.dev/concepts/module-federation)
- [Nx Rspack Plugin](https://nx.dev/packages/rspack)
- [Angular NYC Meetup](https://www.meetup.com/angularnyc/)

## 💝 Special Thanks

**To Angular NYC** for being an awesome community that appreciates good developer tooling!

**Special shoutout to [Colum Ferry](https://github.com/Coly010)** - my brilliant colleague who builds the Module Federation and rspack integrations and plugins for Nx. The seamless MFE experience you see in this demo is thanks to his incredible work!

**Also huge thanks to [Leosvel Pérez Espinosa](https://github.com/leosvelperez)** - who is collaborating with Colum on the exciting new [`@nx/angular-rspack`](https://github.com/nrwl/angular-rspack) package. This integration brings the lightning-fast Rspack bundler to Angular + Nx workflows with zero configuration!

## 🎉 Ready to see some blazing fast hot reloads?

### **Try Webpack (Traditional):**

```bash
nx serve shell --devRemotes=myremote1
# Navigate to http://localhost:4200
```

### **Try Rspack (Lightning Fast):** ⚡

```bash
nx serve shell2
# Navigate to http://localhost:4200
# Feel the speed difference! ✨
```

**Remember**: The goal is to show how Nx **streamlines the micro-frontend development workflow** while making it trivial to leverage the performance benefits of modern bundlers like Rspack!

---

_Made with ❤️ for Angular NYC_
