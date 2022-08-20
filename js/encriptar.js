//Estructuras con los valores a intercambiar
const patrones = ["ai", "enter", "imes", "ober", "ufat"],
vocales = ["a", "e", "i", "o", "u"];

//Elementos del DOM
let btnEncriptar = document.querySelector("#btnEncriptar"),
btnDesencriptar = document.querySelector("#btnDesencriptar"),
btnCopiar = document.querySelector("#copiar"),
cajaTexto = document.querySelector("#texto"),
respuesta = document.querySelector("#mensaje");

//Zona de declaracion de funciones
const encriptar = mensaje => {
    let msg = Array.from(mensaje);
    vocales.forEach((vocal, j) => msg.forEach((letra, i) => (vocal==letra) ? msg[i] = patrones[j] : msg[i] = letra))

    return msg.join('');
}

const desencriptar = mensaje =>{
    for(let posicion in patrones) mensaje = mensaje.replaceAll(patrones[posicion], vocales[posicion]);
    return mensaje;
}

const mostrar = (metodo, mensaje) =>{
    if(mensaje.trim() !== "" && /^[a-z0-9\u00f1\¿?\¡!\.,\()\-:\; ]{1,500}$/.test(mensaje)){
        document.querySelector(".contenido__inicial").style.display = 'none';
        document.querySelector(".contenedor__mensaje").style.display = 'flex';
        (metodo=="encriptar") ? respuesta.innerHTML = encriptar(mensaje) : respuesta.innerHTML = desencriptar(mensaje);
    }else{
        if(mensaje.trim()===""){
            document.querySelector(".contenido__inicial").style.display = 'block';
            document.querySelector(".contenedor__mensaje").style.display = 'none';
        }else{
            alert('No se permite el uso de acentos');
        } 
    }
}

//zona de llamada a funciones
btnEncriptar.addEventListener("click", () => mostrar("encriptar", cajaTexto.value));

btnDesencriptar.addEventListener("click", () => mostrar("desencriptar", cajaTexto.value));

btnCopiar.addEventListener("click", () => navigator.clipboard.writeText(respuesta.innerHTML.trim()) );

cajaTexto.addEventListener('keyup', function(){this.value = this.value.toLowerCase()})