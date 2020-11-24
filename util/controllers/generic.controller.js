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

let clients = [];
let messageID = 0;
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

    postWithUser(service, field = 'user_id') {
        return async (req, res, next) => {
            try {
                let body = getBody(req, res);
                body[field] = req.session.user.user_id;
                res.locals.data = await service(body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    getWithUser(service, field = 'user_id') {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                query[field] = req.session.user.user_id;
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    putWithUser(service, field = 'user_id') {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                let body = getBody(req, res);
                query[field] = req.session.user.user_id;
                if(body[field]) {
                    throw errorTypes.badRequest;
                }
                res.locals.data = await service(query, body);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    removeWithUser(service, field = 'user_id') {
        return async (req, res, next) => {
            try {
                let query = getQuery(req, res);
                query[field] = req.session.user.user_id;
                res.locals.data = await service(query);
                next();
            } catch (e) {
                next(e);
            }
        };
    },
    subscribe: (req, res, next) => {
            const headers = {
                'Content-Type': 'text/event-stream',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache'
              };
              res.writeHead(200, headers);
              const data = `data: ${JSON.stringify({connected: true})}\n\n`;
              res.write(`event: connected\n`);
              res.write(`id: ${messageID}\n`);
              res.write(data);
              messageID++;
            const clientId = req.session.id;
            const client = {
                id: clientId,
                res,
            }
            clients.push(client);

            const intervalId = setInterval(() => {
                res.write(`id: ${messageID}\n`);
                res.write(`event: heartbeat\n`);
                res.write(`data: heartbeat\n\n`);
                messageID++;
            }, 1000 * 60);

            req.on('close', () => {
                clients = clients.filter(c => c.id !== clientId);
                clearInterval(intervalId);
            });
            next();
    },
    notify(eventType) {
        return (req, res, next) => {
            const data = res.locals.data;
            clients.forEach(c => {
                if(c.id !== req.session.id) {
                    c.res.write(`id: ${messageID}\n`);
                    c.res.write(`event: ${eventType}\n`);
                    c.res.write(`data: ${JSON.stringify(data)}\n\n`);
                    messageID++;
                }
            });
            next();
        };
    }
};

module.exports = genericController;
