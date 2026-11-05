// 1. Guardamos los elementos del HTML en variables
var newTaskForm = document.querySelector("#newTaskForm");
var newTaskNameInput = document.querySelector("#newTaskNameInput");
var newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
var newTaskDateInput = document.querySelector("#newTaskDateInput");
var errorAlert = document.querySelector("#errorAlert");
var successAlert = document.querySelector("#successAlert");

// 2. Función para mostrar un mensaje de error
function showError(message) {
  errorAlert.textContent = message;
  errorAlert.classList.remove("d-none"); // quita la clase que lo oculta
}

// 3. Función para ocultar los mensajes
function hideMessages() {
  errorAlert.classList.add("d-none"); // agrega la clase que lo oculta
  successAlert.classList.add("d-none");
  newTaskNameInput.classList.remove("input-error");
  newTaskDescriptionInput.classList.remove("input-error");
  newTaskDateInput.classList.remove("input-error");
}

// 4. Cuando el usuario envía el formulario
newTaskForm.addEventListener("submit", function (event) {
  // Evita que la página se recargue
  event.preventDefault();

  // Primero limpiamos mensajes anteriores
  hideMessages();

  // Leemos los valores; trim() quita espacios al inicio y al final
  var taskName = newTaskNameInput.value.trim();
  var taskDescription = newTaskDescriptionInput.value.trim();
  var taskDate = newTaskDateInput.value;

  // Validamos campo por campo
  if (taskName === "") {
    newTaskNameInput.classList.add("input-error");
    showError("El nombre de la tarea es obligatorio.");
  } else if (taskName.length < 3) {
    newTaskNameInput.classList.add("input-error");
    showError("El nombre debe tener al menos 3 caracteres.");
  } else if (taskDescription === "") {
    newTaskDescriptionInput.classList.add("input-error");
    showError("La descripción es obligatoria.");
  } else if (taskDate === "") {
    newTaskDateInput.classList.add("input-error");
    showError("Debes elegir una fecha límite.");
  } else {
    // Todo está correcto
    successAlert.textContent = "¡Tarea validada correctamente!";
    successAlert.classList.remove("d-none");
    newTaskForm.reset(); // limpia el formulario
  }
});

