---
description: Register and retrieve static tile definitions.
---

# TileRegistry

## TileRegistry

Stores static world definitions. Typically used for terrain in a `terrain` layer.

### `register(id, properties)`

Register a tile definition.

* **Parameters**
  * `id` (`string`): tile id. Example: `GRASS`, `WALL`.
  * `properties` (`object`): arbitrary metadata.
* **Returns**: `void`

{% code title="Example" %}
```js
tiles.register('WALL', {
  walkPassable: false,
  metadata: { color: '#333' },
});
```
{% endcode %}

### `get(id)`

Fetch a tile definition.

* **Parameters**
  * `id` (`string`)
* **Returns**: `object | undefined`

{% code title="Example" %}
```js
const wall = tiles.get('WALL');
```
{% endcode %}

### Related

* Back to [API Reference](./)
