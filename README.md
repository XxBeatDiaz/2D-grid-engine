---
description: A quick overview of the 2D Grid Engine.
---

# Introduction

**2D Grid Engine** is a small, display-agnostic library for grid-based worlds. It gives you clean data structures for tiles, entities, and movement.

### What you get

* **Layered grids**. Keep terrain, objects, and actors separated.
* **Blueprint-based entities**. Define once, instantiate many times.
* **Headless logic**. Render with Canvas, PixiJS, React, a server, or a terminal.

### Mental model

* **Tiles** are static definitions in a registry.
* **Entities** are runtime instances with component data.
* **The grid** stores IDs or entity instances per cell.

{% hint style="info" %}
This engine handles _state and rules_. Rendering is always up to you.
{% endhint %}

### Quick path

1. Install and run your first script in [Getting Started](docs/getting-started.md).
2. Learn the architecture in [Core Concepts](docs/concepts.md).
