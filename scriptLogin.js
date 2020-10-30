function validar() {
 	var usr = document.forms["entrada"]["usuario"].value;
	var psw = document.forms["entrada"]["senha"].value;
	var avisos = ["É necessário inserir seu usuário!", "É necessário inserir sua senha!"]
	if (usr == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[0]
		setTimeout(sumirAviso, 3000)
		return false;
  	}
	else if (psw == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[1];
		setTimeout(sumirAviso, 3000)
		return false;
  	}
}
function sumirAviso () {
	document.getElementById("Aviso").style.display = "none"

}
