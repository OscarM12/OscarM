document.querySelector("#btnEnviar").addEventListener("click", async () => {
  let respuesta = await fetch("registro.php");
  let datos = await respuesta.json();

  document.querySelector("#nomEmpleado").value = datos.Nombre;
  document.querySelector("#apPaternoEmpleado").value = datos.Paterno;
  document.querySelector("#apMaternoEmpleado").value = datos.Materno;
  document.querySelector("#edadEmpleado").value = datos.Edad;
  document.querySelector("#rfcEmpleado").value = datos.Rfc;
  document.querySelector("#curpEmpleado").value = datos.Curp;
  document.querySelector("#emailEmpleado").value = datos.Email;
  document.querySelector("#telEmpleado").value = datos.Telefono;
  document.querySelector("#direccionEmpleado").value = datos.Direccion;
});
