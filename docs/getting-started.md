# Getting Started

The following example demonstrates how to set up a basic world with a player, coins, and traps.

```javascript
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

// 1. Initialize Engine
const { grid, tiles, entities } = createGridEngine(12, 12);

// 2. Register Blueprints
tiles.register('WALL', { walkPassable: false, metadata: { color: '#333' } });
entities.register('PLAYER', { 
    defaultComponents: { 
        health: { current: 3, max: 3 }, 
        score: { total: 0 } 
    } 
});

// 3. Setup Layers
grid.addLayer('terrain', null); // Empty grid
grid.addLayer('entities', null); // Null is recommended for dynamic layers

// 4. Place an Entity
const player = entities.create('PLAYER');
grid.setCell('entities', { row: 1, col: 1 }, player);

console.log("Player spawned at 1,1");