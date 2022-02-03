const data = [
	{
		color: 'blue',
		name: 'Metro-Route',
		description:
			'React Native App that can generates the shortest path between given two metro stations',
		source: 'https://github.com/R-I-S-H-A-B-H-S-I-N-G-H/Metro-Route',
	},
	{
		color: 'blue',
		name: 'Doodle-Draw',
		description:
			'Project on Doodle Classifier using TensorFlows CNN or Convolution Neural Network ',
		source: 'https://github.com/R-I-S-H-A-B-H-S-I-N-G-H/Doodle-Draw',
	},
	{
		color: 'blue',
		name: 'Covid-Counter',
		description:
			'This is a flutter based app which shows the COVID-19 cases of Indian states via an API',
		source: 'https://github.com/R-I-S-H-A-B-H-S-I-N-G-H/COVID19-COUNTER',
	},
];
var app = new Vue({
	el: '#project',
	data: {
		projectdata: data,
	},
});
