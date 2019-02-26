function mudaAberturaHome() {
	if(document.getElementById("aberturaHomeAnimada").offsetParent === null) {
		mudaAberturaHomeParaAnimada();	
	} else if(document.getElementById("aberturaHomeEstatica").offsetParent === null) {
		mudaAberturaHomeParaEstatica();
	}
}

function mudaAberturaHomeParaAnimada() {
	document.getElementById("aberturaHomeEstatica").style.display = "none";
	document.getElementById("aberturaHomeAnimada").style.display = "flex";
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("header").classList.add("fade");
	document.getElementById("titulo").style.marginTop = "25px";
	document.getElementById("textoFooter").innerHTML="Caso queira, você pode voltar a ver as informações no formato texto ";
}

function mudaAberturaHomeParaEstatica() {
	document.getElementById("aberturaHomeAnimada").style.display = "none";
	document.getElementById("aberturaHomeEstatica").style.display = "block";
	document.getElementById("body").style.overflow = "visible";
	document.getElementById("header").classList.remove("fade");
	document.getElementById("titulo").style.marginTop = "0px";
	document.getElementById("textoFooter").innerHTML="Caso queira, você pode ver a animação da abertura ";
}