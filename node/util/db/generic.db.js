const genericDb = {
    get: async tablename => {
        return async query => {
            const sql = 'SELECT * FROM ?? WHERE ';

        }
    }
}
module.exports = genericDb;