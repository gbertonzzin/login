function checkusr() {
 var usr = document.forms["entrada"]["usuario"].value;
  if (usr == "") {
    alert("É necessário inserir seu usuário");
    return false;
  }
}
