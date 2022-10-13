const Saludo = ()=> alert ("Hola");
document.querySelector("#caja2").addEventListener("click",Saludo);
document.getElementById("caja3").onclick = () => Saludo();