const express = require('express');

const app = express();

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
	next(err);
});

	// Error handling
app.use((err, req, res, next) => {
	res.locals.error = err;
   const status = res.status;
   // console.log(status)
	res.render('error');
})

	//run app at localhost:3000
app.listen(3000, () => {
   console.log('The application is running on localhost:3000!')
})
