module.exports = (logger = console.log) => {
	return (res, req, next) => {
		logger('logger middleWare');

		next();
	};
};
