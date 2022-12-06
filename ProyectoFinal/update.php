<?php

include("conection.php");
$con=conectar();
$id = $_POST['id'];
    $Nombre = $_POST['nombre'];
    $Paterno = $_POST['paterno'];
    $Materno = $_POST['materno'];
    $Telefono = $_POST['telefono'];
    $Correo = $_POST['email'];

$sql="UPDATE usuarios SET  Nombre='$Nombre',Paterno='$Paterno',Materno='$Materno', Telefono='$Telefono',Email = '$Correo' WHERE Id='$id";
$query=mysqli_query($con,$sql);

    if($query){
        Header("Location: index.php");
    }
?>