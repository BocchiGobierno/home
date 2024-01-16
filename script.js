document.addEventListener("DOMContentLoaded", function() {
  // Cambiar el fondo al hacer clic en el título
  var title = document.querySelector('.retro-title');
  title.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });

  // Parpadear el texto cada 2 segundos
  setInterval(function() {
    var retroText = document.querySelectorAll('.retro-text');
    retroText.forEach(function(text) {
      text.style.visibility = (text.style.visibility == 'hidden' ? '' : 'hidden');
    });
  }, 4500);

  // Mostrar una alerta retro al hacer clic en el botón
  var retroButton = document.querySelector('.retro-button');
  retroButton.addEventListener('click', function() {
    alert('💻┃Bienvenido al Bocchi Gobierno. Dupdo, tu amigable asistente virtual, está emocionado de tenerte aquí. Prepárate para explorar y conquistar este nuevo mundo.');
  });

  // Función para obtener un color aleatorio
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});