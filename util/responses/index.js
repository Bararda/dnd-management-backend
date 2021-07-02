const clientError = require('./clientError');
const serverError = require('./serverError');
const errorTypes = require('./errors');
const errorValidator = require('./errorValidator');
const genericResponse = require("./genericResponse")
module.exports = {
    clientError,
    serverError,
    genericResponse,
    errorValidator,
    errorTypes
};
