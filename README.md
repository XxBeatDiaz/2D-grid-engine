# Home

## 2D Grid Engine

A lightweight, render-agnostic engine for **2D grid state**. Use it for roguelikes, tactics, simulations, or any grid UI. It works with React, Canvas, DOM, or the terminal.

### Why it’s useful

{% hint style="info" %}
This library **does not render**. It owns the data model. You choose how to draw it.
{% endhint %}

* Keep grid logic in one place.
* Separate terrain, entities, and effects with layers.
* Model game state with ECS-style components.
* Swap renderers without rewriting rules.

### Typical use cases

* Roguelike maps with walls, fog, and items.
* Strategy games with units, zones, and pathing data.
* Grid dashboards and visualizations.
* Puzzle games with stacked rules per cell.

### Next steps

* **Grid**: size + coordinate checks + layer storage.
* **Layer**: a matrix of values (terrain, entities, effects).
* **Tile**: static world data (walkability, metadata, etc.).
* **Entity**: a unique instance with components (health, inventory, AI state).

### Mental model

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
### Create a world and add layers

* Start by creating the engine with a grid size.
* Add at least one layer for terrain.
* Add a separate layer for dynamic entities.

See a full runnable example in [Getting Started](docs/getting-started.md).
{% endstep %}

{% step %}
### Render it your way

* Read the grid state each frame, or after actions.
* Render cells using React components, Canvas draws, or console output.
* Keep rules in pure functions that read/write layers.
{% endstep %}
{% endstepper %}

### Quick start

* Rendering, sprites, animation, or UI widgets.
* Physics or collision resolution beyond what you model.
* Pathfinding (you can build it on top of layers).

#### Not included

* A bounded 2D grid with coordinates `{ row, col }`.
* Multiple named layers, each with its own default cell value.
* Registries for tiles and entity “blueprints”.
* Entity instances with component data.

#### Included

### What you get (and what you don’t)

* **Layer-Based**: Separate terrain, entities, and effects into independent layers.
* **ECS Driven**: Manage data through an Entity-Component System for maximum flexibility.
* **Agnostic**: Use any rendering method (React, DOM, Canvas, or Terminal).
* **Generic**: Store any data types, from simple characters to complex objects.

### Key principles

* Read the model in [Core Concepts](docs/concepts.md).
* Jump straight into methods in [API Reference](api/).
