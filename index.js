const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listing at port : ', port);
});
app.use(express.static('public'));

app.get('/panda', (req, res) => {
	res.sendFile(__dirname + '/public/assets/panda.png');
});
