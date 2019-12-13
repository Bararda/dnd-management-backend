function getQuery(req, res) {
    return res.locals.query || req.query || {};
}
function getBody(req, res) {
    return res.locals.body || req.body;
}
const genericController = {
    get(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
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
                let query = getQuery(req, res);
                let body = getBody(req, res);
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
                let body = getBody(req, res);
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
                let query = getQuery(req, res);
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    }
};

module.exports = genericController;
