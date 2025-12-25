---
description: Entity instances and component access.
---

# Entity

## Entity

A unique instance created by `EntityFactory.create()`. Each entity has a stable id and a set of components.

### `instanceId`

* **Type**: `string` (UUID)
* **Meaning**: unique per instance.

### `addComponent(name, data)`

Add or overwrite a component.

* **Parameters**
  * `name` (`string`): component key. Example: `health`.
  * `data` (`object`)
* **Returns**: `void`

{% hint style="info" %}
The engine deep-copies component data. Mutating your original object won’t affect the entity.
{% endhint %}

{% code title="Example" %}
```js
player.addComponent('health', { current: 3, max: 3 });
player.addComponent('inventory', { items: [] });
```
{% endcode %}

### `getComponent(name)`

Read a component by key.

* **Parameters**
  * `name` (`string`)
* **Returns**: a copy of the component data, or `null`.

{% code title="Example" %}
```js
const health = player.getComponent('health');

if (health) {
  console.log(health.current);
}
```
{% endcode %}

### `hasComponent(name)`

Check if the entity has a component.

* **Parameters**
  * `name` (`string`)
* **Returns**: `boolean`

{% code title="Example" %}
```js
if (player.hasComponent('inventory')) {
  // ...
}
```
{% endcode %}

### Related

* Back to [API Reference](./)
