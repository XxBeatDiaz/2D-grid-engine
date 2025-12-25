export { default as Entity } from './core/Entity.js'; 
export { default as GridLayer } from './core/GridLayer.js';
export { default as GridManager } from './core/GridManager.js';
export { default as TileRegistry } from './registry/TileRegistry.js';
export { default as EntityFactory } from './registry/EntityFactory.js';

import GridManager from './core/GridManager.js';
import TileRegistry from './registry/TileRegistry.js';
import EntityFactory from './registry/EntityFactory.js';

/**
 * Initializes a complete 2D Grid Engine instance.
 * Bundles the manager, tile registry, and entity factory into a single object.
 * * @param {number} rows - Total rows for the grid.
 * @param {number} cols - Total columns for the grid.
 * @returns {{
 * grid: GridManager,
 * tiles: TileRegistry,
 * entities: EntityFactory
 * }} An object containing the core engine components.
 */
export function createGridEngine(rows, cols) {
    return {
        grid: new GridManager(rows, cols),
        tiles: new TileRegistry(),
        entities: new EntityFactory()
    };
}