const genericController = {
    get(service) {
        return async (req, res, next) => {
            //get query object from res
            next();
        }
    },
    put(service) {
        return async (req, res, next) => {
            //get query and body
            next();
        }
    },
    post(service) {
        return async (req, res, next) => {
            //get body
            next();
        }
    },
    remove(service) {
        return async (req, res, next) => {
            //get
            next();
        }
    },
};

module.exports = genericController;