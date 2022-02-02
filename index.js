const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listing at port : ', port);
});
console.log(__dirname);
app.use(express.static('public'));
app.get('/project', (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/public/project/project.html');
});
app.get('/contact', (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/public/contacts/contacts.html');
});

app.get('/panda', (req, res) => {
	res.sendFile(__dirname + '/assets/panda.png');
});
