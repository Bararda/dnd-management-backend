const isObject = require("isobject");
/**
 * determines what type of WHERE clause should be appended to the sql. 
 * @param {String} field 
 * @param {String} value 
 */
function getClause(field, value) {
    try {
        let val = JSON.parse(value);
        if(isObject(val)) {
            let clauses = [];
            //greater than
            if("gt" in val) {
                clauses.push("?? > ?");
            }
            //less than
            if("lt" in val) {
                clauses.push("?? < ?");
            }
            //not equals
            if("ne" in val) {
                clauses.push("?? != ?");
            }
            //between
            if("bt" in val) {
                if(Array.isArray(value.bt) && value.bt.length === 2) {
                    clauses.push("?? between ? AND ?");
                }
            }
            return clauses.join(" AND ");
        } else {
            return "?? = ?";
        }
    }catch (e) {
        return "?? = ?";
    }
}
const sql = {
    /**
     * Builds the where clause from the query object given
     */
    buildWhere: query => {
        let clauses = [];
        let prepareValues = [];
        Object.entries(query).forEach(([field, value]) => {
            clauses.push(getClause(field, value));
            prepareValues.push(field);
            prepareValues.push(value);
        });
        // if nothing return 1=1 so that the query doesnt break
        if(clauses.length === 0) {
            return ["1 = 1", []];
        }
        return [clauses.join(" AND "), prepareValues];
    }
}
module.exports = sql;