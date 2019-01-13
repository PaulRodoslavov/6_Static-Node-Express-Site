const express = require('express');

const app = express();

const port = process.env.PORT || 8000;
app.use(express.static(__dirname));
	// Setup pug

app.set('view engine', 'pug');

	// Routers (see routes/index.js)
app.use('/static', express.static('public'));
const mainRoutes = require('./routes');
app.use(mainRoutes);

	// Error handling
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404
	// console.log("Error: " + err.message);
	next(err);
});

	// Error handling
app.use((err, req, res, next) => {
	res.locals.error = err;
   const status = res.status;
	res.render('error');
})

	//run app at localhost:3000
app.listen(port, () => {
   console.log('The application is running')
})
