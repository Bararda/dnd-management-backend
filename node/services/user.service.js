const { genericService } = require("../util");
const { userDb } = require("../db");
const bcrypt = require("bcrypt");
const userService = {
    get: genericService.get(userDb.get),
    update: genericService.update(userDb.update),
    create: genericService.create(async user => {
        console.log(user);
            if (user.password) {
                const ROUNDS = 10; 
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(user.password + salt, ROUNDS);
                user.password = hash;
                user.salt = salt;
                let results = await userDb.create(user);
                return results;
            } else throw 400;
    }),
    remove: genericService.remove(userDb.remove)
};
module.exports = userService;
