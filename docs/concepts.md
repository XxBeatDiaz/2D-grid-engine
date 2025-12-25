💡 Core Concepts
Understanding the philosophy behind the 2D Grid Engine will help you build more complex simulations.

1. Layered Architecture
   Instead of one "big matrix", this engine uses multiple layers stacked on top of each other.

The Benefit: You can have a "Terrain" layer that never changes, an "Objects" layer for items, and an "Actors" layer for players/NPCs.

Movement: When you move an entity on the Actors layer, the Terrain layer beneath it remains untouched.

2. Blueprint-Based ECS (Entity Component System)
   The engine follows a lightweight ECS pattern:

Entities: Just a unique ID.

Components: Simple data objects (like health: { hp: 10 }) attached to entities.

Blueprints: You don't create entities from scratch every time. You register a blueprint once (e.g., 'ZOMBIE') and instantiate it many times.

3. Decoupled Display (Display Agnostic)
   The engine handles only the logic. It doesn't care if you use:

HTML5 Canvas

PixiJS / Phaser

React / Vue

Terminal/Console You simply listen to the grid state and render it however you like.
