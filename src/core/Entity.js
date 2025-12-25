/**
 * Base class for all game objects. 
 * Uses a hybrid Entity-Component approach for flexible behavior.
 */
export default class Entity {
    /**
     * @param {Object} [properties={}] - Initial properties to be merged into the entity (e.g., x, y, char).
     */
    constructor(properties = {}) {
        /** @type {string} */
        this.instanceId = crypto.randomUUID();

        /** * @type {Map<string, Object>} 
         * Internal storage for components.
         */
        this.components = new Map();

        Object.assign(this, properties);
    }

    /**
     * Adds a component to the entity.
     * Performs a deep copy of the data to ensure instance unique state.
     * @param {string} name - The unique name of the component.
     * @param {Object} [data={}] - The component's initial data/state.
     * @returns {this} The entity instance (for chaining).
     */
    addComponent(name, data = {}) {
        this.components.set(name, JSON.parse(JSON.stringify(data)));
        return this;
    }

    /**
     * Removes a component from the entity.
     * @param {string} name - The name of the component to remove.
     * @returns {this} The entity instance (for chaining).
     */
    removeComponent(name) {
        this.components.delete(name);
        return this;
    }

    /**
     * Retrieves a component's data.
     * @param {string} name - The name of the component.
     * @returns {Object|undefined} The component data or undefined if not found.
     */
    getComponent(name) {
        return this.components.get(name);
    }

    /**
     * Checks if the entity has a specific component.
     * @param {string} name - The name of the component.
     * @returns {boolean}
     */
    hasComponent(name) {
        return this.components.has(name);
    }

    /**
     * Creates a deep clone of the entity, including its components.
     * Useful for instantiating entities from a prototype.
     * @param {Object} [overrides={}] - Properties to override in the cloned version.
     * @returns {Entity} A new instance of the same class.
     */
    clone(overrides = {}) {
        const cloned = new this.constructor({ ...this, ...overrides });
        this.components.forEach((data, name) => {
            cloned.addComponent(name, data);
        });
        return cloned;
    }
}