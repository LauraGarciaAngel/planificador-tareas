// COMPONENTE: Forms y Alertas (TaskForm + ValidationAlert)
// Necesita cargar antes: buttons.js
// Uso: document.querySelector("#formContainer").innerHTML = createTaskForm();
//      setupTaskFormValidation();

// ---------- ValidationAlert ----------

// Crea el HTML de la alerta (oculta al inicio con d-none)
function createValidationAlert() {
  return '<div id="alertMessage" class="alert lazu-alert d-none" role="alert"></div>';
}

// Muestra la alerta. type: "error" o "success"
function showAlert(message, type) {
  var alertMessage = document.querySelector("#alertMessage");

  alertMessage.textContent = message;

  // Primero quitamos las dos variantes y luego ponemos la que toca
  alertMessage.classList.remove("lazu-alert-error");
  alertMessage.classList.remove("lazu-alert-success");
  alertMessage.classList.add("lazu-alert-" + type);

  // Quitamos d-none para que se vea
  alertMessage.classList.remove("d-none");
}

// Oculta la alerta
function hideAlert() {
  document.querySelector("#alertMessage").classList.add("d-none");
}

// ---------- TaskForm ----------

// Crea el HTML del formulario (incluye la alerta arriba)
function createTaskForm() {
  return (
    createValidationAlert() +
    '<form id="newTaskForm" novalidate>' +
      '<div class="mb-3">' +
        '<label for="newTaskNameInput" class="form-label lazu-label">Nombre</label>' +
        '<input type="text" id="newTaskNameInput" class="form-control lazu-input" placeholder="Ej: Estudiar JavaScript">' +
      "</div>" +
      '<div class="mb-3">' +
        '<label for="newTaskDescription" class="form-label lazu-label">Descripción</label>' +
        '<textarea id="newTaskDescription" class="form-control lazu-input" rows="3" placeholder="Describe brevemente la tarea"></textarea>' +
      "</div>" +
      '<div class="row">' +
        '<div class="col-12 col-md-6 mb-3">' +
          '<label for="newTaskDueDate" class="form-label lazu-label">Fecha de entrega</label>' +
          '<input type="date" id="newTaskDueDate" class="form-control lazu-input lazu-input-date">' +
        "</div>" +
        '<div class="col-12 col-md-6 mb-3">' +
          '<label for="newTaskStatus" class="form-label lazu-label">Estado</label>' +
          '<select id="newTaskStatus" class="form-select lazu-input">' +
            '<option value="">Selecciona un estado</option>' +
            '<option value="pending">Pendiente</option>' +
            '<option value="progress">En progreso</option>' +
            '<option value="done">Completada</option>' +
          "</select>" +
        "</div>" +
      "</div>" +
      '<div class="d-grid d-sm-flex gap-2">' +
        '<button type="submit" class="btn lazu-btn-mint">Guardar</button>' +
        '<button type="reset" class="btn lazu-btn-secondary">Restablecer</button>' +
      "</div>" +
    "</form>"
  );
}

// Quita el borde de error de todos los campos
function clearFieldErrors() {
  document.querySelector("#newTaskNameInput").classList.remove("lazu-input-error");
  document.querySelector("#newTaskDescription").classList.remove("lazu-input-error");
  document.querySelector("#newTaskDueDate").classList.remove("lazu-input-error");
  document.querySelector("#newTaskStatus").classList.remove("lazu-input-error");
}

// Activa la validación del formulario (llamar DESPUÉS de dibujar el formulario)
function setupTaskFormValidation() {
  var newTaskForm = document.querySelector("#newTaskForm");

  newTaskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que la página se recargue
    hideAlert();
    clearFieldErrors();

    var nameInput = document.querySelector("#newTaskNameInput");
    var descriptionInput = document.querySelector("#newTaskDescription");
    var dueDateInput = document.querySelector("#newTaskDueDate");
    var statusInput = document.querySelector("#newTaskStatus");

    // trim() quita los espacios al inicio y al final
    var name = nameInput.value.trim();
    var description = descriptionInput.value.trim();
    var dueDate = dueDateInput.value;
    var status = statusInput.value;

    // Validamos campo por campo
    if (name === "") {
      nameInput.classList.add("lazu-input-error");
      showAlert("El nombre de la tarea es obligatorio.", "error");
    } else if (name.length < 3) {
      nameInput.classList.add("lazu-input-error");
      showAlert("El nombre debe tener al menos 3 caracteres.", "error");
    } else if (description === "") {
      descriptionInput.classList.add("lazu-input-error");
      showAlert("La descripción es obligatoria.", "error");
    } else if (dueDate === "") {
      dueDateInput.classList.add("lazu-input-error");
      showAlert("Debes elegir una fecha de entrega.", "error");
    } else if (status === "") {
      statusInput.classList.add("lazu-input-error");
      showAlert("Debes seleccionar un estado.", "error");
    } else {
      showAlert("¡Tarea validada correctamente!", "success");
      newTaskForm.reset();
    }
  });

  // Al restablecer, también ocultamos alerta y errores
  newTaskForm.addEventListener("reset", function () {
    hideAlert();
    clearFieldErrors();
  });
}

