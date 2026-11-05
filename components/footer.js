// COMPONENTE: Footer
// Uso: renderFooter("footerContainer", "Sprint 1 · v0.1.0");

// Crea el HTML del footer y lo devuelve como texto
// versionText: nota de estado/versión que aparece a la derecha
function createFooter(versionText) {
  var year = new Date().getFullYear(); // año actual para los derechos de autor

  return (
    '<footer class="lazu-footer py-4 mt-auto">' +
      '<div class="container">' +
        '<div class="row gy-3">' +
          '<div class="col-12 col-md-5">' +
            '<p class="lazu-footer-title mb-1"><span class="lazu-logo-dot">❖</span> lazu</p>' +
            '<p class="mb-0">Organiza tu tiempo. Encuentra tu enfoque.</p>' +
          "</div>" +
          '<div class="col-6 col-md-3">' +
            '<p class="lazu-footer-title mb-2">Enlaces</p>' +
            '<ul class="list-unstyled mb-0">' +
              '<li><a class="lazu-footer-link" href="#">Resumen</a></li>' +
              '<li><a class="lazu-footer-link" href="#">Mis tareas</a></li>' +
              '<li><a class="lazu-footer-link" href="#">Estadísticas</a></li>' +
            "</ul>" +
          "</div>" +
          '<div class="col-6 col-md-4">' +
            '<p class="lazu-footer-title mb-2">Estado</p>' +
            '<p class="lazu-footer-version mb-0">' + versionText + "</p>" +
          "</div>" +
        "</div>" +
        '<hr style="border-color: var(--border-subtle);">' +
        '<p class="text-center mb-0">&copy; ' + year + " Lazu. Todos los derechos reservados.</p>" +
      "</div>" +
    "</footer>"
  );
}

// Dibuja el footer dentro del elemento con el id indicado
function renderFooter(containerId, versionText) {
  document.querySelector("#" + containerId).innerHTML = createFooter(versionText);
}

