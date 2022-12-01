<?php
session_start();
$user = $_POST['usuario'];
$pasw = $_POST['password'];

if ( isset($_SESSION['usuario']) ){
    printf("Reanudando sesion <br>");
    printf("Bienvenido de nuevo: ".$_SESSION['usuario']);
}
else{
    $_SESSION['usuario'] = $user;
    print("Nueva Sesion<br>");
    printf("Bienvenido %s",$user);
}
?>