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
app.get('/programmer', (req, res) => {
	res.sendFile(__dirname + '/assets/programmer.png');
});
app.get('/contactimg', (req, res) => {
	res.sendFile(__dirname + '/assets/contact.png');
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

app.get('/resume', (req, res) => {
	res.download(__dirname + '/assets/Rishabh Singh.pdf', 'Rishabh Singh.pdf');
});
