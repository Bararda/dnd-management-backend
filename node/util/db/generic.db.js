const { db, sql } = require("../sql");

const genericDb = {
    get(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `SELECT * FROM ?? WHERE ${whereClause}`;
            console.log(statement, values);
            const results = await db.query(statement, [tablename, ...values]);
            console.log('end',results);
            return results;
        };
    },
    create(tablename) {
        return async object => {
            const statement = `INSERT INTO ?? SET ?`;
            const results = db.query(statement, [tablename, object]);
            return results;
        };
    },
    update(tablename) {
        return async (query, updates) => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `UPDATE ?? SET ? WHERE ${whereClause}`;
            const results = db.query(statement, [tablename, updates, ...values]);
            return results;
        };
    },
    remove(tablename) {
        return async query => {
            let [whereClause, values] = sql.buildWhere(query);
            const statement = `DELETE FROM ?? WHERE ${whereClause}`;
            const results = db.query(statement, [tablename, ...values]);
            return results;
        };
    }
};
module.exports = genericDb;
