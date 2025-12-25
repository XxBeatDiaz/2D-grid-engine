```markdown
# Core Concepts

### Render-Agnostic Design
Unlike most engines, this library does not draw pixels. It manages the **state** of your grid. Whether you use `console.log`, `React components`, or `HTML5 Canvas`, the engine provides the data structure you need.

### Entity-Component System (ECS)
Entities are unique containers. Components are data objects.
* **Entity**: A unique ID in the world (e.g., "Player #1").
* **Component**: Specific data attached to an entity (e.g., `health`, `position`, `inventory`).

### Layers
Layers allow you to stack information. You can check the `terrain` layer for walls while checking the `entities` layer for enemies at the same coordinates. This separation of concerns makes your game logic cleaner.