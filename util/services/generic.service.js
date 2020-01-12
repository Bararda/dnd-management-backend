/**
 * TODO
 * formats the data to a specified format
 * @param {*} data 
 */
function formatData(data) {
    return data;
}
/**
 * calls the database function and formats the data.
 */
const genericService = {
    get(db) {
        return async query => {
            let results = await db(query);
            return formatData(results);
        };
    },
    create(db) {
        return async object => {
            let results = await db(object);
            return formatData(results);
        };
    },
    update(db) {
        return async (query, update) => {
            let results = await db(query, update);
            return formatData(results);
        };
    },
    remove(db) {
        return async query => {
            let results = await db(query);
            return formatData(results);
        };
    }
};
module.exports = genericService;
