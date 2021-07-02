const errorTypes = {
	badRequest: 400,
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	methodNotAllowed: 405,
	proxyAuthentiationRequired: 407,
	preconditionFailed: 412,
	tooManyRequests: 429,
};

module.exports = errorTypes;