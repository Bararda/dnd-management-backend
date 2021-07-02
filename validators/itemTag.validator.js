const { itemService, tagService } = require('../services');
const { genericValidator } = require('../util/validators')
const itemTagValidator = {
    async validate(req, res, next) {
        const userID = req.session.user.user_id;
        const userItems = await itemService.get({owner_id: userID});
        const userTags = await tagService.get({user_id: userID});
        req.query.item_id = genericValidator.addListToQuery('item_id', userItems, req);
        req.query.tag_id = genericValidator.addListToQuery('tag_id', userTags, req);
        next();
    },
    async validatePost(req, res, next) {
        const userID = req.session.user.user_id;
        const userItems = await itemService.get({owner_id: userID});
        const userTags = await tagService.get({user_id: userID});
        const itemIds = userItems.map((item) => item.item_id);
        const tagIds = userTags.map((tag) => tag.tag_id);
        if(itemIds.includes(req.body.item_id) && tagIds.includes(req.body.bag_id)) {
            next();
        } else {
            next(400);
        }
    }
}

module.exports = itemTagValidator;

