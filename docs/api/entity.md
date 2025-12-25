# 👤 Entity

The `Entity` class is a flexible container for game objects. It uses a **Hybrid Entity-Component** approach, allowing you to attach data-driven behaviors dynamically.

---

### Core Properties

| Property     | Type     | Description                                                     |
| :----------- | :------- | :-------------------------------------------------------------- |
| `instanceId` | `string` | A unique UUID generated automatically for every instance.       |
| `components` | `Map`    | Internal storage mapping component names to their data objects. |

---

### API Reference

#### `addComponent(name, data)`

Adds a new component to the entity.

- **Deep Copy**: The engine performs a `JSON` deep copy to ensure that changing data in one entity doesn't affect another entity with the same component.
- **Returns**: The entity instance (allows **method chaining**).

#### `removeComponent(name)`

Removes a component by its name.

- **Returns**: The entity instance (allows **method chaining**).

#### `getComponent(name)`

Returns the data object for the specified component, or `undefined` if it doesn't exist.

#### `hasComponent(name)`

Returns a boolean indicating if the component is present.

#### `clone(overrides)`

Creates a complete deep clone of the entity and its components.

- **overrides**: An optional object to change specific properties (like position) on the new instance.

---

### Example: Chaining and Cloning

Because methods return `this`, you can set up entities very quickly:

```javascript
// Create a base "Goblin" prototype
const goblinProto = new Entity({ symbol: "g", color: "green" })
  .addComponent("health", { hp: 20, max: 20 })
  .addComponent("ai", { behavior: "aggressive" });

// Clone the prototype to create a specific enemy in the world
const enemy1 = goblinProto.clone({ x: 5, y: 10 });

// Modify the clone without affecting the prototype
enemy1.getComponent("health").hp -= 5;
console.log(goblinProto.getComponent("health").hp); // Still 20
```

## 📝 Technical Note: Deep Copying

The `addComponent` method uses:

```js
JSON.parse(JSON.stringify(data));
```
**Note:** Components should only contain **JSON-serializable data** —  
no functions or complex classes inside the component data itself.

