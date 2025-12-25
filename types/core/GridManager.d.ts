/**
 * Multi-layered grid manager for handling different data layers on the same map.
 */
export default class GridManager {
    /**
     * @param {number} rows - Total number of rows in the grid.
     * @param {number} cols - Total number of columns in the grid.
     * @throws {Error} If rows or columns are not provided.
     */
    constructor(rows: number, cols: number);
    /** @type {number} */
    rows: number;
    /** @type {number} */
    cols: number;
    /** @type {Map<string, GridLayer>} */
    layers: Map<string, GridLayer>;
    /** @type {Map<string, any>} */
    layerDefaults: Map<string, any>;
    /**
     * Adds a new layer to the grid.
     * @param {string} name - Unique identifier for the layer.
     * @param {any} defaultVal - Default value for all cells in this layer.
     * @throws {Error} If the layer name already exists.
     */
    addLayer(name: string, defaultVal: any): void;
    /**
     * Gets the value at a specific position in a layer.
     * @param {string} layerName - Name of the layer to query.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @returns {any|null} The value at the position, or null if the layer doesn't exist.
     */
    getCellValue(layerName: string, position: {
        x: number;
        y: number;
    }): any | null;
    /**
     * Sets a value at a specific position in a layer.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @param {any} value - The value to set.
     * @returns {boolean} True if the operation was successful.
     */
    setCell(layerName: string, position: {
        x: number;
        y: number;
    }, value: any): boolean;
    /**
     * Resets a cell to the layer's default value.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @returns {boolean} True if the operation was successful.
     */
    clearCell(layerName: string, position: {
        x: number;
        y: number;
    }): boolean;
    /**
     * Moves a value from one position to another within the same layer.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} fromPos - Source coordinates.
     * @param {{x: number, y: number}} toPos - Destination coordinates.
     * @returns {boolean} True if the move was successful.
     */
    move(layerName: string, fromPos: {
        x: number;
        y: number;
    }, toPos: {
        x: number;
        y: number;
    }): boolean;
}
import GridLayer from "./GridLayer.js";
