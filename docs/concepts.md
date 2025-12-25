# 💡 Core Concepts

Understanding the philosophy behind the **2D Grid Engine** will help you build more complex simulations and games.

---

### 1. Layered Architecture

Instead of one "big matrix", this engine uses multiple layers stacked on top of each other.

- **The Benefit**: You can have a "Terrain" layer that never changes, an "Objects" layer for items, and an "Actors" layer for players/NPCs.
- **Movement**: When you move an entity on the `Actors` layer, the `Terrain` layer beneath it remains untouched. This prevents "overwriting" your world data when something moves.

---

### 2. Blueprint-Based ECS (Entity Component System)

The engine follows a lightweight **ECS pattern** to manage game data efficiently:

- **Entities**: These are not complex objects; they are simple containers with a unique `instanceId`.
- **Components**: Simple data objects (like `health: { hp: 10 }`) attached to entities to define their state.
- **Blueprints**: You don't create entities from scratch every time. You **register** a blueprint once (e.g., 'ZOMBIE') and **instantiate** it many times.

---

### 3. Decoupled Display (Display Agnostic)

The engine handles **only the logic**. It doesn't care about pixels, sprites, or frames. It is a "Headless" engine that doesn't care if you use:

- **HTML5 Canvas / WebGL**
- **PixiJS / Phaser**
- **React / Vue / Svelte**
- **Terminal / Console**

You simply listen to the grid state and render it however you like. This makes the engine perfect for both web games and server-side simulations.

---

### Key Principles to Remember

1.  **Grid as Truth**: The grid should always be your single source of truth for where things are.
2.  **Logic First**: Always update the engine state before you trigger a visual update.
3.  **Component Data**: Keep components focused on data; let your external systems handle the logic of what to do with that data.
