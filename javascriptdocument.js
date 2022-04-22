function checkIfEmpty(){

var inputtedName = document.getElementById("fname");
var empty = document.getElementById("empty");


if(inputtedName.value.length == 0){
alert(inputtedName.value.length == 0);
empty.style.display = "block";
}
else{
empty.style.display = "none";
}

}
