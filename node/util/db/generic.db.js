const genericDb = {
    get(tablename) {
        return async query => {
            const sql = `SELECT * FROM ?? WHERE `;

        }
    },
    create(tablename) {
        return async object => {
            const sql = ``;
        }
    },
    update(tablename) {
        return async (query, update) => {
            const sql = ``;
        }
    },
    remove(tablename) {
        return async query => {
            const sql = ``;
        }
    }
}
module.exports = genericDb;