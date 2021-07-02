const { db, sql } = require("../sql");

const genericDb = {
    /**
     * Calls a generic get for the table provided with the query parameters.
     * Used for generic gets from a table
     * @param {String} tablename 
     */
    get(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `SELECT * FROM ?? WHERE ${whereClause}`;
            const results = await db.query(statement, [tablename, ...values]);
            return results;
        };
    },
    /**
     * Calls a generic insert function for a table from a provided object
     * @param {String} tablename 
     */
    create(tablename) {
        return async object => {
            const statement = `INSERT INTO ?? SET ?`;
            const results = await db.query(statement, [tablename, object]);
            return {insertId: results.insertId};
        };
    },
    /**
     * Calls a generic update function for the table provided
     * The body is used to set the values and the query is used for the where clause
     * @param {String} tablename 
     */
    update(tablename) {
        return async (query, updates) => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `UPDATE ?? SET ? WHERE ${whereClause}`;
            const results = await db.query(statement, [tablename, updates, ...values]);
            return {affectedRows: results.affectedRows};
        };
    },
    /**
     * Calls a generic delete for the table provided.
     * @param {String} tablename 
     */
    remove(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `DELETE FROM ?? WHERE ${whereClause}`;
            const results = await db.query(statement, [tablename, ...values]);
            return {affectedRows: results.affectedRows};
        };
    }
};
module.exports = genericDb;
