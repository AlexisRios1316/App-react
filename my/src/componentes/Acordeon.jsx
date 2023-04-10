import React from 'react'

const Acordeon = () => {
  return (
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      TERMINOS Y CONDICIONES
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Terminos y Condiciones Generales: </strong> Las promociones o descuentos no son acumulables, ni transferibles. Aplican en compra en sucursal únicamente.
Las promociones o descuentos son personales y no aplica con otras promociones o descuentos en días festivos, periodos vacacionales o eventos especiales.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Terminos y condiciones de promociones: 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">

        <strong>P R O M O C I O N E S </strong><br></br>
         LUNES: Compra la primera carrera a precio regular de $399.00 y obtén todas las carreras siguientes por $150.00 cada una. Válido únicamente los días lunes.

 
         <br></br>     
MARTES: Compra 3 carreras por $499, vieniendo en grupos de 3 o más personas. Válido únicamente los días martes.
<br></br>
 
<br></br>
MIÉRCOLES: Knockout Racers – ¡Inscríbete a una eliminatoria y corre hasta 4 veces por sólo $399.00!. Arranca en punto de las 7:00 PM. 

 
<br></br>
JUEVES: Obtén 35% de descuento en la o las carreras que compres viniendo en grupo mínimo de tres pilotos. Válido únicamente los días jueves.

 
<br></br>
VIERNES: Compra la primera carrera a precio regular de $399.00 y obtén todas las carreras siguientes por $200.00 cada una. Válido únicamente los días viernes.

 
<br></br>
SÁBADO Y DOMINGO: Obtén 35% de descuento en la o las carreras que compres viniendo en grupo mínimo de cinco pilotos. Válido únicamente los días sábados y domingos.

 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Descuentos Especiales:
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>INAPAM: Obtén 25% de descuento </strong> todos los días en tu licencia y una o más carreras que compres presentando credencial del INAPAM para adultos mayores. 
      </div>
    </div>
  </div>
</div>



  )
}

export default Acordeon