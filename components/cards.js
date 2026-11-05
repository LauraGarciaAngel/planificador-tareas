// COMPONENTE: Cards (GlassCard, TaskItem y StatisticsCard)
// Necesita cargar antes: buttons.js y badges.js
// Uso: createGlassCard("<p>Hola</p>")
//      createTaskItem({ title: "...", description: "...", category: "work", date: "2026-11-10", duration: "25 min", status: "pending" })
//      createStatisticsCard("Tareas pendientes", "02", "para hoy")

// Contenedor base: envuelve cualquier HTML dentro de una tarjeta de vidrio
function createGlassCard(contentHtml) {
  return '<div class="lazu-glass-card">' + contentHtml + "</div>";
}

// Tarjeta de tarea. task es un objeto con:
// title, description, category, date, duration, status
function createTaskItem(task) {
  var contentHtml =
    '<div class="d-flex justify-content-between align-items-start gap-2 mb-1">' +
      '<h3 class="lazu-task-title">' + task.title + "</h3>" +
      createStatusBadge(task.status) +
    "</div>" +
    '<p class="lazu-task-description">' + task.description + "</p>" +
    '<div class="d-flex flex-wrap align-items-center gap-2">' +
      createCategoryChip(task.category) +
      '<span class="lazu-task-meta">' + task.date + " · " + task.duration + "</span>" +
    "</div>" +
    '<div class="lazu-task-actions d-flex gap-2">' +
      createButton("Editar", "secondary", { small: true }) +
      createButton("Eliminar", "danger", { small: true }) +
    "</div>";

  return createGlassCard(contentHtml);
}

// Tarjeta de métrica: etiqueta arriba, número grande y subtítulo abajo
function createStatisticsCard(label, value, subtitle) {
  var contentHtml =
    '<p class="lazu-stat-label">' + label + "</p>" +
    '<p class="lazu-stat-value">' + value + "</p>" +
    '<p class="lazu-stat-subtitle">' + subtitle + "</p>";

  return createGlassCard(contentHtml);
}

