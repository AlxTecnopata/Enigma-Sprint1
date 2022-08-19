<<<<<<< HEAD
const input = document.querySelector("#box")
const msg = document.querySelector("#screen")

function cripting(string){
  let matrix = [["e","enter"],["a","ai"],["i","imes"],["o","ober"],["u","ufat"]];
  encripted = encripted.toLowerCase();
  for (let i = 0; i < matrix.length; i++)
    if (encripted.includes(matrix[i,0])){
      encripted = encripted.replaceAll(matrix[i,0],matrix[i,1]);
    };
  return encripted
}

function cript(){
  const tocript = cripting(input.value)
  msg.value = tocript;
  msg.style.backgroundImg = "none";
  input.value = ""
}

function copia(){
  msg.select();

}












  // var textenc = input.value
  // var textproc = textenc.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  // textproc = textproc.toLowerCase()

    // .replaceAll("e", "enter")
    // .replaceAll("i", "imes")
    // .replaceAll("a", "ai")
    // .replaceAll("o", "ober")
    // .replaceAll("u", "ufat");

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
=======
const textinput = document.querySelector(".intext")
const textoutput = document.querySelector(".outtext")

// ######## BOTÓN DE ENCRIPTAR ########

function btnEncript() {
  const encriptado = encript(textinput.value)
  textoutput.value = encriptado;
  textoutput.style.backgroundImage = "none"
  textinput.value = "";

}

function encript(encripted){
  let matrixCode = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  encripted = encripted.toLowerCase();
  for (let i = 0; i < matrixCode.length; i++){
    if(encripted.includes(matrixCode[i][0])) {
      encripted = encripted.replaceAll(matrixCode[i][0],matrixCode[i][1])
      }
  }
return encripted;
}
// #######################################

// ######## BOTÓN DE DESENCRIPTAR ########
function btnDesencript() {
  const encriptado = decript(textinput.value)
  textoutput.value = encriptado;
  textoutput.style.backgroundImage = "none"
  textinput.value = "";

}

function decript(decripted){
  let matrixCode = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  decripted = decripted.toLowerCase();
  for (let i = 0; i < matrixCode.length; i++){
    if(decripted.includes(matrixCode[i][1])) {
      decripted = decripted.replaceAll(matrixCode[i][1],matrixCode[i][0])
      }
  }
return decripted;
}
// #######################################

// ######## BOTÓN DE copiar ########
function btnCopy() {
  textinput.select()
  navigator.clipboard.writeText(textoutput.value)
  textoutput.value = ""
  textoutput.style.backgroundImage = "url('img/Muñeco.png')";
}

function btnErase() {
  textinput.select()
  textoutput.value = ""
  textoutput.style.backgroundImage = "url('img/Muñeco.png')";
}
>>>>>>> Final
