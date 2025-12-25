🏭 EntityFactory
The EntityFactory uses the Blueprint Pattern to define and instantiate game objects (Entities) with pre-configured components.

Core Functions
register(type, config)
Defines a new type of entity.

type: A unique string (e.g., 'GOBLIN', 'CHEST').

config: An object containing defaultComponents.

create(type)
Instantiates a new Entity based on a registered blueprint.

Returns a unique Entity instance with a generated instanceId.

Code Example: Blueprints & Instantiation

// Register a template for a Player
entities.register('PLAYER', {
    defaultComponents: {
        health: { hp: 100, max: 100 },
        stats: { strength: 10, speed: 5 }
    }
});

// Create two separate instances
const player1 = entities.create('PLAYER');
const player2 = entities.create('PLAYER');

// Each has a unique ID but the same starting components
console.log(player1.instanceId !== player2.instanceId); // true