const express = require('express');
const cors = require('cors');
const expressJwt = require('express-jwt');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');
const jwt = require('jsonwebtoken');

const app = express();
const jwtMiddleWare = expressJwt({ secret: process.env.JWT_SECRET })

app.use(cors());
app.use(bodyParser.json())

let feeds = [
	{
		id: uuidv1(),
		description: 'express-jwt can be handy',
		author: 'Ab'
	},
	{
		id: uuidv1(),
		description: 'another way to get jwt is using passport-jwt',
		author: 'Xy'
	}
]

app.post('/login', (req, res) => {
	const loginInfo = req.body
	if (!(loginInfo.userName !== '' && loginInfo.password === 'pass')) {
		throw new Error('not valid user id or password!');
	}
	const user = {
		name: loginInfo.userName
	};
	const token = jwt.sign(user, process.env.JWT_SECRET, {
		expiresIn: 60 * 60 *24
	});
	res.send({
		token
	});
});


// NOTE - usage of jwtMiddleWare for the secured route
app.post('/feed', jwtMiddleWare, (req, res) => {
	const feed = req.body
	feeds.push({
		...feed,
		id: uuidv1()
	})
	res.sendStatus(200)
});

app.get('/feeds', (req, res) => {
	res.send(feeds);
});

app.listen(8080, function () {
  console.log('server listening on port 8080.....')
});