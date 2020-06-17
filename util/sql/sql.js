const isObject = require("isobject");
/**
 * determines what type of WHERE clause should be appended to the sql. 
 * @param {String} field 
 * @param {String} value 
 */
function getClause(field, value) {
    try {
        const val = JSON.parse(value);
        if(isObject(val)) {
            return getClauseFromObject(field, val);
        } else {
            return ["?? = ?", [field, value]];
        }
    } catch (e) {
        if(isObject(value)) {
            return getClauseFromObject(field, value);
        }
        return ["?? = ?", [field, value]];
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
            const [clause, values] = getClause(field, value);
            clauses.push(clause);
            prepareValues.push(...values);
        });
        // if nothing return 1=1 so that the query doesnt break
        if(clauses.length === 0) {
            return ["1 = 1", []];
        }
        return [clauses.join(" AND "), prepareValues];
    }
}
module.exports = sql;


function getClauseFromObject(field, val) {
    const clauses = [];
    const values = [];
    //greater than
    if("gt" in val) {
        clauses.push("?? > ?");
        values.push(field, val.gt);
    }
    //less than
    if("lt" in val) {
        clauses.push("?? < ?");
        values.push(field, val.lt);
    }
    //not equals
    if("ne" in val) {
        clauses.push("?? != ?");
        values.push(field, val.ne);
    }
    //between
    if("bt" in val) {
        if(Array.isArray(value.bt) && value.bt.length === 2) {
            clauses.push("?? between ? AND ?");
            values.push(field, val[0], val[1]);
        }
    }
    if("eq" in val) {
        clauses.push("?? = ?");
        values.push(field, val.eq);

    }
    if("in" in val) {
        clauses.push("?? IN(?)");
        values.push(field, val.in);

    }
    return [clauses.join(" AND "), values];
}