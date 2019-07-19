const express = require('express');
const app = express();
const rob = require('./routes/rob');
const logger = require('./middleware/logger');

app.use(logger());

app.use(rob());

app.listen(3000, () => {
	console.log(`Server listening on port 3000`);
});
