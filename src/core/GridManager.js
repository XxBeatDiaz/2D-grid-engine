import GridLayer from "./GridLayer.js";

/**
 * Multi-layered grid manager for handling different data layers on the same map.
 */
export default class GridManager {
    /** @type {number} */
    rows;
    /** @type {number} */
    cols;
    /** @type {Map<string, GridLayer>} */
    layers;
    /** @type {Map<string, any>} */
    layerDefaults;

    /**
     * @param {number} rows - Total number of rows in the grid.
     * @param {number} cols - Total number of columns in the grid.
     * @throws {Error} If rows or columns are not provided.
     */
    constructor(rows, cols) {
        if (!rows || !cols) {
            throw new Error("GridManager requires rows and cols");
        }

        this.rows = rows;
        this.cols = cols;

        this.layers = new Map();
        this.layerDefaults = new Map();
    }

    /**
     * Adds a new layer to the grid.
     * @param {string} name - Unique identifier for the layer.
     * @param {any} defaultVal - Default value for all cells in this layer.
     * @throws {Error} If the layer name already exists.
     */
    addLayer(name, defaultVal) {
        if (this.layers.has(name)) {
            throw new Error(`Layer "${name}" already exists`);
        }

        const layer = new GridLayer(this.rows, this.cols, defaultVal);
        this.layers.set(name, layer);
        this.layerDefaults.set(name, defaultVal);
    }

    /**
     * Gets the value at a specific position in a layer.
     * @param {string} layerName - Name of the layer to query.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @returns {any|null} The value at the position, or null if the layer doesn't exist.
     */
    getCellValue(layerName, position) {
        const layer = this.layers.get(layerName);
        if (!layer) return null;

        return layer.get(position);
    }

    /**
     * Sets a value at a specific position in a layer.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @param {any} value - The value to set.
     * @returns {boolean} True if the operation was successful.
     */
    setCell(layerName, position, value) {
        const layer = this.layers.get(layerName);
        if (!layer) return false;

        return layer.set(position, value);
    }

    /**
     * Resets a cell to the layer's default value.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} position - The coordinate object.
     * @returns {boolean} True if the operation was successful.
     */
    clearCell(layerName, position) {
        const layer = this.layers.get(layerName);
        if (!layer) return false;

        const defaultVal = this.layerDefaults.get(layerName);
        return layer.set(position, defaultVal);
    }

    /**
     * Moves a value from one position to another within the same layer.
     * @param {string} layerName - Name of the layer.
     * @param {{x: number, y: number}} fromPos - Source coordinates.
     * @param {{x: number, y: number}} toPos - Destination coordinates.
     * @returns {boolean} True if the move was successful.
     */
    move(layerName, fromPos, toPos) {
        const layer = this.layers.get(layerName);
        if (!layer) return false;

        const value = layer.get(fromPos);

        if (value === null || value === this.layerDefaults.get(layerName)) {
            return false;
        }

        const success = layer.set(toPos, value);
        if (success) {
            this.clearCell(layerName, fromPos);
            return true;
        }

        return false;
    }
}