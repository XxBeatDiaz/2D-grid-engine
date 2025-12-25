# 🧱 TileRegistry

The **TileRegistry** stores tile definitions. The grid stores tile ids, not full objects.

Defines a tile type.

#### `register(id, properties)`

### Methods

* `id`: unique id, like `'WATER'` or `'WALL'`.
* `properties`: any JSON-ish data your rules need.

#### `get(id)`

Returns the properties for a tile id.

### Example: terrain logic

{% code title="tiles.mjs" %}
```js
tiles.register('WALL', {
  walkPassable: false,
  blocksVision: true,
  texture: 'stone_wall.png',
});

tiles.register('FLOOR', {
  walkPassable: true,
  blocksVision: false,
});

grid.addLayer('terrain', 'FLOOR');
grid.setCell('terrain', { row: 5, col: 5 }, 'WALL');
```
{% endcode %}
