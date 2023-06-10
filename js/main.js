console.log("Prueba");

const formulario = document.getElementById('formulario1');
const totalPagarElement = document.getElementById('totalPagar');
const valorBase = 200;

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let mail = document.getElementById('email-form').value;
  let cantidad = document.getElementById('cantidad').value;
  let categoria = document.getElementById('categoria').value;

  if (categoria === 'selected') {
    alert('Selecciona una opción de categoría');
    return;
  }

  let descuento = 0;

  if (categoria === 'estudiante') {
    descuento = 80;
  } else if (categoria === 'trainee') {
    descuento = 50;
  } else if (categoria === 'junior') {
    descuento = 15;
  } else if (categoria === 'estandar') {
    descuento = 0;
  }

  let totalPagar = valorBase * cantidad * (100 - descuento) / 100;
  console.log('Total a Pagar: $ ' + totalPagar);

  totalPagarElement.textContent = 'Total a Pagar: $ ' + totalPagar;
});