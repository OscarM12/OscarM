# Modelo De Caja
> A que se refiere  
  *Todo en CSS tiene una caja alrededor, y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos.  
    
**Cajas en Bloque y en Linea**  
En CSS, en general, hay 2 tipos de cajas: **Cajas en bloques y Cajas en Linea**. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras.  


Si una caja se define como un bloque, se comportará de las maneras siguientes:  


- La caja fuerza un salto de línea al llega al final de la línea. 
- La caja se extenderá en la direccion de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoria de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará al 100% del espacio disponible.
- Se respetan las propiedades **width** y **height**.
- El relleno, el margen y el borde mantiene a los otros elementos alejados de la caja.  


Al menos que decidamos cambiar el tipo de visualización a en línea, elementos como los encabezados(ejemplo,<*h1*>) y todos los elementos <*p*> usan por defecto **block** como tipo de visualización externa.  


  