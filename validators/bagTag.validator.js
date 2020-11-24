const { bagService, tagService } = require('../services');
const { genericValidator } = require('../util/validators')
const bagTagValidator = {
    async validate(req, res, next) {
        const userID = req.session.user.user_id;
        const userBags = await bagService.get({owner_id: userID});
        const userTags = await tagService.get({user_id: userID});
        req.query.bad_id = genericValidator.addListToQuery('bag_id', userBags, req);
        req.query.tag_id = genericValidator.addListToQuery('tag_id', userTags, req);
        next();
    },
    async validatePost(req, res, next) {
        const userID = req.session.user.user_id;
        const userBags = await bagService.get({owner_id: userID});
        const userTags = await tagService.get({user_id: userID});
        const bagIds = userBags.map((bag) => bag.bag_id);
        const tagIds = userTags.map((tag) => tag.tag_id);
        if(bagIds.includes(req.body.bag_id) && tagIds.includes(req.body.bag_id)) {
            next();
        } else {
            next(400);
        }
    }
}

module.exports = bagTagValidator;

