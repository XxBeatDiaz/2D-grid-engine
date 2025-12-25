/**
 * A central registry for tile definitions.
 * Stores static properties and metadata for different tile types.
 */
export default class TileRegistry {
    /**
     * Registers a new tile type in the registry.
     * @param {string} id - Unique identifier for the tile type (e.g., 'GRASS', 'WALL').
     * @param {Object} props - Metadata and properties of the tile (e.g., char, color, isBlocking).
     */
    register(id: string, props: any): void;
    /**
     * Retrieves a tile definition by its ID.
     * @param {string} id - The unique identifier of the tile.
     * @returns {Object|undefined} The tile properties object, or undefined if not found.
     */
    get(id: string): any | undefined;
    #private;
}
