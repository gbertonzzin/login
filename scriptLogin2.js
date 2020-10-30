var avisos = ["É necessário inserir seu usuário!", "É necessário inserir sua senha!", "É necessário inserir seu e-mail!"]

function validar() {
	var usr = document.forms["entrada"]["usuario"].value;
	var psw = document.forms["entrada"]["senha"].value;
	if (usr == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[0]
		setTimeout(sumirAviso, 3000)
		return false;
  	}
	else if (email == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[2];
		setTimeout(sumirAviso, 3000)
		return false;
  	}
}
function validarRec() {
	var usr = document.forms["entrada"]["usuario"].value;
	var email = document.forms["entrada"]["email"].value;
	if (usr == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[0]
		setTimeout(sumirAviso, 3000)
		return false;
  	}
	else if (email == "") {
		document.getElementById("Aviso").style.display = "block"
		document.getElementById("Aviso").innerHTML = avisos[2];
		setTimeout(sumirAviso, 3000)
		return false;
  	}
}

function sumirAviso () {
	document.getElementById("Aviso").style.display = "none"

}
