# Componentes de Lazu

Cada archivo `.js` define funciones simples (sin clases ni módulos) que devuelven HTML.
Los estilos viven en `css/styles.css`. El catálogo completo está en `ui-kit.html`.

| Archivo | Funciones | Ejemplo |
|---|---|---|
| `buttons.js` | `createButton` | `createButton("Guardar", "mint")` |
| `badges.js` | `createStatusBadge`, `createCategoryChip` | `createStatusBadge("done")`, `createCategoryChip("work")` |
| `cards.js` | `createGlassCard`, `createTaskItem`, `createStatisticsCard` | `createStatisticsCard("Progreso", "63%", "de la semana")` |
| `forms.js` | `createTaskForm`, `setupTaskFormValidation`, `showAlert`, `hideAlert` | `createTaskForm()` y luego `setupTaskFormValidation()` |
| `navbar.js` | `createNavbar`, `renderNavbar` | `renderNavbar("navbarContainer", "Resumen", 3)` |
| `footer.js` | `createFooter`, `renderFooter` | `renderFooter("footerContainer", "Sprint 1 · v0.1.0")` |

- `create...` devuelve el HTML como texto (para combinarlo con otro HTML).
- `renderNavbar` y `renderFooter` lo dibujan dentro de un elemento por su `id`.

## Cómo usarlos en una página
1. Carga Bootstrap, `css/styles.css` y las fuentes.
2. Pon un contenedor vacío: `<div id="navbarContainer"></div>`.
3. Carga los scripts **antes** de usarlos. `buttons.js` va primero, porque los demás lo usan:
```html
<script src="components/buttons.js"></script>
<script src="components/badges.js"></script>
<script src="components/cards.js"></script>
<script src="components/forms.js"></script>
<script src="components/navbar.js"></script>
<script src="components/footer.js"></script>
```
4. Llama a la función que necesites.

> Los textos se insertan como HTML: usa solo textos propios, no escritos por usuarios.
