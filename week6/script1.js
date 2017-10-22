function line() {
	b = event.currentTarget.parentNode.childNodes[1];
	t = b.textContent;
	b.innerHTML = "<s>" + t + "</s>";}
	tasks = document.querySelector("#tasks").childNodes;
	for(let i = 1 ; i < tasks.length; i += 2) { 
	console.log(tasks[i].childNodes[0].addEventListener("click", line));}