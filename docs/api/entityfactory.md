# 🏭 EntityFactory

The **EntityFactory** defines entity blueprints and spawns instances. Use it to keep entity creation consistent.

Registers a blueprint.

#### `register(type, config)`

### Methods

* `type`: unique id, like `'GOBLIN'` or `'CHEST'`.
* `config.defaultComponents`: starting component data.

#### `create(type)`

Creates a new entity instance from a blueprint. Returns an `Entity` with a new `instanceId`.

### Example: blueprints and instantiation

{% code title="entities.mjs" %}
```js
entities.register('PLAYER', {
  defaultComponents: {
    health: { hp: 100, max: 100 },
    stats: { strength: 10, speed: 5 },
  },
});

const player1 = entities.create('PLAYER');
const player2 = entities.create('PLAYER');

console.log(player1.instanceId !== player2.instanceId); // true
```
{% endcode %}
