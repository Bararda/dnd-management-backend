const { genericService } = require("../util");
const { userDb } = require("../db");
const { errorTypes } = require('../util/responses')

const bcrypt = require("bcrypt");
const userService = {
    get: genericService.get(userDb.get),
    update: genericService.update(userDb.update),
    create: genericService.create(async user => {
            if (user.password) {
                const saltRounds = 13; 
                const hash = await bcrypt.hash(user.password, saltRounds);
                user.password = hash;
                let results = await userDb.create(user);
                return results;
            } else throw errorTypes.badRequest;
    }),
    remove: genericService.remove(userDb.remove)
};
module.exports = userService;
