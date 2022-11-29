$(document).ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "conection.php",
    method: "GET",
    headers: {
      Accept: "/",
    },
  };
  $.ajax(settings).done(function (response) {
    let tabla = JSON.parse(response);
    console.log(tabla);

    $("#jsGrid").jsGrid({
      width: "100%",
      height: "400px",
      inserting: true,
      editing: true,
      sorting: true,
      paging: true,
      data: tabla,
      fields: [
        {
          name: "id",
          type: "number",
          width: 10,
        },
        { name: "Nombre", type: "text", width: 20 },
        {
          name: "Paterno",
          type: "text",
          width: 25,
        },
        {
          name: "Materno",
          type: "text",
          width: 25,
        },
        {
          name: "Edad",
          type: "number",
          width: 20,
        },
        {
          name: "Rfc",
          type: "text",
          width: 30,
        },
        {
          name: "Curp",
          type: "text",
          width: 30,
        },
        {
          name: "Email",
          type: "text",
          width: 30,
        },
        {
          name: "Telefono",
          type: "number",
          width: 20,
        },
        {
          name: "Direccion",
          type: "text",
          width: 30,
        },
      ],
    });
  });
});
