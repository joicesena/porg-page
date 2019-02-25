function mudaAberturaHome() {
	document.getElementById("aberturaHomeEstatica").style.display = "none";
	document.getElementById("aberturaHomeAnimada").style.display = "flex";
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("header").classList.add("fade");
}

function mudaAberturaHomeParaEstatica() {
	document.getElementById("aberturaHomeAnimada").style.display = "none";
	// document.getElementById("aberturaHomeEstatica").style.display = "block";
	document.getElementById("body").style.overflow = "visible";
	document.getElementById("header").classList.remove("fade");
}