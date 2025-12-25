🏁 Getting Started
Welcome to 2D Grid Engine! This guide will help you set up your first grid environment in under 2 minutes.

1. Installation
   Install the package via NPM:

Bash

npm install @beatdiaz/2d-grid-engine 2. Your First Script
Create a file named index.js and add the following code to initialize a basic world:

JavaScript

import { createGridEngine } from '@beatdiaz/2d-grid-engine';

// Create a 5x5 grid
const { grid, entities, tiles } = createGridEngine(5, 5);

// 1. Define a tile
tiles.register('WALL', { walkPassable: false });

// 2. Add a layer
grid.addLayer('base', null);

// 3. Set a wall at the center
grid.setCell('base', { row: 2, col: 2 }, 'WALL');

console.log('Grid initialized!');
console.log('Cell (2,2) is:', grid.getCellValue('base', { row: 2, col: 2 })); 3. Running the Engine
Since this is an ES Module, ensure your package.json has "type": "module" or use the .mjs extension. Run it using:

Bash

node index.js
