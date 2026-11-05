// COMPONENTE: Buttons
// Uso: createButton("Guardar", "mint")
//      createButton("Eliminar", "danger", { small: true, disabled: true })

// Crea el HTML de un botón y lo devuelve como texto
// text: texto del botón
// variant: "mint" (primario), "secondary" o "danger"
// options (opcional): { small: true, disabled: true }
function createButton(text, variant, options) {
  var classes = "btn lazu-btn-" + variant;
  var disabledAttribute = "";

  // Si no se envían opciones, usamos un objeto vacío
  if (options === undefined) {
    options = {};
  }

  if (options.small === true) {
    classes += " lazu-btn-sm";
  }
  if (options.disabled === true) {
    disabledAttribute = " disabled";
  }

  return '<button type="button" class="' + classes + '"' + disabledAttribute + ">" + text + "</button>";
}

