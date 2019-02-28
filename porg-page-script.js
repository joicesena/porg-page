function mudaAberturaHome() {
	if(document.querySelector("#aberturaHomeAnimada").offsetParent === null) {
		mudaAberturaHomeParaAnimada();	
	} else if(document.querySelector("#aberturaHomeEstatica").offsetParent === null) {
		mudaAberturaHomeParaEstatica();
	}
}

function mudaAberturaHomeParaAnimada() {
	document.querySelector("#aberturaHomeEstatica").style.display = "none";
	document.querySelector("#aberturaHomeAnimada").style.display = "flex";
	document.querySelector("#body").style.overflow = "hidden";
	document.querySelector("#header").classList.add("fade");
	document.querySelector("#titulo").style.marginTop = "25px";
	document.querySelector("#textoFooter").innerHTML= "Caso queira, você pode voltar a ver as informações no formato texto ";
	setTimeout(function(){
		mudaAberturaHome();
	},50000);
}

function mudaAberturaHomeParaEstatica() {
	document.querySelector("#aberturaHomeAnimada").style.display = "none";
	document.querySelector("#aberturaHomeEstatica").style.display = "block";
	document.querySelector("#body").style.overflow = "visible";
	document.querySelector("#header").classList.remove("fade");
	document.querySelector("#titulo").style.marginTop = "0px";
	document.querySelector("#textoFooter").innerHTML= "Caso queira, você pode ver a animação da abertura ";
}