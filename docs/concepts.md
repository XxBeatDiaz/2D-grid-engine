# Core Concepts

## Core Concepts

{% code title="coords.js" %}
```javascript
const here = { row: 3, col: 7 };

grid.getCellValue('terrain', here);
grid.setCell('entities', here, someEntity);
```
{% endcode %}

All operations target `{ row, col }`. Out-of-bounds reads should return `undefined`. Out-of-bounds writes should return `false`.

### Coordinates and bounds

{% hint style="info" %}
Avoid mixing concerns in one layer. It keeps rules small and composable.
{% endhint %}

* `terrain`: walls, floors, water.
* `entities`: player, NPCs, items.
* `effects`: fog, decals, highlights.
* `debug`: heatmaps, path costs, visibility.

Layers let you stack different concerns at the same coordinates. Common patterns:

### Layers

* **Entity**: a unique object in the world (player, coin, monster).
* **Component**: a named data blob (health, inventory, AI state).

Entities are unique instances. Components are data attached to an entity.

### ECS (Entity-Component System)

{% hint style="info" %}
Treat the engine as your “single source of truth”. Your renderer should be a pure projection of that state.
{% endhint %}

You can render with React, Canvas, DOM, or `console.log`.

This library does not draw pixels. It manages **grid state** and exposes a predictable API.

### Render-agnostic by design
