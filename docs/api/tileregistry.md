## 🧱 TileRegistry

The **TileRegistry** manages the "definitions" of your grid cells.  
Instead of storing complex objects in every cell, the grid stores simple IDs that point here.

### Core Functions

- **register(id, properties)**  
  Defines a tile type and its physical/logical traits.

  - `id`: Unique identifier (e.g., `'WATER'`, `'WALL'`).
  - `properties`: Custom data (e.g., `walkPassable: false`).

- **get(id)**  
  Retrieves the properties for a specific tile type.

### Code Example: Defining Terrain Logic

```javaScript
// Define what a 'WALL' is
tiles.register("WALL", {
  walkPassable: false,
  blocksVision: true,
  texture: "stone_wall.png",
});

// Define what 'FLOOR' is
tiles.register("FLOOR", {
  walkPassable: true,
  blocksVision: false,
});

// Use these IDs in the GridManager
grid.addLayer("terrain", "FLOOR");
grid.setCell("terrain", { row: 5, col: 5 }, "WALL");
```
