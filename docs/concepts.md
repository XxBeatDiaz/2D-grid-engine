# Core Concepts

### Layered grids

Don’t cram everything into one matrix. Use layers to separate concerns.

### 2. Blueprint-Based ECS (Entity Component System)

### Blueprint-based entities (lightweight ECS)

* **Entity**: a runtime instance with a unique `instanceId`.
* **Component**: a plain data object attached to an entity.
* **Blueprint**: a registered template used to spawn many entities.

The engine handles **only the logic**. It doesn't care about pixels, sprites, or frames. It is a "Headless" engine that doesn't care if you use:

This keeps creation fast and consistent.

You simply listen to the grid state and render it however you like. This makes the engine perfect for both web games and server-side simulations.

The engine only manages state. You render it however you want:

### Display agnostic

* Canvas / WebGL
* PixiJS / Phaser
* React / Vue / Svelte
* Server-side simulations
* Terminal UIs

{% hint style="info" %}
Treat the grid as your source of truth. Your renderer should only read state.
{% endhint %}

### Principles

1. **Grid as truth**. All positions live in the grid.
2. **Logic first**. Update state before re-render.
3. **Data-only components**. Keep functions out of components.
