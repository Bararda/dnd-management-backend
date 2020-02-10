const { genericService } = require("../util");
const { spellDb } = require("../db");
const spellService = {
    get: async (query = {}) => {
        let spells = await spellDb.get(query);
        spells = spells.map(spell => {
            spell.damage_types = JSON.parse(spell.damage_types);
            spell.classes = JSON.parse(spell.classes);
            spell.component_types = JSON.parse(spell.component_types);
            return spell;
        });
        return spells;
    },
    update: genericService.update(spellDb.update),
    create: genericService.create(spellDb.create),
    remove: genericService.remove(spellDb.remove),
}
module.exports = spellService;