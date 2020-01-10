const { db, sql } = require("../sql");

const genericDb = {
    get(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `SELECT * FROM ?? WHERE ${whereClause}`;
            const results = await db.query(statement, [tablename, ...values]);
            return results;
        };
    },
    create(tablename) {
        return async object => {
            const statement = `INSERT INTO ?? SET ?`;
            const results = db.query(statement, [tablename, object]);
            return results.insertId;
        };
    },
    update(tablename) {
        return async (query, updates) => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `UPDATE ?? SET ? WHERE ${whereClause}`;
            const results = db.query(statement, [tablename, updates, ...values]);
            return results.affectedRows;
        };
    },
    remove(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `DELETE FROM ?? WHERE ${whereClause}`;
            const results = db.query(statement, [tablename, ...values]);
            return results.affectedRows;
        };
    }
};
module.exports = genericDb;
