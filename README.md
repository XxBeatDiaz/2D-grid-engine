# @beatdiaz/2d-grid-engine

A lightweight, high-performance, and flexible 2D grid management engine for JavaScript games and simulations. Built with a focus on modularity, hybrid Entity-Component logic, and multi-layered grid systems.

---

## 🚀 Features:

- **Multi-layered Grid**: Manage terrain, objects, and effects on independent layers.
- **Hybrid ECS**: A flexible Entity-Component system supporting inheritance, prototyping (cloning), and data-driven entities.
- **Intelligent Factory**: Built-in validation during registration to catch bugs early.
- **Type-Safe Experience**: Fully documented with JSDoc for excellent IntelliSense support in VS Code and
- **Zero Dependencies**: Lightweight and fast, designed to run anywhere.

---

## 📦 Installation

npm install @beatdiaz/2d-grid-engine

---

🛠️ Quick Start:
The easiest way to start is using the createGridEngine factory function, which initializes the core components for you.

import { createGridEngine } from '@beatdiaz/2d-grid-engine';

Initialize a 20x20 engine:
const { grid, tiles, entities } = createGridEngine(20, 20);

1. Setup Terrain
   tiles.register('GRASS', { char: '.', color: 'green', walkPassable: true });
   grid.addLayer('map', tiles.get('GRASS'));

2. Register an Entity
   entities.register('PLAYER', {
   char: '@',
   defaultComponents: {
   health: { current: 100, max: 100 },
   stats: { strength: 5 }
   }
   });

3. Spawn and Move
   const player = entities.create('PLAYER');
   grid.setCell('map', { row: 10, col: 10 }, player);

   Move from (10,10) to (10,11):
   grid.move('map', { row: 10, col: 10 }, { row: 10, col: 11 });

---

📖 Core Components:
GridManager & GridLayer
Manage multiple layers of data. Each layer can store primitives, objects, or Entity instances.

addLayer(name, defaultValue): Create a new data plane.

move(layer, from, to): Atomic move operation (sets destination, clears source).

getCellValue(layer, pos): Safe retrieval with bounds checking.

Entity & EntityFactory:
Entities are the "actors" in your engine.

Class-based: Register classes that extend Entity.

Prototype-based: Register an existing instance, and the factory will use .clone().

Data-based: Register a plain object, and the factory will wrap it in an Entity.

TileRegistry:
A central place to store static data about your world tiles (visuals, physics properties, etc.).

---

🧬 Technical Architecture:
The engine uses a Hybrid Entity-Component approach. While it manages data in a grid, the entities themselves carry state via components. These components are deep-copied during creation to ensure no state-leaks between instances.

---

⌨️ Development & Types:
This package is written in ES Modules (type: "module"). It includes full JSDoc documentation. If you are using TypeScript, you can generate definition files using:

npx tsc --declaration --allowJs --emitDeclarationOnly

---

📄 License
Distributed under the MIT License.

Developed by BeatDiaz
