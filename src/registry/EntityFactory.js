import Entity from '../core/Entity.js';

/**
 * Factory class responsible for registering blueprints and instantiating Entities.
 * Supports multiple registration types: Classes (inheritance), Entity instances (cloning), 
 * or plain objects (configuration).
 */
export default class EntityFactory {
    constructor() {
        /** @type {Map<string, any>} */
        this.blueprints = new Map();
    }

    /**
     * Registers a new entity blueprint.
     * @param {string} id - Unique identifier for the blueprint.
     * @param {Function|Entity|Object} blueprint - The template for the entity. 
     * Can be an Entity subclass, an existing Entity instance, or a data object.
     * @throws {console.error} If the blueprint is invalid or a class does not extend Entity.
     */
    register(id, blueprint) {
        if (!blueprint) {
            console.error(`Factory Error [${id}]: Blueprint is missing.`);
            return;
        }

        if (typeof blueprint === 'function') {
            if (!(blueprint.prototype instanceof Entity) && blueprint !== Entity) {
                console.error(`Factory Error [${id}]: Class must extend Entity.`);
                return;
            }
        }

        else if (typeof blueprint !== 'object') {
            console.error(`Factory Error [${id}]: Blueprint must be a class, object, or Entity instance.`);
            return;
        }

        this.blueprints.set(id, blueprint);
    }

    /**
     * Creates a new Entity instance based on a registered blueprint.
     * @param {string} id - The ID of the registered blueprint.
     * @param {Object} [overrides={}] - Properties to override on the new instance.
     * @returns {Entity|null} The created entity or null if the blueprint was not found.
     */
    create(id, overrides = {}) {
        const blueprint = this.blueprints.get(id);
        if (!blueprint) {
            console.error(`Factory: Blueprint '${id}' not found!`);
            return null;
        }

        const entity = this.#instantiate(blueprint, overrides);

        this.#applyDefaultComponents(entity, blueprint);

        return entity;
    }

    /**
     * Internal method to handle instantiation logic based on blueprint type.
     * @param {Function|Entity|Object} blueprint 
     * @param {Object} overrides 
     * @returns {Entity}
     * @private
     */
    #instantiate(blueprint, overrides) {
        if (typeof blueprint === 'function') {
            return new blueprint(overrides);
        }

        if (blueprint instanceof Entity) {
            return blueprint.clone(overrides);
        }

        return new Entity({ ...blueprint, ...overrides });
    }

    /**
     * Internal method to inject default components into the created entity.
     * @param {Entity} entity 
     * @param {Object} blueprint 
     * @private
     */
    #applyDefaultComponents(entity, blueprint) {
        if (blueprint.defaultComponents) {
            Object.entries(blueprint.defaultComponents).forEach(([name, data]) => {
                entity.addComponent(name, data);
            });
        }
    }
}