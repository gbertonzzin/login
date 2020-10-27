function checkusr() {
 	var usr = document.forms["entrada"]["usuario"].value;
	if (usr == "") {
	document.getElementById("Aviso").style.display = "block"
	document.getElementById("Aviso").innerHTML = "É necessário inserir seu usuário!";
	setTimeout(sumirAviso, 3000)
    	return false;
  	}
}
function sumirAviso () {
	document.getElementById("Aviso").style.display = "none"

}
