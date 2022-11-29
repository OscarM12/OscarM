<?php  

$servidor = "localhost";
$basedatos = "registros";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos)or die ("no se pudo conectar a localhost");
$consulta = "select *  from datos"; 
$registros = mysqli_query($con,$consulta)or die("problemas en el select");


$result = mysqli_fetch_all($registros,MYSQLI_ASSOC);
mysqli_close($con);
echo json_encode($result);



?>