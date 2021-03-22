function math() {
	var radius = document.getElementById("radius").value;
	var height = document.getElementById("height").value;
	var out = document.getElementById("out");
	out.value = Math.PI*radius*radius*height;
}