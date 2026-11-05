// COMPONENTE: Badges (StatusBadge y CategoryChip)
// Uso: createStatusBadge("progress")
//      createCategoryChip("work")

// Estados de tarea: clave -> texto y clase CSS
var statusOptions = {
  pending:  { text: "Pendiente",   cssClass: "lazu-badge-pending" },
  progress: { text: "En progreso", cssClass: "lazu-badge-progress" },
  done:     { text: "Completada",  cssClass: "lazu-badge-done" }
};

// Categorías: clave -> texto y clase CSS
var categoryOptions = {
  work:     { text: "Trabajo",     cssClass: "lazu-chip-work" },
  personal: { text: "Personal",    cssClass: "lazu-chip-personal" },
  learning: { text: "Aprendizaje", cssClass: "lazu-chip-learning" },
  health:   { text: "Salud",       cssClass: "lazu-chip-health" }
};

// Crea el HTML de un StatusBadge. status: "pending", "progress" o "done"
function createStatusBadge(status) {
  var option = statusOptions[status];

  // Si la clave no existe, usamos "pending" por defecto
  if (option === undefined) {
    option = statusOptions.pending;
  }

  return '<span class="lazu-badge ' + option.cssClass + '">' + option.text + "</span>";
}

// Crea el HTML de un CategoryChip. category: "work", "personal", "learning" o "health"
function createCategoryChip(category) {
  var option = categoryOptions[category];

  // Si la categoría no existe, mostramos un chip neutro con la clave como texto
  if (option === undefined) {
    return '<span class="lazu-chip">' + category + "</span>";
  }

  return '<span class="lazu-chip ' + option.cssClass + '">' + option.text + "</span>";
}

