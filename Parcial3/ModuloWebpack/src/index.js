import { cuadrardo } from "./modulo";
import swal from "sweetalert";
import "./index.css"



const { cuadrardo } = require("./modulo");
console.log("Hello")
console.log(cuadrardo(2));

document.getElementById("sw").addEventListener("click",()=>{
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
      
})
  
