const clientError = require('./clientError');
const serverError = require('./serverError');
const errorTypes = require('./errors');
const errorValidator = {
	validateError(res, code) {
        let interalError = true;
		for (const [type, errCode] of Object.entries(errorTypes)) {
			if (errCode === code) {
                clientError[type](res, code);
                interalError = false;
			}
        }
        if(interalError) {
            serverError.internalServerError(res, code);
        }
	},
};

module.exports = errorValidator;