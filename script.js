function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
    let r = radius.value;
	let volume = document.getElementById("volume");

	let vol = (4/3) * Math.PI * r * r * r;
	volume.value = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
