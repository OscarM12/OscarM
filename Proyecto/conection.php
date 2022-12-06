<?php  

$servername = "localhost";
$username = "ejemplo";
$password = "password";
$dbname = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
$consulta = "select * from  usuario";
$registros = mysqli_query($conn,$consulta) or die ("Problemas en el select");


$resultado = mysqli_fetch_all($registros);

mysqli_close($conn);
echo json_encode($resultado);

?>
