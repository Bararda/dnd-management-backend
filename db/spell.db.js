const { genericDb } = require("../util");
const tablename = "spells";
const { db, sql } = require("../util/sql");

const spellDb = {
    get: async query => {
        let [whereClause, values] = sql.buildWhere(query);
        //man this is an sql statement for sure I should optimize this if Ii ever feel like it
        let statement = `
        SELECT s.*, dt.damage_types, ct.component_types, c.classes FROM spells s
        LEFT JOIN 
            (SELECT s.spell_id, IF(COUNT(dt.damage_type_name) = 0, JSON_ARRAY(), JSON_ARRAYAGG(dt.damage_type_name)) as damage_types from spells s 
            LEFT JOIN spell_damagetypes sdt on sdt.spell_id = s.spell_id 
            LEFT JOIN damagetypes dt on sdt.damage_type_id = dt.damage_type_id
            GROUP BY s.spell_id
            ) AS dt ON dt.spell_id = s.spell_id
        LEFT JOIN
            (SELECT s.spell_id, IF(COUNT(component_type_name) = 0, JSON_ARRAY(), JSON_ARRAYAGG(component_type_name)) as component_types from spells s 
            LEFT JOIN spell_componenttypes sct on sct.spell_id = s.spell_id
            LEFT JOIN componenttypes ct on ct.component_type_id = sct.component_type_id
            GROUP BY s.spell_id
            ) AS ct on ct.spell_id = s.spell_id
        LEFT JOIN 
            (SELECT s.spell_id, IF(COUNT(class_name) = 0, JSON_ARRAY(), JSON_ARRAYAGG(class_name)) as classes from spells s 
            LEFT JOIN class_spells cs on s.spell_id = cs.spell_id
            LEFT JOIN classes c on cs.class_id = c.class_id
            GROUP BY s.spell_id
            ) as c ON c.spell_id = s.spell_id WHERE ${whereClause}`;
        const results = await db.query(statement, values);
        return results;
    },
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = spellDb;
