document.getElementById("btnPeticionFetch").addEventListener("click",function(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(respuesta => respuesta.json())
    .then(datoJson => console.log(datoJson.value))
        //  document.getElementById("caja").innerHTML = datoJson.value);
    
})
document.getElementById("btnPeticionJQuery").addEventListener("click" ,()=> {
    $.getJSON("https://api.chucknorris.io/jokes/random", function(datoJson){
        document.getElementById("caja").innerHTML = datoJson.value
    })
}) 

document.getElementById("btnPeticionFetchAsyncAwait").addEventListener("click",async function(){
    let respuesta = await fetch("https://api.chucknorris.io/jokes/random")
    let datoJson =  await respuesta.json();
    document.getElementById("caja").innerHTML = datoJson.value
})

