## 📐 GridManager

The **GridManager** is the heart of the engine. It handles the grid dimensions, manages multiple layers, and controls entity movement.

### Core Functions

- **addLayer(name, defaultTile)**  
  Creates a new layer in the grid.

  - `name`: Unique string identifier for the layer.
  - `defaultTile` (Optional): The tile type that will fill the layer initially.

- **setCell(layerName, position, value)**  
  Directly sets the content of a specific cell.

  - `position`: An object `{ row, col }`.
  - `value`: Can be a tile ID, an entity instance, or `null`.

- **getCellValue(layerName, position)**  
  Returns whatever is currently at the specified position on the given layer.

- **move(layerName, from, to)**  
  The primary way to move entities. It handles clearing the old cell and filling the new one.  
  Returns `true` if the move was successful, `false` otherwise.

### Code Example: Creating a Grid & Moving an Entity

```js
import { createGridEngine } from "@beatdiaz/2d-grid-engine";

// 1. Initialize a 10x10 Grid
const { grid, entities, tiles } = createGridEngine(10, 10);

// 2. Setup Terrain
tiles.register("GRASS", { walkPassable: true });
grid.addLayer("environment", "GRASS");

// 3. Setup Objects Layer
grid.addLayer("actors", null);

// 4. Create a Player Entity
entities.register("PLAYER", {
  defaultComponents: { position: { x: 0, y: 0 } },
});
const myPlayer = entities.create("PLAYER");

// 5. Place Player at (0, 0)
grid.setCell("actors", { row: 0, col: 0 }, myPlayer);

// 6. Move Player to (0, 1)
const moveSuccessful = grid.move(
  "actors",
  { row: 0, col: 0 },
  { row: 0, col: 1 }
);

if (moveSuccessful) {
  console.log("Player is now at (0, 1)!");
} else {
  console.log("Move failed - cell might be occupied or out of bounds.");
}
```

### Important Notes

- **Bounds Checking** – GridManager automatically prevents actions outside the defined grid size.

- **Layer Independence** – Moving an entity on the `actors` layer does not affect the `environment` layer beneath it.
