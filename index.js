const express = require('express');
const app = express();
require('dotenv').config();

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listing at port : ', port);
});
app.use(express.static('public'));

app.get('/panda', (req, res) => {
	res.sendFile(__dirname + '/assets/panda.png');
});
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public');
});
app.get('/project', (req, res) => {
	res.sendFile(__dirname + '/public/project/project.html');
});
app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/public/contact/contact.html');
});
