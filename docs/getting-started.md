# Getting Started

Set up a tiny world with layers, tiles, and a player entity. This is the fastest path to “state you can render”.

{% hint style="info" %}
Keep rendering separate. Build rules on top of grid state.
{% endhint %}

### Next steps

{% stepper %}
{% step %}
### Install

{% code title="Terminal" %}
```bash
npm install @beatdiaz/2d-grid-engine
```
{% endcode %}
{% endstep %}

{% step %}
### Initialize the engine

{% code title="engine.js" %}
```javascript
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

// Create a 12x12 grid world.
const { grid, tiles, entities } = createGridEngine(12, 12);
```
{% endcode %}
{% endstep %}

{% step %}
### Register tiles and entity blueprints

{% code title="blueprints.js" %}
```javascript
// Terrain tile (static data).
tiles.register('WALL', {
  walkPassable: false,
  metadata: { color: '#333' },
});

// Entity type (dynamic instances).
entities.register('PLAYER', {
  defaultComponents: {
    health: { current: 3, max: 3 },
    score: { total: 0 },
  },
});
```
{% endcode %}

{% hint style="info" %}
Prefer `null` defaults for layers that will store entities. It makes “empty cell” checks cheap and explicit.
{% endhint %}
{% endstep %}

{% step %}
### Create layers

{% code title="layers.js" %}
```javascript
// Static terrain. Use a tile id or tile object, depending on your setup.
grid.addLayer('terrain', null);

// Dynamic entities. `null` means “no entity”.
grid.addLayer('entities', null);
```
{% endcode %}
{% endstep %}

{% step %}
### Spawn an entity

{% code title="spawn.js" %}
```javascript
const player = entities.create('PLAYER');

grid.setCell('entities', { row: 1, col: 1 }, player);

console.log('Player spawned at (row=1, col=1)');
```
{% endcode %}
{% endstep %}
{% endstepper %}

* Learn the model in [Core Concepts](concepts.md).
* Browse methods in [API Reference](../api/).
