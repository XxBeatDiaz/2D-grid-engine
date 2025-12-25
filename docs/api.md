# 📜 Detailed API Reference

This page provides an in-depth technical reference for all the classes and methods available in the **2D Grid Engine**.

---

## 🏗️ GridManager
The core manager responsible for the 2D coordinate system and data layers.

### `addLayer(name, defaultValue)`
Initializes a new data matrix (layer) for the grid.
* **Parameters:**
    * `name` (string): Unique identifier for the layer (e.g., `'terrain'`, `'entities'`, `'lighting'`).
    * `defaultValue` (any): The initial value to fill every cell in this layer.
    * *Pro Tip:* Use `null` for layers that will hold dynamic entities.
* **Returns:** `void`

### `getCellValue(layerName, coords)`
Retrieves the data stored at a specific coordinate on a specific layer.
* **Parameters:**
    * `layerName` (string): The name of the layer to query.
    * `coords` (object): An object `{ row: number, col: number }`.
* **Returns:** The data in the cell, or `undefined` if the coordinates are out of bounds.

### `setCell(layerName, coords, value)`
Overwrites the data in a specific cell.
* **Parameters:**
    * `layerName` (string): The target layer.
    * `coords` (object): `{ row, col }`.
    * `value` (any): The data to store (Object, Entity, Tile, or `null`).
* **Returns:** `boolean` — `true` if the operation was successful, `false` if the coordinates were out of bounds.

### `move(layerName, fromCoords, toCoords)`
An atomic operation that transfers data from one cell to another within the same layer.
* **Parameters:**
    * `layerName` (string): The target layer.
    * `fromCoords` (object): Source `{ row, col }`.
    * `toCoords` (object): Destination `{ row, col }`.
* **Returns:** `boolean` — `true` if the move was successful. Returns `false` if the source cell was empty or the destination was out of bounds.

---

## 🏭 EntityFactory
Manages the registration of blueprints and the instantiation of unique game entities.

### `register(typeId, config)`
Defines a template for a specific type of entity.
* **Parameters:**
    * `typeId` (string): Unique identifier for the type (e.g., `'PLAYER'`, `'NPC'`).
    * `config` (object): A generic configuration object.
    * `config.defaultComponents` (object): A map of component names and their initial data objects.
* **Returns:** `void`

### `create(typeId)`
Produces a new, unique `Entity` instance based on a registered template.
* **Parameters:**
    * `typeId` (string): The registered blueprint to use.
* **Returns:** A unique `Entity` instance with its own unique `instanceId` and fresh copies of all default components.

---

## 👤 Entity (Instance)
An object representing a unique instance of a registered entity type.

### `instanceId` (Property)
* **Type:** `string` (UUID).
* **Description:** A unique identifier generated upon creation to distinguish this instance from all others.

### `addComponent(name, data)`
Attaches a new component or updates an existing one.
* **Parameters:**
    * `name` (string): The component's unique key (e.g., `'health'`).
    * `data` (object): The data to store.
* **Note:** The engine performs a **deep copy** of the data. Changes to the original object will not affect the entity until `addComponent` is called again.
* **Returns:** `void`

### `getComponent(name)`
Retrieves a copy of the component data.
* **Parameters:**
    * `name` (string): The component key.
* **Returns:** A **copy** of the data object, or `null` if the component is not found.

### `hasComponent(name)`
Checks if the entity possesses a specific component.
* **Returns:** `boolean`

---

## 🧱 TileRegistry
A registry for static world elements (terrain/tiles).

### `register(id, properties)`
* **Parameters:**
    * `id` (string): Unique ID for the tile (e.g., `'GRASS'`).
    * `properties` (object): A generic object containing any data (e.g., `{ walkPassable: true, transparency: 0.5 }`).
* **Returns:** `void`

### `get(id)`
* **Returns:** The properties object associated with the tile ID.