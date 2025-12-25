---
icon: grid-4
---

# 2D Grid Engine

## 2D Grid Engine

A lightweight, render-agnostic engine for **2D grid state**. Use it for roguelikes, tactics, simulations, or any grid UI. It works with React, Canvas, DOM, or the terminal.

### Why it’s useful

{% hint style="info" %}
This library **does not render**. It owns the data model. You choose how to draw it.
{% endhint %}

* Keep grid logic in one place.
* Separate terrain, entities, and effects with layers.
* Model state with ECS-style components.
* Swap renderers without rewriting rules.

### Typical use cases

* Roguelike maps with walls, fog, and items.
* Strategy games with units, zones, and pathing data.
* Grid dashboards and visualizations.
* Puzzle games with stacked rules per cell.

### What you get

#### Included

* A bounded 2D grid with coordinates `{ row, col }`.
* Multiple named layers, each with its own default cell value.
* Registries for tiles and entity blueprints.
* Entity instances with component data.

#### Not included

* Rendering, sprites, animation, or UI widgets.
* Physics or collision resolution beyond what you model.
* Pathfinding (you can build it on top of layers).

### Get started

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

Follow the runnable walkthrough in [Getting Started](docs/getting-started.md).

* Create the engine with a grid size.
* Add a `terrain` layer for static tiles.
* Add an `entities` layer for dynamic instances.
{% endstep %}

{% step %}
### Render it your way

* Read the grid state each frame, or after actions.
* Render cells using React, Canvas, DOM, or console output.
* Keep rules in pure functions that read/write layers.
{% endstep %}
{% endstepper %}

### Core concepts

* **Grid**: size + bounds checks + layer storage.
* **Layer**: a matrix of values (terrain, entities, effects).
* **Tile**: static world data (walkability, metadata, etc.).
* **Entity**: a unique instance with components (health, inventory, AI state).

Learn the model in [Core Concepts](docs/concepts.md).

### Key principles

* Treat the engine as your single source of truth.
* Keep layers focused (terrain vs entities vs effects).
* Keep rendering as a pure projection of state.

### Next links

* Start here: [Getting Started](docs/getting-started.md)
* Learn the model: [Core Concepts](docs/concepts.md)
* Browse methods: [API Reference](api/)
