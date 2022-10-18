// const Saludo = ()=> alert ("Hola");
// document.querySelector("#caja2").addEventListener("click",Saludo);
// document.getElementById("caja3").onclick = () => Saludo();

// const contenedor = document.querySelector("#cont");
// contenedor.addEventListener("click", (e) =>{
//     e.target.calssList.toggle("BlueMode");
// })
$(document).ready(function (){
    $("#caja1,#caja2,#caja3,#caja4,#caja5,#caja6").click(function (e){
        $(e.target).html("evento Delegacion");
    })
})