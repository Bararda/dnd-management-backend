const { spellBookService } = require('../services');
const { genericValidator } = require('../util/validators')
const spellBookSpellValidator = {
    async validate(req, res, next) {
        const userID = req.session.user.user_id;
        const userSpellBooks = await spellBookService.get({user_id: userID});
        req.query.spell_book_id = genericValidator.addListToQuery('spell_book_id', userSpellBooks, req);
        next();
    },
    async validatePost(req, res, next) {
        const userID = req.session.user.user_id;
        const userSpellBooks = await spellBookService.get({user_id: userID});
        const ids = userSpellBooks.map((spellBook) => spellBook.spell_book_id);
        if(ids.includes(req.body.spell_book_id)) {
            next();
        } else {
            next(400);
        }
    }
}

module.exports = spellBookSpellValidator;

