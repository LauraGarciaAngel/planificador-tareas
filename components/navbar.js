// COMPONENTE: Navbar
// Uso: renderNavbar("navbarContainer", "Resumen", 3);

// Lista de secciones del menú (para agregar una sección, solo añade un texto aquí)
var navbarSections = [
  "Resumen",
  "Concentración",
  "Planificación",
  "Mis tareas",
  "Estadísticas",
  "Categorías"
];

// Devuelve la fecha de hoy como texto, ej: "05 nov 2026"
function getTodayText() {
  var today = new Date();
  return today.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}

// Crea el HTML del navbar y lo devuelve como texto
// activeSection: nombre de la sección activa. taskCount: número junto a "Mis tareas"
function createNavbar(activeSection, taskCount) {
  var linksHtml = "";

  // Recorremos cada sección para crear su enlace
  for (var i = 0; i < navbarSections.length; i++) {
    var name = navbarSections[i];
    var activeClass = "";
    var counterHtml = "";

    // Si es la sección activa, agregamos la clase "active"
    if (name === activeSection) {
      activeClass = " active";
    }

    // Solo "Mis tareas" muestra el contador (con 2 dígitos: 03)
    if (name === "Mis tareas") {
      var countText = String(taskCount);
      if (countText.length < 2) {
        countText = "0" + countText;
      }
      counterHtml = ' <span class="lazu-nav-counter">' + countText + "</span>";
    }

    linksHtml +=
      '<li class="nav-item"><a class="lazu-nav-link d-block' + activeClass + '" href="#">' +
      name + counterHtml + "</a></li>";
  }

  return (
    '<nav class="navbar navbar-expand-lg lazu-navbar sticky-top">' +
      '<div class="container">' +
        '<a class="navbar-brand lazu-logo" href="#"><span class="lazu-logo-dot">❖</span> lazu</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" ' +
          'data-bs-target="#lazuMenu" aria-controls="lazuMenu" aria-expanded="false" aria-label="Abrir menú">' +
          '<span class="navbar-toggler-icon"></span>' +
        "</button>" +
        '<div class="collapse navbar-collapse" id="lazuMenu">' +
          '<ul class="navbar-nav me-auto gap-lg-1 mt-3 mt-lg-0">' + linksHtml + "</ul>" +
          '<div class="d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3 mt-3 mt-lg-0">' +
            '<span class="lazu-nav-date">' + getTodayText() + "</span>" +
            createButton("+ Nueva tarea", "mint") +
          "</div>" +
        "</div>" +
      "</div>" +
    "</nav>"
  );
}

// Dibuja el navbar dentro del elemento con el id indicado
function renderNavbar(containerId, activeSection, taskCount) {
  document.querySelector("#" + containerId).innerHTML = createNavbar(activeSection, taskCount);
}

