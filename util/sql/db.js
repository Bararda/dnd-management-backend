const sql = require("mysql");
/**
 *
 * @param {Connection} conn
 * @param {String} query
 * @param {Array} values
 */
async function queryDatabase(conn, query, values, callback) {
//TODO
}
/**
 * A database wrapper that manages all communication with the database
 */
const db = {
    /**
     * gets the database connection and establishes a connection if not already connected
     */
    getConnection: async () => {
        if (!this.pool) {
            this.pool = await sql.createPool({
                connectionLimit: process.env.CONNECTION_LIMIT || 10,
                host: process.env.DB_HOSTNAME || "localhost",
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DATABASE || "InventoryManager"
            });
        }
        return this.pool;
    },
    /**
     * TODO modularize this function with queryDatabase
     * queries the database. 
     */
    query: async (query, values) => {
        return new Promise((res, rej) => {
            db.getConnection().then(pool => {
                pool.getConnection((err, conn) => {
                    //could be modularized I'm just bad
                    if (err) {
                        console.log(err);
                        rej(err);
                    }
                    const callback = (error, results, fields) => {
                        conn.release();
                        if (error) {
                             rej(error);
                        }
                        res(results);
                    };
                    console.log(query);
                    if (values.length === 0) {
                        conn.query(query, callback);
                    } else {
                        conn.query(query, values, callback);
                    }
                });
            });
        });
    }
};

module.exports = db;
