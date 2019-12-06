const sql = require("mysql");
/**
 *
 * @param {Connection} conn
 * @param {String} query
 * @param {Array} values
 */
function queryDatabase(conn, query, values) {
    const callback = (error, results, fields) => {
        conn.release();
        if(error) {
            throw error;
        }
        console.log(results);
    };
    conn.query(query, values, callback);
}

const db = {
    getConnection: () => {
        if (!this.pool) {
            
            this.pool = sql.createPool({
                connectionLimit: process.env.CONNECTION_LIMIT || 10,
                host: process.env.HOSTNAME || "localhost",
                user: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: process.env.DATABASE || "InventoryManager"
            });
        }
        return this.pool;
    },
    query: (query, values) => {
        let conn = this.getConnection();
        conn.queryDatabase(conn, query, values);
    }
};

module.exports = db;
