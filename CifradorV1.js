
var textbox1 = document.getElementById("txtarea1");
var textbox2 = document.getElementById("txtarea2");
var copiarbtn = document.getElementById("copiar")
var button1 = document.getElementById("btnprincipal")
var button2 = document.getElementById("butoncito")

let diccionario = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}
    
let diccionario2 = 
{
    'ai' : "a",
    'enter' : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u"
}

function encriptar ()
{

    
    var textosacado = textbox1.value.replace(/[aeiou]/g,i=> diccionario[i])
    textbox2.value = textosacado;
   esconder();
   textbox1.value = "";
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Encriptado',
    showConfirmButton: false,
    timer: 1500
  })
    
}


function descrinptar () 
{
    
    var textosacado = textbox1.value
    .replace(/ai/g,i=> diccionario2[i])
    .replace(/enter/g,i=> diccionario2[i])
    .replace(/imes/g,i=> diccionario2[i])
    .replace(/ober/g,i=> diccionario2[i])
    .replace(/ufat/g,i=> diccionario2[i])
    textbox2.value = textosacado;
    esconder()
    textbox1.value = ""
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Desencriptado',
        showConfirmButton: false,
        timer: 1500
      })
    
}




function esconder ()
{
  
   let fotoES = document.getElementById("foto")
   fotoES.style.display = "none"
   let tituloH1 = document.getElementById("tituloH1")
   tituloH1.style.display = "none"
   let tituloH3 = document.getElementById("tituloH3")
   tituloH3.style.display = "none"
   let mostrar = document.getElementById("txtarea2")
   mostrar.classList.remove("txtarea2c")
  mostrar.classList.add("txtbox2")
  copiarbtn.classList.remove("btn-copiar")
  copiarbtn.classList.add("btn-copiar2")  
}

function copiado () 
{
    navigator.clipboard.writeText(textbox2.value)
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Copiado',
        showConfirmButton: false,
        timer: 1500
      })
}

function alertar ()
{
    alert("MIAO")
}




button1.onclick = encriptar;

button2.onclick = descrinptar;



copiarbtn.onclick = copiado;

/* var textosacado = input.value.replace(/[aeiou]/gi, "**")
 */

