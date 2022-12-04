<?php
$nombre = $_POST["nombre"];
$paterno = $_POST["apellido_paterno"];
$materno = $_POST["apellido_materno"];
require('./FPDF/fpdf.php');
 
$pdf=new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,"Hola :".' '.$nombre.' '.$paterno. ' '.$materno);
$pdf->Output();
?>