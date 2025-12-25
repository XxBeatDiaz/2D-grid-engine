/**
 * Factory class responsible for registering blueprints and instantiating Entities.
 * Supports multiple registration types: Classes (inheritance), Entity instances (cloning),
 * or plain objects (configuration).
 */
export default class EntityFactory {
    /** @type {Map<string, any>} */
    blueprints: Map<string, any>;
    /**
     * Registers a new entity blueprint.
     * @param {string} id - Unique identifier for the blueprint.
     * @param {Function|Entity|Object} blueprint - The template for the entity.
     * Can be an Entity subclass, an existing Entity instance, or a data object.
     * @throws {console.error} If the blueprint is invalid or a class does not extend Entity.
     */
    register(id: string, blueprint: Function | Entity | any): void;
    /**
     * Creates a new Entity instance based on a registered blueprint.
     * @param {string} id - The ID of the registered blueprint.
     * @param {Object} [overrides={}] - Properties to override on the new instance.
     * @returns {Entity|null} The created entity or null if the blueprint was not found.
     */
    create(id: string, overrides?: any): Entity | null;
    #private;
}
import Entity from '../core/Entity.js';
