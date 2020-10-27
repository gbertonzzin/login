function validar() {
 	var usr = document.forms["entrada"]["usuario"].value;
	var psw = document.forms["entrada"]["senha"].value;
	if (usr == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = "É necessário inserir seu usuário!";
		setTimeout(sumirAviso, 3000)
  	}
	else if (psw == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = "É necessário inserir sua senha!";
		setTimeout(sumirAviso, 3000)
    	return false;
  	}
}
function sumirAviso () {
	document.getElementById("Aviso").style.display = "none"

}
