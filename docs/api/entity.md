# 👤 Entity

`Entity` is a runtime container for component data. It’s built for a lightweight, data-first ECS style.

### Core properties

* `instanceId` (`string`): unique id per instance.
* `components` (`Map`): component name → data object.

Adds a new component to the entity.

Adds a component. Returns `this` for chaining.

#### `removeComponent(name)`

Removes a component. Returns `this` for chaining.

Returns the component data, or `undefined`.

#### `hasComponent(name)`

Creates a deep clone. Use `overrides` to tweak fields on the clone.

### Example: chaining and cloning

Because methods return `this`, you can set up entities very quickly:

{% code title="entity-chaining.mjs" %}
```js
// Create a base "Goblin" prototype.
const goblinProto = new Entity({ symbol: 'g', color: 'green' })
  .addComponent('health', { hp: 20, max: 20 })
  .addComponent('ai', { behavior: 'aggressive' });

// Clone the prototype.
const enemy1 = goblinProto.clone({ x: 5, y: 10 });

// Modify the clone without touching the prototype.
enemy1.getComponent('health').hp -= 5;
console.log(goblinProto.getComponent('health').hp); // 20
```
{% endcode %}

## 📝 Technical Note: Deep Copying

The `addComponent` method uses:

```js
JSON.parse(JSON.stringify(data));
```

{% hint style="warning" %}
`addComponent()` deep-copies data via `JSON.parse(JSON.stringify(data))`. Keep components JSON-serializable. Avoid functions or class instances.
{% endhint %}
