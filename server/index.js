const express = require('express');
const app = express();
const rob = require('./routes/rob');

// middleware example
app.use((req, res, next) => {
	console.log('Time:', Date.now());
	next();
});

app.use(rob());

app.listen(3000, () => {
	console.log(`Server listening on port 3000`);
});
