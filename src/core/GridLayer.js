/**
 * Represents a single layer of data within a grid system.
 * Handles bounds checking and data storage for a 2D coordinate system.
 */
export default class GridLayer {
    /** @type {number} */
    #rows;
    /** @type {number} */
    #cols;
    /** @type {any[][]} */
    #data;

    /**
     * @param {number} rows - The number of rows in the layer.
     * @param {number} cols - The number of columns in the layer.
     * @param {any} defaultVal - The initial value to populate all cells.
     * @throws {Error} If rows or columns are not provided.
     */
    constructor(rows, cols, defaultVal) {
        if (!rows || !cols) {
            throw new Error("GridLayer requires rows and cols");
        }

        this.#rows = rows;
        this.#cols = cols;

        this.#data = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => defaultVal)
        );
    }

    /**
     * Retrieves the value from a specific coordinate.
     * @param {Object} position - The target coordinates.
     * @param {number} position.row - The row index.
     * @param {number} position.col - The column index.
     * @returns {any|null} The value at the coordinate, or null if out of bounds.
     */
    get({ row, col }) {
        if (!this.#inBounds({ row, col })) return null;
        return this.#data[row][col];
    }

    /**
     * Sets a value at a specific coordinate.
     * @param {Object} position - The target coordinates.
     * @param {number} position.row - The row index.
     * @param {number} position.col - The column index.
     * @param {any} value - The value to store in the cell.
     * @returns {boolean} True if the value was set, false if out of bounds.
     */
    set({ row, col }, value) {
        if (!this.#inBounds({ row, col })) return false;
        this.#data[row][col] = value;
        return true;
    }

    /**
     * Internal check to verify if a coordinate is within the layer boundaries.
     * @param {Object} position - The coordinates to check.
     * @param {number} position.row - The row index.
     * @param {number} position.col - The column index.
     * @returns {boolean}
     * @private
     */
    #inBounds({ row, col }) {
        return (
            row >= 0 &&
            col >= 0 &&
            row < this.#rows &&
            col < this.#cols
        );
    }
}