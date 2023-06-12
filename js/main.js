const formulario = document.getElementById('formulario1');
const totalPagarElement = document.getElementById('totalPagar');
const valorBase = 200;

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const mail = document.getElementById('email-form').value;
  const cantidad = document.getElementById('cantidad').value;
  const categoria = document.getElementById('categoria').value;

  const errorNombre = document.getElementById('error-nombre');
  const errorApellido = document.getElementById('error-apellido');
  const errorCorreo = document.getElementById('error-correo');
  const errorCantidad = document.getElementById('error-cantidad');
  const errorCategoria = document.getElementById('error-categoria');
  
  const inputNombre = document.getElementById('nombre');
  const inputApellido = document.getElementById('apellido');
  const inputCorreo = document.getElementById('email-form');
  const inputCantidad = document.getElementById('cantidad');
  const inputCategoria = document.getElementById('categoria');

  if (nombre === '') {
    errorNombre.textContent = 'Por favor ingrese su nombre';
    errorNombre.classList.add('error-message');
    inputNombre.placeholder = 'Campo Obligatorio';
    inputNombre.classList.add('error-placeholder');
    inputNombre.classList.add('error-input');
    inputNombre.classList.add('error-border');
  } else {
    errorNombre.textContent = '';
    errorNombre.classList.remove('error-message');
    inputNombre.placeholder = 'Nombre';
    inputNombre.classList.remove('error-placeholder');
    inputNombre.classList.remove('error-input');
    inputNombre.classList.remove('error-border');
  }

  if (apellido === '') {
    errorApellido.textContent = 'Por favor ingrese su apellido';
    errorApellido.classList.add('error-message');
    inputApellido.placeholder = 'Campo Obligatorio';
    inputApellido.classList.add('error-placeholder');
    inputApellido.classList.add('error-input');
    inputApellido.classList.add('error-border');
  } else {
    errorApellido.textContent = '';
    errorApellido.classList.remove('error-message');
    inputApellido.placeholder = 'Apellido';
    inputApellido.classList.remove('error-placeholder');
    inputApellido.classList.remove('error-input');
    inputApellido.classList.remove('error-border');
  }

  if (mail === '') {
    errorCorreo.textContent = 'Por favor ingrese su dirección de correo electrónico';
    errorCorreo.classList.add('error-message');
    inputCorreo.placeholder = 'Campo Obligatorio';
    inputCorreo.classList.add('error-placeholder');
    inputCorreo.classList.add('error-input');
    inputCorreo.classList.add('error-border');
  } else {
    errorCorreo.textContent = '';
    errorCorreo.classList.remove('error-message');
    inputCorreo.placeholder = 'Correo';
    inputCorreo.classList.remove('error-placeholder');
    inputCorreo.classList.remove('error-input');
    inputCorreo.classList.remove('error-border');
  }

  if (cantidad === '' || cantidad <= 0 ){
    errorCantidad.textContent = 'Por favor ingrese una cantidad mayor a 0';
    errorCantidad.classList.add('error-message');
    inputCantidad.placeholder = 'Campo Obligatorio';
    inputCantidad.classList.add('error-placeholder');
    inputCantidad.classList.add('error-input');
    inputCantidad.classList.add('error-border');
  } else {
    errorCantidad.textContent = 'Cantidad';
    errorCantidad.classList.remove('error-message');
    inputCantidad.placeholder = 'Cantidad';
    inputCantidad.classList.remove('error-placeholder');
    inputCantidad.classList.remove('error-input');
    inputCantidad.classList.remove('error-border');
  }

  if (categoria  === 'selected' ){
    errorCategoria.textContent = 'Por favor elija una categoría';
    errorCategoria.classList.add('error-message');
    inputCategoria.classList.add('error-placeholder');
    inputCategoria.classList.add('error-input');
    inputCategoria.classList.add('error-border');
  } else {
    errorCategoria.textContent = '';
    errorCategoria.classList.remove('error-message');
     inputCategoria.classList.remove('error-placeholder');
    inputCategoria.classList.remove('error-input');
    inputCategoria.classList.remove('error-border');
  }

  if (nombre === '' || apellido === '' || mail === ''|| cantidad === '') {
    return;
  }

  const descuentos = {
    estudiante: 80,
    trainee: 50,
    junior: 15
  };

  const descuento = descuentos[categoria] || 0;
  const totalPagar = valorBase * cantidad * (100 - descuento) / 100;
  console.log('Total a Pagar: $ ' + totalPagar);
  totalPagarElement.textContent = 'Total a Pagar: $ ' + totalPagar;
});

// Event to add error messages 
const inputFields = document.querySelectorAll('.form-control');
inputFields.forEach(function(input) {
  input.addEventListener('blur', function() {
    if (this.value === '') {
      const errorElement = this.nextElementSibling;
      if (errorElement.classList.contains('error-message')) {
        errorElement.textContent = 'Campo Obligatorio';
        errorElement.classList.add('error-message');
      }
      this.placeholder = 'Campo Obligatorio';
      this.classList.add('error-placeholder');
      this.classList.add('error-input');
      this.classList.add('error-border');
    }
  });
});

// Event listener to handle category selection
document.getElementById('categoria').addEventListener('change', function() {
  const errorCategoria = document.getElementById('error-categoria');
  const categoriaInput = document.getElementById('categoria');

  if (this.value !== 'selected') {
    errorCategoria.textContent = '';
    errorCategoria.classList.remove('error-message');
    categoriaInput.classList.remove('error-placeholder');
    categoriaInput.classList.remove('error-input');
    categoriaInput.classList.remove('error-border');
  } else {
    errorCategoria.classList.add('error-message');
    categoriaInput.classList.add('error-placeholder');
    categoriaInput.classList.add('error-input');
    categoriaInput.classList.add('error-border');
  }
});

// Event to remove error message for Categoria
document.getElementById('categoria').addEventListener('change', function() {
  const errorCategoria = document.getElementById('error-categoria');

  if (this.value !== 'selected') {
    errorCategoria.textContent = '';
    errorCategoria.classList.remove('error-message');
    document.getElementById('categoria').classList.remove('error-placeholder');
    document.getElementById('categoria').classList.remove('error-input');
    document.getElementById('categoria').classList.remove('error-border');
  }
});

// Event to remove error messages when focusing on input fields
inputFields.forEach(function(input) {
  input.addEventListener('focus', function() {
    if (this.value === '') {
      const errorElement = this.nextElementSibling;
      if (errorElement.classList.contains('error-message')) {
        errorElement.textContent = '';
        errorElement.classList.remove('error-message');
      }
      this.placeholder = this.getAttribute('data-placeholder');
      this.classList.remove('error-placeholder');
      this.classList.remove('error-input');
      this.classList.remove('error-border');
    }
  });
});