---
description: Grid layers and cell operations.
---

# GridManager

## GridManager

Owns the 2D coordinate system and all grid layers. Use it to create layers and read/write/move values.

### `addLayer(name, defaultValue)`

Create a new layer matrix.

* **Parameters**
  * `name` (`string`): layer id. Example: `terrain`, `entities`.
  * `defaultValue` (`any`): value for every cell.
* **Returns**: `void`

{% hint style="info" %}
Use `null` for layers that hold dynamic entities. It makes empty checks explicit.
{% endhint %}

{% code title="Signature" %}
```ts
addLayer(name: string, defaultValue: any): void
```
{% endcode %}

### `getCellValue(layerName, coords)`

Read the value at a coordinate.

* **Parameters**
  * `layerName` (`string`)
  * `coords` (`{ row: number, col: number }`)
* **Returns**: `any | undefined`

{% code title="Example" %}
```js
const value = grid.getCellValue('terrain', { row: 0, col: 0 });
```
{% endcode %}

{% hint style="info" %}
Out-of-bounds reads return `undefined`.
{% endhint %}

### `setCell(layerName, coords, value)`

Write a value into a cell.

* **Parameters**
  * `layerName` (`string`)
  * `coords` (`{ row: number, col: number }`)
  * `value` (`any`)
* **Returns**: `boolean`

{% code title="Example" %}
```js
// Place an entity.
grid.setCell('entities', { row: 2, col: 5 }, enemy);

// Clear a cell.
grid.setCell('entities', { row: 2, col: 5 }, null);
```
{% endcode %}

### `move(layerName, fromCoords, toCoords)`

Atomically move a value inside the same layer.

* **Parameters**
  * `layerName` (`string`)
  * `fromCoords` (`{ row: number, col: number }`)
  * `toCoords` (`{ row: number, col: number }`)
* **Returns**: `boolean`

{% code title="Example" %}
```js
grid.move('entities', { row: 1, col: 1 }, { row: 1, col: 2 });
```
{% endcode %}

{% hint style="warning" %}
Returns `false` if the source cell is empty. Also returns `false` if destination is out of bounds.
{% endhint %}

### Related

* Back to [API Reference](./)
