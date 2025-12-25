# 🏁 Getting Started

Welcome to **2D Grid Engine**! This guide will help you set up your first grid environment in under 2 minutes.

---

### 1. Installation

Install the package via NPM:

```bash
npm install @beatdiaz/2d-grid-engine
```

## 2️⃣ Your First Script

Create a file named `index.js` and add the following code to initialize a basic world.

This script:

- Sets up a grid
- Defines a wall tile type
- Places it on a layer inside the grid

You’ll now have a minimal world state ready to be rendered however you choose.

```JavaScript
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

// 1. Create a 5x5 grid
// This returns the three main controllers of the engine
const { grid, entities, tiles } = createGridEngine(5, 5);

// 2. Define a tile type
// Tiles are static definitions used for terrain or walls
tiles.register('WALL', { walkPassable: false });

// 3. Add a layer
// Layers allow you to stack different types of data (terrain, objects, etc.)
grid.addLayer('base', null);

// 4. Set a wall at the center (row 2, col 2)
grid.setCell('base', { row: 2, col: 2 }, 'WALL');

console.log('Grid initialized!');
console.log('Cell (2,2) is:', grid.getCellValue('base', { row: 2, col: 2 }));
```

## 3️⃣ Running the Engine

Since this library uses modern **ES Modules**, you have two options to run it:

### Option A

Add `"type": "module"` to your `package.json`.

### Option B

Rename your file from `index.js` to `index.mjs`.

Then run the script using Node.js:

```Bash
node index.js
```

## 🚀 What’s next?

Now that you have your first grid running, you can:

- 💡 **Learn how the engine separates data from display**  
  Understand how blueprints define behavior while renderers stay completely decoupled.

- 📐 **Deep dive into layers and movement**  
  Explore managing multiple layers and handling entity movement across the grid.

- 👤 **Work with components**  
  Learn how to add, remove, and update components on your game objects dynamically.
