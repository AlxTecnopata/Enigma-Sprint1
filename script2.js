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
