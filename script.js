//your JS code here. If required.
let counterElement = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click",()=>{
	let curr = parseInt(counterElement.textContent);
	aler(curr);
	counterElement.textContent = curr+1;
})