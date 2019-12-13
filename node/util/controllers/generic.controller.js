function getQuery() {
    return res.locals.query || res.query || {};
}
function getBody() {
    return res.locals.body || res.body;
}
const genericController = {
    get(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery();
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    put(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery();
                let body = getBody();
                res.locals.data = await service(query, body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    post(service) {
        return async (req, res, next) => {
            try {
                let body = getBody();
                res.locals.data = await service(body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    remove(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery();
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    }
};

module.exports = genericController;
