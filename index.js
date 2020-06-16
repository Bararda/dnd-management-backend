const result = require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const https = require('https');
const { errorValidator } = require('./util/responses');
const session = require('express-session');
const fs = require('fs');
const SESSION_LENGTH_24m = 1440000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//implement mysql session store later
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			name: 'inventory-manager',
			httpOnly: false,
			maxAge: parseInt(process.env.SESSION_LENGTH) || SESSION_LENGTH_24m,
			sameSite: 'lax',
			secure: false, // change to true on HTTPS connection
			resave: false,
			rolling: true,
			saveUninitialized: false,
			unset: 'destroy',
		},
	})
);

/**
 * sets the response headers
 */
app.use((req, res, next) => {
	let allowedOrigins = ['http://localhost:3000', 'http://10.0.0.10:3000', 'https://dnd.management', 'http://localhost'];
	let origin = req.headers.origin;
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With, X-access-token, Content-type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use('/', router);

/**
 * catches any unforseen errors
 */
app.use((err, req, res, next) => {
	if (err) {
		errorValidator.validateError(res, err);
		next(err);
	} else {
		next();
	}
});

if (process.env.SECURE === 'true') {
	https
		.createServer(
			{
				key: fs.readFileSync(process.env.PRIVATE_KEY || 'server.key'),
                cert: fs.readFileSync(process.env.CERT || 'server.crt'),
			},
			app
		)
		.listen(process.env.PORT || 8080, () => {
            console.log('Secure Context');
			console.log(`Server Listening on port ${process.env.PORT || 8080}`);
		});
} else {
	/**
	 * starts the server on the specified port
	 */
	app.listen(process.env.PORT || 8080, () => {
        console.log('Insecure Context');
		console.log(`Server Listening on port ${process.env.PORT || 8080}`);
	});
}
