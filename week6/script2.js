let countries = ["Kazakhstan","Russia","Spain","France"];
let cities = {"Kazakhstan":["Astana","Almaty","Semey"],"Russia":["Moscow","Saint-Petersburg","Yekaterinburg"],"Spain":["Barcelona","Madrid","Valencia"],"France":["Paris","Nice","Bordeaux"]};

let cn = document.querySelector("#countries");
let ct = document.querySelector("#cities");

for(let i = 0; i < countries.length; i++) {
			let n = document.createElement("option");
			n.innerHTML = countries[i];
			cn.add(n);}


function add2() {
	while (ct.hasChildNodes()) {
    	ct.removeChild(ct.lastChild);}

	var val = cn.value;

	var city = cities[val];
	for(let i = 0; i < city.length; i++) {
		let n = document.createElement("option");
		n.innerHTML = city[i];
		ct.add(n);}}

cn.addEventListener("click", add2);