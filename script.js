function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
    let r = radius.value;
	if(r <= 0)
	{
		volume.value = NaN;
	}
	let volume = document.getElementById("volume");

	const vol = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volume.value = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
