👤 Entity
An Entity is a simple container for data, identified by a unique ID and powered by Components.

Core Functions
getComponent(name)
Returns the data object associated with a component.

updateComponent(name, data)
Updates the component data (merges with existing data).

hasComponent(name)
Returns true if the entity has the specified component.

Example: Modifying an Entity

const monster = entities.create('ORC');

// Check and update health
if (monster.hasComponent('health')) {
    const currentHP = monster.getComponent('health').hp;
    monster.updateComponent('health', { hp: currentHP - 20 });
}