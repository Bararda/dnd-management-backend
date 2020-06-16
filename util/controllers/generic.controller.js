const { errorTypes } = require('../responses');
/**
 * gets the query parameters from the response or the request
 * @param {Request} req 
 * @param {Response} res 
 */
function getQuery(req, res) {
    return res.locals.query || req.query || {};
}
/**
 * Gets the body from the response of the request
 * @param {Request} req 
 * @param {Response} res 
 */
function getBody(req, res) {
    return res.locals.body || req.body;
}
/**
 * generic controller that takes in a service to call passing it the data it needs for each type of request.
 * This is used to decouple data management from the request
 */
const genericController = {
    /**
     * gets the url parameters from the url, calls the service and sets the data to be returned
     * @param {*} service 
     */
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
    /**
     * gets the body and query parameters for the update, calls the provided service, and sets the data to be returned
     * @param {*} service 
     */
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
    /**
     * gets the body for the insert, calls the provided service, and sets the data to be returned
     * @param {*} service 
     */
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
    /**
     * gets the query parameters, passes them to the service, and sets the data to be returned
     * @param {*} service 
     */
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
    },

    postWithUser(service) {
        return async (req, res, next) => {
            try {
                let body = getBody(req, res);
                body.user_id = req.session.user.user_id;
                res.locals.data = await service(body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    getWithUser(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                query.user_id = req.session.user.user_id;
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    putWithUser(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                let body = getBody(req, res);
                query.user_id = req.session.user.user_id;
                if(body.user_id) {
                    throw errorTypes.badRequest;
                }
                res.locals.data = await service(query, body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    removeWithUser(service) {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                query.user_id = req.session.user.user_id;
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
};

module.exports = genericController;
