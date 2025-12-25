---
description: Register entity blueprints and create entity instances.
---

# EntityFactory

## EntityFactory

Registers entity blueprints and creates unique entity instances.

### `register(typeId, config)`

Define a blueprint for an entity type.

* **Parameters**
  * `typeId` (`string`): unique entity type id. Example: `PLAYER`, `COIN`.
  * `config` (`object`)
  * `config.defaultComponents` (`object`): component map.
* **Returns**: `void`

{% code title="Example" %}
```js
entities.register('COIN', {
  defaultComponents: {
    value: 1,
  },
});
```
{% endcode %}

{% hint style="info" %}
Keep components as plain data. Avoid putting functions inside component objects.
{% endhint %}

### `create(typeId)`

Create a new `Entity` instance from a blueprint.

* **Parameters**
  * `typeId` (`string`): a registered blueprint id.
* **Returns**: `Entity`

{% code title="Example" %}
```js
const coin = entities.create('COIN');
```
{% endcode %}

### Related

* Back to [API Reference](./)
* See [Entity](entity.md) for instance behavior
