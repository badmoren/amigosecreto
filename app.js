document.addEventListener('DOMContentLoaded', () => {
  const inputAmigo = document.getElementById('amigo');
  const listaAmigos = document.getElementById('listaAmigos');
  const resultadoList = document.getElementById('resultado');

  // Array para almacenar los nombres
  const amigos = [];

  // Función para agregar un amigo
  window.agregarAmigo = function() {
    const nombre = inputAmigo.value.trim();
    if (!nombre) {
      alert('Por favor, ingresa un nombre válido.');
      return;
    }
    amigos.push(nombre);
    inputAmigo.value = '';
    inputAmigo.focus();
    actualizarLista();
    limpiarResultado();
  };

  // Actualiza el <ul> de la lista de amigos
  function actualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((nombre) => {
      const li = document.createElement('li');
      li.textContent = nombre;
      listaAmigos.appendChild(li);
    });
  }

  // Función para sortear un amigo secreto
  window.sortearAmigo = function() {
    if (amigos.length === 0) {
      alert('La lista está vacía. Agrega al menos un nombre.');
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indiceAleatorio];
    mostrarResultado(seleccionado);
  };

  // Limpia el área de resultado
  function limpiarResultado() {
    resultadoList.innerHTML = '';
  }

  // Muestra el resultado en pantalla
  function mostrarResultado(nombre) {
    limpiarResultado();
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${nombre}!`;
    resultadoList.appendChild(li);
  }
});// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
