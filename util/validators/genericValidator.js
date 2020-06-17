const isObject = require('isobject');

const genericValidator = {
	addListToQuery(parameter, list, req) {
		const idList = list.map((obj) => {
			return obj[parameter];
		});
		let queryObj = { in: idList };

		const originalQuery = req.query[parameter];
		if (isObject(originalQuery)) {
			if (originalQuery.in) {
				queryObj.in = mathingIDs = compareArray(
					idList,
					originalQuery.in
				);
			}
			return { ...queryObj };
		} else if (Array.isArray(originalQuery)) {
			queryObj.in = matchingIDs;
		} else {
            if(originalQuery) {
                queryObj.eq = originalQuery;
            }
		}
		return { ...queryObj };
	},
};

module.exports = genericValidator;

function compareArray(arr1, arr2) {
	const matching = arr1.filter((val) => {
		return arr2.includes(val);
	});
	return matching;
}
