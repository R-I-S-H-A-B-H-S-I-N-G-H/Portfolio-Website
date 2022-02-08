const express = require('express');
const app = express();
app.set('view engine', 'ejs');

var port = process.env.PORT || 3002;
app.listen(port, () => {
	console.log(`server listning at ${port}`);
});
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/assets', express.static(__dirname + 'public/assets'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
	res.render('index');
});
app.get('/project', (req, res) => {
	res.render('projectsPage');
});
app.get('/contact', (req, res) => {
	res.render('contact');
});
app.get('/snake', (req, res) => {
	res.render('snake/snake');
});
app.get('/resume', (req, res) => {
	res.download(
		__dirname + '/public/assets/Rishabh Singh.pdf',
		'Rishabh Singh.pdf'
	);
});
