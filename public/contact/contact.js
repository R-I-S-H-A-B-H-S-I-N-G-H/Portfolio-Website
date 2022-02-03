console.log('hello world');
var con = document.querySelector('#test');
for (var i = 0; i < 10; i++) {
	var header = document.createElement('div');
	header.innerText = 'TESTING';
	con.appendChild(header);
}
console.log(con);
