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
  textoutput.style.backgroundImage = "url('img/Muñeco.jpg')";
  // alert("texto copiado")
}
