# GridManager

The **GridManager** owns the grid state. It manages layers, bounds, and movement.

Creates a new layer.

#### `addLayer(name, defaultTile?)`

### Key methods

* `name`: unique layer id.
* `defaultTile` (optional): tile id to fill the layer.

#### `setCell(layerName, position, value)`

Writes a cell value.

* `position`: `{ row, col }`.
* `value`: tile id, entity instance, or `null`.

#### `getCellValue(layerName, position)`

Reads a cell value.

Moves an entity between two positions. Returns `true` on success.

#### `move(layerName, from, to)`

{% hint style="info" %}
Movement is layer-scoped. Moving on `actors` won’t touch `terrain`.
{% endhint %}

### Example: create a grid and move an entity

{% code title="move-entity.mjs" %}
```js
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

const { grid, entities, tiles } = createGridEngine(10, 10);

tiles.register('GRASS', { walkPassable: true });
grid.addLayer('environment', 'GRASS');

grid.addLayer('actors', null);

entities.register('PLAYER', {
  defaultComponents: { position: { row: 0, col: 0 } },
});

const player = entities.create('PLAYER');
grid.setCell('actors', { row: 0, col: 0 }, player);

const ok = grid.move('actors', { row: 0, col: 0 }, { row: 0, col: 1 });
console.log('Moved:', ok);
```
{% endcode %}
