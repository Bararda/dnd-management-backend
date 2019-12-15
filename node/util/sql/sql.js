const isObject = require("isobject");
function getClause(field, value) {
    try {
        let val = JSON.parse(value);
        if(isObject(val)) {
            let clauses = [];
            if("gt" in val) {
                clauses.push("?? > ?");
            }
            if("lt" in val) {
                clauses.push("?? < ?");
            }
            if("ne" in val) {
                clauses.push("?? != ?");
            }
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
    buildWhere: query => {
        let clauses = [];
        let prepareValues = [];
        Object.entries(query).forEach(([field, value]) => {
            clauses.push(getClause(field, value));
            prepareValues.push(field);
            prepareValues.push(value);
        });
        if(clauses.length === 0) {
            return ["1 = 1", []];
        }
        return [clauses.join(" AND "), prepareValues];
    }
}
module.exports = sql;