/**
 * Represents a single layer of data within a grid system.
 * Handles bounds checking and data storage for a 2D coordinate system.
 */
export default class GridLayer {
    /**
     * @param {number} rows - The number of rows in the layer.
     * @param {number} cols - The number of columns in the layer.
     * @param {any} defaultVal - The initial value to populate all cells.
     * @throws {Error} If rows or columns are not provided.
     */
    constructor(rows: number, cols: number, defaultVal: any);
    /**
     * Retrieves the value from a specific coordinate.
     * @param {Object} position - The target coordinates.
     * @param {number} position.row - The row index.
     * @param {number} position.col - The column index.
     * @returns {any|null} The value at the coordinate, or null if out of bounds.
     */
    get({ row, col }: {
        row: number;
        col: number;
    }): any | null;
    /**
     * Sets a value at a specific coordinate.
     * @param {Object} position - The target coordinates.
     * @param {number} position.row - The row index.
     * @param {number} position.col - The column index.
     * @param {any} value - The value to store in the cell.
     * @returns {boolean} True if the value was set, false if out of bounds.
     */
    set({ row, col }: {
        row: number;
        col: number;
    }, value: any): boolean;
    #private;
}
