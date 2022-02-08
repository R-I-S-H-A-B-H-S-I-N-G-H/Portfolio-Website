window.addEventListener('load', (event) => {
	showList();
});

function showList() {
	const listP = document.querySelector('.projectlist');
	var list = document.createElement('ul');
	const data = getData();
	data.map((item) => {
		// creating elements
		var listItem = document.createElement('li');
		var heading = document.createElement('div');
		var para = document.createElement('p');
		var link = document.createElement('a');

		//manuplulating data
		heading.textContent = item.name;
		para.textContent = item.description;
		link.innerText = item.source;
		link.href = item.source;
		link.target = '/';

		// setting class
		heading.setAttribute('class', 'project-title');
		para.setAttribute('class', 'project-desc');
		link.setAttribute('class', 'project-link');
		// appending child
		listItem.append(heading);
		listItem.append(para);
		listItem.append(link);
		list.append(listItem);
	});
	listP.append(list);
}
/*
	<!-- <div>hello</div> -->
		<div id="somthing" class="test"></div>
		<!-- <div id="project" class="content">
			<h1>Projects</h1>
			<ul>
				<li v-for="item in projectdata">
					<div class="project-title">{{item.name}}</div>
					<p class="project-desc">{{item.description}}</p>
					<a :href="item.source" class="project-link" target="/"
						>{{item.source}}</a
					>
				</li>
			</ul>
		</div> -->

*/

function getData() {
	return [
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
}
