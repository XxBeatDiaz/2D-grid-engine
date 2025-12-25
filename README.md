# 🚀 2D Grid Engine

**A lightweight, render-agnostic engine for 2D grid state.** Use it for roguelikes, tactics, simulations, or any grid UI. It works seamlessly with **React, Canvas, DOM, or the Terminal.**

---

## 🤔 Why it’s useful

This library **does not render**. It owns the data model; you choose how to draw it.

- **Logic Isolation**: Keep all your grid logic in one organized place.
- **Layered Design**: Separate terrain, entities, and effects using distinct layers.
- **Data-Driven**: Model your state with ECS-style components.
- **Renderer Freedom**: Swap your frontend (from Canvas to React) without rewriting your game rules.

---

## 🎮 Typical Use Cases

- **Roguelikes**: Manage maps with walls, fog-of-war, and items.
- **Tactical Games**: Track units, zones, and pathing data.
- **Grid Dashboards**: Create data visualizations and spreadsheets.
- **Puzzle Games**: Implement stacked rules and complex cell interactions.

---

## 📦 What you get

### Included

- **Grid**: A bounded 2D coordinate system `{ row, col }`.
- **Layers**: Multiple named layers, each with its own default cell value.
- **Registries**: Centralized storage for Tiles and Entity blueprints.
- **Instances**: Unique entity instances with dynamic component data.

### Not included

- **Rendering**: No sprites, animations, or UI widgets.
- **Physics**: No collision resolution beyond what you model in logic.
- **Pathfinding**: You can easily build A\* or Dijkstra on top of the layers.

---

## 🏁 Get Started

### 1. Install

```bash
npm install @beatdiaz/2d-grid-engine
```

## 2️⃣ Create a World

Follow the runnable walkthrough in **Getting Started** to set up your first grid, layers, and entities.  
This will give you a working world state that you can manipulate and render.

```JavaScript
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

// Create engine with a 10x10 grid
const { grid, entities, tiles } = createGridEngine(10, 10);

// Add layers for different concerns
grid.addLayer('terrain', 'GRASS'); // Static tiles
grid.addLayer('entities', null);   // Dynamic instances
```

## 3️⃣ Render it your way

Read the grid state each frame or after actions, and project it to your chosen display:

- **React**
- **Canvas**
- **Console / Terminal**

This keeps the engine as the single source of truth while your renderer purely reflects the state.

## 💡 Core Concepts

- **Grid** – Handles size, bounds checks, and layer storage.

- **Layer** – A matrix of values (terrain, entities, effects).

- **Tile** – Static world data (walkability, metadata, etc.).

- **Entity** – A unique instance with components (health, inventory, AI state).

## ⚖️ Key Principles

- **Single Source of Truth** – Treat the engine as the absolute state of your world.

- **Focus Your Layers** – Keep concerns separate (`Terrain` vs. `Entities` vs. `Effects`).

- **Pure Projection** – Keep rendering as a pure visual reflection of the underlying state.

## 🔗 Documentation Links

- **Start Here** – [Getting Started](#)
- **Learn the Model** – [Core Concepts](#)
- **Browse Methods** – [API Reference](#)

## 🤝 Contributing

Got an idea for a new feature or found a bug? We’d love your help to make this engine even better!

- **Open an Issue** – Use GitHub Issues to report bugs or suggest new ideas.
- **Submit a Pull Request**:
  1. Fork the repository.
  2. Create a feature branch.
  3. Submit your PR with a clear description of the changes.

## 📄 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more details.
