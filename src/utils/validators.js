// src/utils/validators.js
function includesAny(text, values) {
  const lowerText = text.toLowerCase();
  return values.some((value) => lowerText.includes(value.toLowerCase()));
}

function compact(text) {
  return text.toLowerCase().replace(/\s+/g, "");
}

function countMatches(text, pattern) {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function isReactEditorType(editorType) {
  return editorType === "react" || editorType === "react-ts";
}

function createResult({ status, feedback }) {
  return {
    status,
    feedback,
  };
}

const validatorCopy = {
  en: {
    excellent: "Excellent work - this challenge looks complete.",
    close: "You are close - a few details still need attention.",
    needsWork: "Good start, but this challenge still needs more work.",
    noChecker: [
      "A checker is not available for this challenge yet.",
      "You can still use the requirements, tips, and solution view to compare your work.",
    ],
    generic: {
      intro:
        "Automatic review is using the challenge requirements for this exercise.",
      hasHtml: "Good - HTML structure is present.",
      missingHtml: "Add the required HTML structure.",
      hasCss: "Good - CSS styling is present.",
      missingCss: "Add the required CSS styling.",
      hasJs: "Good - JavaScript or React code is present.",
      missingJs: "Add the JavaScript or React code needed for this challenge.",
      requirementMet: (requirement) => `Requirement covered: ${requirement}`,
      requirementMissing: (requirement) =>
        `Review this requirement: ${requirement}`,
    },
    heading: {
      hasH1: "Good start - I found an h1 element.",
      missingH1: "I could not find an h1 element yet.",
      hasRedBackground: "Nice - the heading appears to have a red background.",
      missingRedBackground: "Check the background color - it should be red.",
      hasBorder: "Great - I found a 1px solid black border.",
      missingBorder: "The heading still needs a 1px solid black border.",
      hasRadius: "Good - rounded corners are present.",
      missingRadius: "Add rounded corners with border-radius.",
      hasPadding: "Nice - padding is included.",
      missingPadding: "Add some padding so the heading has space inside.",
    },
    button: {
      complete: "Excellent work - this challenge looks complete.",
      close: "You are close - just a few improvements remain.",
      needsWork: "This solution needs more work before it is complete.",
      hasButton: "Good - I found a button element.",
      missingButton: "I could not find a button element yet.",
      hasPadding: "Nice - the button has padding.",
      missingPadding: "Add padding to make the button feel clickable.",
      hasRadius: "Good - rounded corners are present.",
      missingRadius: "Add rounded corners with border-radius.",
      hasBackground: "Nice - the button has a background style.",
      missingBackground: "The button still needs a visible background color.",
      hasHover: "Great - I found a hover effect.",
      missingHover: "Add a :hover style so the button changes on mouse over.",
    },
    centeredBox: {
      hasBox: "Good - I found a box element.",
      missingBox: "I could not find a box element yet.",
      hasLayout: "Nice - the layout uses flexbox or grid.",
      missingLayout: "Use flexbox or grid on the parent to center the box.",
      hasCentering: "Great - horizontal and vertical centering are present.",
      missingCentering:
        "Add both horizontal and vertical centering, such as justify-content and align-items.",
      hasFullHeight: "Good - the parent has full screen height.",
      missingFullHeight:
        "Give the parent full height, such as min-height: 100vh.",
      hasSize: "Nice - the box has width and height.",
      missingSize: "Add width and height to the box.",
      hasBackground: "Great - the box has a visible background color.",
      missingBackground: "Add a background color to the box.",
    },
    profileCard: {
      hasContainer: "Good - I found a card container.",
      missingContainer: "Create a card container for the profile.",
      hasHeading: "Nice - the card includes a heading.",
      missingHeading: "Add a heading for the profile name.",
      hasParagraph: "Good - the card includes descriptive text.",
      missingParagraph: "Add a short paragraph or description.",
      hasPadding: "Nice - the card has padding.",
      missingPadding: "Add padding inside the card.",
      hasRadius: "Good - rounded corners are present.",
      missingRadius: "Add rounded corners with border-radius.",
      hasCentering: "Great - the card is centered.",
      missingCentering:
        "Center the card with flexbox, grid, or auto margins.",
    },
    builderCapstone: {
      hasStructure: "Good - I found the main dashboard structure and controls.",
      missingStructure:
        "Build the dashboard shell with inputs, filters, buttons, and a form.",
      hasLayout: "Nice - the dashboard uses layout styling to stay organised.",
      missingLayout:
        "Add grid or flex layout styling so the dashboard feels organised.",
      hasRendering: "Nice - the cards are rendered from JavaScript data.",
      missingRendering: "Render the visible cards from an array in JavaScript.",
      hasFilters: "Good - search or filter logic is wired into the UI.",
      missingFilters:
        "Connect the search input and select filter so they update the visible results.",
      hasSummary: "Nice - there is a live results summary.",
      missingSummary:
        "Add a small live summary so users can see how many results are showing.",
      hasEmptyState: "Good - a no-results or empty state is handled.",
      missingEmptyState:
        "Show a clear no-results state when the current filters match nothing.",
      hasSavedState: "Nice - users can save or pin resources.",
      missingSavedState: "Add a save or pin interaction for at least one card.",
      hasValidation: "Good - the form validates input before saving.",
      missingValidation: "Validate the form before adding a study goal.",
      hasRemoval: "Nice - saved goals can be removed.",
      missingRemoval: "Let the user remove a saved goal from the list.",
      hasStorage:
        "Good - UI state or study data is persisted with localStorage.",
      missingStorage:
        "Persist at least one preference or saved data item with localStorage.",
    },
    reactCapstone: {
      hasRouter: "Good - routing is set up in the app.",
      missingRouter: "Use HashRouter with routes for this capstone.",
      hasRoutes: "Nice - I found multiple route definitions.",
      missingRoutes:
        "Create at least three routes such as Home, Menu, and Book.",
      hasNavigation: "Good - navigation links are present.",
      missingNavigation: "Add navigation links so users can move between pages.",
      hasDataRendering: "Nice - menu data is rendered from an array.",
      missingDataRendering: "Render menu items from data with map().",
      hasFilters: "Good - search and category filtering are connected.",
      missingFilters:
        "Add search and category filters that update the visible dishes.",
      hasSavedState: "Nice - favourites can be saved or removed.",
      missingSavedState:
        "Add a favourites interaction so users can save dishes.",
      hasStorage:
        "Good - saved favourites are persisted with localStorage.",
      missingStorage:
        "Save the favourites in localStorage and restore them on first render.",
      hasForm: "Nice - the booking route includes a controlled form.",
      missingForm:
        "Add a booking form with controlled inputs on the booking route.",
      hasValidation: "Good - the booking form validates the main fields.",
      missingValidation:
        "Validate the booking form before showing success feedback.",
      hasEmptyState: "Nice - empty states are handled clearly.",
      missingEmptyState:
        "Show a clear empty state when no dishes or saved items are available.",
    },
    interviewAccessibility: {
      hasStructure: "Good - the form structure and core fields are present.",
      missingStructure:
        "Add the reservation form structure with the main fields and submit button.",
      hasLabels: "Nice - the fields are properly labeled.",
      missingLabels: "Add real labels so the form is easier to use and explain.",
      hasFocus: "Good - visible focus styles are present.",
      missingFocus:
        "Add visible focus styles so keyboard users can track where they are.",
      hasValidation: "Nice - the submit handler validates the fields.",
      missingValidation:
        "Validate the main fields before showing success feedback.",
      hasFeedback: "Good - the interface shows clear feedback.",
      missingFeedback:
        "Show one clear error or success message after validation runs.",
      hasA11ySupport: "Nice - the feedback region is set up accessibly.",
      missingA11ySupport:
        "Add an accessible feedback pattern such as aria-live or similarly clear status text.",
    },
    interviewDebugDom: {
      hasFilter: "Good - the list still renders from filtered data.",
      missingFilter:
        "Fix the filtering logic so the rendered cards come from the filtered array.",
      hasInputEvent: "Nice - the search updates while typing.",
      missingInputEvent:
        "Use the right input-driven event so the results update live.",
      hasCaseInsensitive: "Good - the search is case-insensitive.",
      missingCaseInsensitive:
        "Normalize the search so matching works regardless of letter case.",
      hasClear: "Nice - the clear button resets the query and the UI.",
      missingClear:
        "Fix the clear button so it resets the input value and re-renders the cards.",
      hasEmptyState: "Good - the empty state only shows when needed.",
      missingEmptyState:
        "Update the empty state so it only appears when nothing matches.",
    },
    interviewDebugAsync: {
      hasAsyncFlow: "Good - the dashboard uses an async loading flow.",
      missingAsyncFlow:
        "Keep a clear async loading flow with await or a promise-based request.",
      hasTryCatch: "Nice - the request is protected with error handling.",
      missingTryCatch:
        "Handle the failing request with try/catch or an equivalent error path.",
      hasStatusReset: "Good - the status text resets for loading and retry.",
      missingStatusReset:
        "Reset the visible status when the dashboard starts loading again.",
      hasFilterFix: "Nice - the status filter now uses the loaded items correctly.",
      missingFilterFix:
        "Fix the status filter so it shows all or the chosen subset correctly.",
      hasRetry: "Good - retry is wired to reload the dashboard.",
      missingRetry:
        "Keep the retry action connected to the dashboard load function.",
      hasStorage: "Nice - the note is restored and saved with localStorage.",
      missingStorage:
        "Restore and save the reviewer note with localStorage.",
    },
    interviewTypeScript: {
      hasTypes: "Good - the screen defines real TypeScript types.",
      missingTypes:
        "Add a type or interface for the main data and any focused state model.",
      hasUnion: "Nice - a union type is used for the filter or status.",
      missingUnion:
        "Use a small union type to model a limited set of filter values.",
      hasTypedState: "Good - React state is typed.",
      missingTypedState:
        "Type the React state so the shape of the UI data is explicit.",
      hasTypedEvents: "Nice - the event handlers are typed.",
      missingTypedEvents:
        "Type the form or input events so the handlers feel interview-ready.",
      hasRendering: "Good - the typed data is rendered into UI.",
      missingRendering:
        "Render the typed data into cards or rows with map().",
      hasForm: "Nice - the screen includes a controlled feedback form.",
      missingForm:
        "Add a controlled form and a feedback message after submit.",
    },
    interviewDebugReact: {
      hasState: "Good - the repaired screen uses React state intentionally.",
      missingState:
        "Keep the search and saved ids in React state rather than ad hoc values.",
      hasDerivedFilter: "Nice - the visible list is derived from the source data.",
      missingDerivedFilter:
        "Fix the filtered list so it is derived from the source data and current query.",
      hasCaseInsensitive: "Good - the search is now case-insensitive.",
      missingCaseInsensitive:
        "Normalize the search text so matching is reliable.",
      hasSavedToggle: "Nice - the save toggle updates ids correctly.",
      missingSavedToggle:
        "Fix the save toggle so saved ids are added and removed correctly.",
      hasStorage: "Good - saved ids are persisted with localStorage.",
      missingStorage:
        "Restore and save the shortlist ids with localStorage.",
      hasEmptyState: "Nice - the empty state is tied to the filtered result.",
      missingEmptyState:
        "Use the filtered result length to decide when the empty state should show.",
    },
    interviewShipping: {
      hasForm: "Good - the submit flow is built around a controlled form.",
      missingForm:
        "Add the controlled form with the required inputs and submit button.",
      hasValidation: "Nice - the inputs are validated before submitting.",
      missingValidation:
        "Validate the fields before entering the loading or success state.",
      hasLoading: "Good - the flow shows a loading state.",
      missingLoading:
        "Add a loading state while the fake request is running.",
      hasDisabled: "Nice - the submit button is disabled while loading.",
      missingDisabled:
        "Disable the submit button while the request is in progress.",
      hasAsync: "Good - the flow waits for async work before resolving.",
      missingAsync:
        "Use a promise, timeout, or await flow so the loading state is meaningful.",
      hasMessages: "Nice - the UI distinguishes error and success feedback.",
      missingMessages:
        "Show clear error and success feedback instead of one generic message.",
    },
  },
  es: {
    excellent: "Excelente trabajo - este reto parece completo.",
    close: "Estas cerca - todavia faltan algunos detalles.",
    needsWork: "Buen comienzo, pero este reto necesita un poco mas de trabajo.",
    noChecker: [
      "Todavia no hay checker automatico para este reto.",
      "Puedes usar los requisitos, pistas y la vista de solucion para comparar tu trabajo.",
    ],
    generic: {
      intro:
        "La revision automatica usa los requisitos del reto para este ejercicio.",
      hasHtml: "Bien - hay estructura HTML.",
      missingHtml: "Anade la estructura HTML necesaria.",
      hasCss: "Bien - hay estilos CSS.",
      missingCss: "Anade los estilos CSS necesarios.",
      hasJs: "Bien - hay codigo JavaScript o React.",
      missingJs: "Anade el codigo JavaScript o React necesario para este reto.",
      requirementMet: (requirement) => `Requisito cubierto: ${requirement}`,
      requirementMissing: (requirement) => `Revisa este requisito: ${requirement}`,
    },
    heading: {
      hasH1: "Buen comienzo - encontre un elemento h1.",
      missingH1: "Todavia no encuentro un elemento h1.",
      hasRedBackground: "Bien - el titulo parece tener fondo rojo.",
      missingRedBackground: "Revisa el color de fondo - debe ser rojo.",
      hasBorder: "Genial - encontre un borde negro solido de 1px.",
      missingBorder: "El titulo aun necesita un borde negro solido de 1px.",
      hasRadius: "Bien - las esquinas redondeadas estan presentes.",
      missingRadius: "Anade esquinas redondeadas con border-radius.",
      hasPadding: "Bien - hay padding incluido.",
      missingPadding: "Anade padding para que el titulo tenga espacio interior.",
    },
    button: {
      complete: "Excelente trabajo - este reto parece completo.",
      close: "Estas cerca - solo faltan algunos ajustes.",
      needsWork: "Esta solucion necesita mas trabajo antes de estar completa.",
      hasButton: "Bien - encontre un elemento button.",
      missingButton: "Todavia no encuentro un elemento button.",
      hasPadding: "Bien - el boton tiene padding.",
      missingPadding: "Anade padding para que el boton se sienta clicable.",
      hasRadius: "Bien - las esquinas redondeadas estan presentes.",
      missingRadius: "Anade esquinas redondeadas con border-radius.",
      hasBackground: "Bien - el boton tiene un estilo de fondo.",
      missingBackground: "El boton aun necesita un color de fondo visible.",
      hasHover: "Genial - encontre un efecto hover.",
      missingHover:
        "Anade un estilo :hover para que el boton cambie al pasar el raton.",
    },
    centeredBox: {
      hasBox: "Bien - encontre un elemento para la caja.",
      missingBox: "Todavia no encuentro un elemento para la caja.",
      hasLayout: "Bien - el layout usa flexbox o grid.",
      missingLayout: "Usa flexbox o grid en el padre para centrar la caja.",
      hasCentering: "Genial - hay centrado horizontal y vertical.",
      missingCentering:
        "Anade centrado horizontal y vertical, por ejemplo justify-content y align-items.",
      hasFullHeight: "Bien - el padre tiene altura completa de pantalla.",
      missingFullHeight:
        "Dale altura completa al padre, por ejemplo min-height: 100vh.",
      hasSize: "Bien - la caja tiene width y height.",
      missingSize: "Anade width y height a la caja.",
      hasBackground: "Genial - la caja tiene un color de fondo visible.",
      missingBackground: "Anade un color de fondo a la caja.",
    },
    profileCard: {
      hasContainer: "Bien - encontre un contenedor para la tarjeta.",
      missingContainer: "Crea un contenedor para la tarjeta de perfil.",
      hasHeading: "Bien - la tarjeta incluye un titulo.",
      missingHeading: "Anade un titulo para el nombre del perfil.",
      hasParagraph: "Bien - la tarjeta incluye texto descriptivo.",
      missingParagraph: "Anade un parrafo corto o descripcion.",
      hasPadding: "Bien - la tarjeta tiene padding.",
      missingPadding: "Anade padding dentro de la tarjeta.",
      hasRadius: "Bien - hay esquinas redondeadas.",
      missingRadius: "Anade esquinas redondeadas con border-radius.",
      hasCentering: "Genial - la tarjeta esta centrada.",
      missingCentering:
        "Centra la tarjeta con flexbox, grid o margenes automaticos.",
    },
    builderCapstone: {
      hasStructure:
        "Bien - encontre la estructura principal del panel y sus controles.",
      missingStructure:
        "Construye la base del panel con inputs, filtros, botones y formulario.",
      hasLayout: "Bien - el panel usa layout para mantenerse organizado.",
      missingLayout:
        "Anade estilos con grid o flex para que el panel se vea ordenado.",
      hasRendering: "Bien - las tarjetas se renderizan desde datos en JavaScript.",
      missingRendering:
        "Renderiza las tarjetas visibles desde un array en JavaScript.",
      hasFilters: "Bien - la logica de busqueda o filtro esta conectada a la UI.",
      missingFilters:
        "Conecta el input de busqueda y el select para actualizar los resultados visibles.",
      hasSummary: "Bien - hay un resumen en vivo de resultados.",
      missingSummary:
        "Anade un pequeno resumen en vivo para mostrar cuantos resultados aparecen.",
      hasEmptyState: "Bien - hay un estado vacio o sin resultados.",
      missingEmptyState:
        "Muestra un estado claro cuando los filtros no encuentran nada.",
      hasSavedState: "Bien - el usuario puede guardar o fijar recursos.",
      missingSavedState:
        "Anade una interaccion para guardar o fijar al menos una tarjeta.",
      hasValidation: "Bien - el formulario valida antes de guardar.",
      missingValidation:
        "Valida el formulario antes de anadir una meta de estudio.",
      hasRemoval: "Bien - las metas guardadas se pueden eliminar.",
      missingRemoval:
        "Permite que el usuario elimine una meta guardada de la lista.",
      hasStorage:
        "Bien - el estado de la UI o los datos se guardan con localStorage.",
      missingStorage:
        "Guarda al menos una preferencia o dato con localStorage.",
    },
    reactCapstone: {
      hasRouter: "Bien - el routing esta configurado en la app.",
      missingRouter: "Usa HashRouter con rutas para este proyecto final.",
      hasRoutes: "Bien - encontre varias definiciones de rutas.",
      missingRoutes:
        "Crea al menos tres rutas como Home, Menu y Book.",
      hasNavigation: "Bien - hay enlaces de navegacion.",
      missingNavigation:
        "Anade enlaces de navegacion para moverse entre paginas.",
      hasDataRendering: "Bien - el menu se renderiza desde un array de datos.",
      missingDataRendering: "Renderiza los platos desde datos con map().",
      hasFilters: "Bien - la busqueda y el filtro por categoria estan conectados.",
      missingFilters:
        "Anade busqueda y filtro por categoria para actualizar los platos visibles.",
      hasSavedState: "Bien - los favoritos se pueden guardar o quitar.",
      missingSavedState:
        "Anade una interaccion de favoritos para que el usuario guarde platos.",
      hasStorage:
        "Bien - los favoritos se guardan con localStorage.",
      missingStorage:
        "Guarda los favoritos en localStorage y restauralos al iniciar.",
      hasForm: "Bien - la ruta de reserva incluye un formulario controlado.",
      missingForm:
        "Anade un formulario de reserva con inputs controlados en la ruta Book.",
      hasValidation:
        "Bien - el formulario de reserva valida los campos principales.",
      missingValidation:
        "Valida el formulario de reserva antes de mostrar feedback de exito.",
      hasEmptyState: "Bien - los estados vacios estan resueltos con claridad.",
      missingEmptyState:
        "Muestra un estado vacio claro cuando no haya platos o favoritos.",
    },
    interviewAccessibility: {
      hasStructure:
        "Bien - la estructura del formulario y los campos principales existen.",
      missingStructure:
        "Anade la estructura del formulario de reserva con campos principales y boton.",
      hasLabels: "Bien - los campos estan etiquetados correctamente.",
      missingLabels:
        "Anade labels reales para que el formulario sea mas usable y explicable.",
      hasFocus: "Bien - hay estados focus visibles.",
      missingFocus:
        "Anade estados focus visibles para que el usuario de teclado se oriente.",
      hasValidation: "Bien - el submit valida los campos.",
      missingValidation:
        "Valida los campos principales antes de mostrar exito.",
      hasFeedback: "Bien - la interfaz muestra feedback claro.",
      missingFeedback:
        "Muestra un mensaje claro de error o exito tras validar.",
      hasA11ySupport:
        "Bien - la zona de feedback esta planteada de forma accesible.",
      missingA11ySupport:
        "Anade un patron accesible de feedback como aria-live o un texto de estado claro.",
    },
    interviewDebugDom: {
      hasFilter: "Bien - la lista sigue renderizando desde datos filtrados.",
      missingFilter:
        "Arregla la logica de filtro para que las tarjetas salgan del array filtrado.",
      hasInputEvent: "Bien - la busqueda actualiza mientras se escribe.",
      missingInputEvent:
        "Usa el evento correcto para que los resultados cambien en vivo.",
      hasCaseInsensitive: "Bien - la busqueda no distingue mayusculas.",
      missingCaseInsensitive:
        "Normaliza la busqueda para que funcione sin importar mayusculas o minusculas.",
      hasClear: "Bien - el boton limpiar resetea consulta y UI.",
      missingClear:
        "Arregla el boton limpiar para resetear el input y volver a renderizar.",
      hasEmptyState: "Bien - el estado vacio solo aparece cuando toca.",
      missingEmptyState:
        "Actualiza el estado vacio para que solo se vea cuando no hay coincidencias.",
    },
    interviewDebugAsync: {
      hasAsyncFlow: "Bien - el dashboard usa un flujo asincrono claro.",
      missingAsyncFlow:
        "Mantén un flujo asincrono claro con await o una request basada en promesas.",
      hasTryCatch: "Bien - la request esta protegida con manejo de errores.",
      missingTryCatch:
        "Maneja la request fallida con try/catch o una ruta de error equivalente.",
      hasStatusReset: "Bien - el texto de estado se reinicia en carga y reintento.",
      missingStatusReset:
        "Reinicia el estado visible cuando el dashboard vuelve a cargar.",
      hasFilterFix:
        "Bien - el filtro por estado usa bien los items cargados.",
      missingFilterFix:
        "Arregla el filtro para que muestre All o el subconjunto correcto.",
      hasRetry: "Bien - reintentar vuelve a cargar el dashboard.",
      missingRetry:
        "Mantén la accion de reintento conectada a la carga del dashboard.",
      hasStorage:
        "Bien - la nota se restaura y guarda con localStorage.",
      missingStorage:
        "Restaura y guarda la nota del revisor con localStorage.",
    },
    interviewTypeScript: {
      hasTypes: "Bien - la pantalla define tipos reales de TypeScript.",
      missingTypes:
        "Anade un type o interface para los datos principales y el estado importante.",
      hasUnion: "Bien - usas una union para filtro o estado.",
      missingUnion:
        "Usa una union pequena para modelar un conjunto limitado de valores.",
      hasTypedState: "Bien - el estado de React esta tipado.",
      missingTypedState:
        "Tipa el estado de React para dejar clara la forma de los datos.",
      hasTypedEvents: "Bien - los handlers de eventos estan tipados.",
      missingTypedEvents:
        "Tipa los eventos del formulario o de inputs para que se sienta listo para entrevista.",
      hasRendering: "Bien - los datos tipados se renderizan en UI.",
      missingRendering:
        "Renderiza los datos tipados en tarjetas o filas con map().",
      hasForm: "Bien - la pantalla incluye un formulario controlado.",
      missingForm:
        "Anade un formulario controlado y un mensaje de feedback al enviar.",
    },
    interviewDebugReact: {
      hasState: "Bien - la pantalla reparada usa estado de React con criterio.",
      missingState:
        "Mantén busqueda y ids guardados dentro de estado de React.",
      hasDerivedFilter: "Bien - la lista visible se deriva de los datos base.",
      missingDerivedFilter:
        "Arregla la lista filtrada para derivarla desde datos base y query actual.",
      hasCaseInsensitive: "Bien - la busqueda ya no distingue mayusculas.",
      missingCaseInsensitive:
        "Normaliza la busqueda para que el matching sea fiable.",
      hasSavedToggle: "Bien - el toggle de guardado actualiza ids correctamente.",
      missingSavedToggle:
        "Arregla el toggle para que los ids se anadan y eliminen bien.",
      hasStorage: "Bien - los ids guardados persisten con localStorage.",
      missingStorage:
        "Restaura y guarda los ids de shortlist con localStorage.",
      hasEmptyState:
        "Bien - el estado vacio depende del resultado filtrado.",
      missingEmptyState:
        "Usa la longitud del resultado filtrado para decidir el estado vacio.",
    },
    interviewShipping: {
      hasForm: "Bien - el flujo se construye sobre un formulario controlado.",
      missingForm:
        "Anade el formulario controlado con los inputs necesarios y boton submit.",
      hasValidation: "Bien - los inputs se validan antes de enviar.",
      missingValidation:
        "Valida los campos antes de entrar en carga o exito.",
      hasLoading: "Bien - el flujo muestra estado de carga.",
      missingLoading:
        "Anade un estado de carga mientras corre la request simulada.",
      hasDisabled:
        "Bien - el boton submit se desactiva durante la carga.",
      missingDisabled:
        "Desactiva el boton submit mientras la request esta en curso.",
      hasAsync:
        "Bien - el flujo espera trabajo asincrono antes de resolver.",
      missingAsync:
        "Usa una promesa, timeout o await para que la carga tenga sentido.",
      hasMessages:
        "Bien - la UI diferencia feedback de error y de exito.",
      missingMessages:
        "Muestra feedback claro de error y exito en lugar de un solo mensaje generico.",
    },
  },
};

function getValidatorCopy(language) {
  return validatorCopy[language] || validatorCopy.en;
}

function getSource(draft) {
  const html = draft?.html || "";
  const css = draft?.css || "";
  const js = draft?.js || "";
  const all = `${html}\n${css}\n${js}`;

  return {
    html,
    css,
    js,
    all,
    lowerHtml: html.toLowerCase(),
    lowerCss: css.toLowerCase(),
    lowerJs: js.toLowerCase(),
    lowerAll: all.toLowerCase(),
    compactCss: compact(css),
    compactJs: compact(js),
  };
}

function hasTag(html, tags) {
  const lowerHtml = html.toLowerCase();

  return tags.some((tag) => lowerHtml.includes(`<${tag}`));
}

function hasAnyCode(...values) {
  return values.some((value) => (value || "").trim().length > 0);
}

function hasCssDeclaration(source, declarations) {
  return declarations.some((declaration) =>
    source.compactCss.includes(declaration)
  );
}

function hasCentering(source) {
  return (
    hasCssDeclaration(source, [
      "justify-content:center",
      "align-items:center",
      "place-items:center",
      "margin:auto",
      "margin:0auto",
    ]) ||
    (source.compactCss.includes("display:flex") &&
      (source.compactCss.includes("justify-content:center") ||
        source.compactCss.includes("align-items:center")))
  );
}

export function validateStyledHeading({ html, css }, language = "en") {
  const text = getValidatorCopy(language);
  const feedback = [];
  let score = 0;

  const hasH1 = includesAny(html, ["<h1"]);
  const hasRedBackground =
    includesAny(css, ["background: red", "background-color: red"]) ||
    includesAny(css, ["background:#ff0000", "background-color:#ff0000"]);
  const hasBorder = includesAny(css, [
    "border: 1px solid black",
    "border:1px solid black",
  ]);
  const hasBorderRadius = includesAny(css, ["border-radius"]);
  const hasPadding = includesAny(css, ["padding"]);

  if (hasH1) {
    score += 1;
    feedback.push(text.heading.hasH1);
  } else {
    feedback.push(text.heading.missingH1);
  }

  if (hasRedBackground) {
    score += 1;
    feedback.push(text.heading.hasRedBackground);
  } else {
    feedback.push(text.heading.missingRedBackground);
  }

  if (hasBorder) {
    score += 1;
    feedback.push(text.heading.hasBorder);
  } else {
    feedback.push(text.heading.missingBorder);
  }

  if (hasBorderRadius) {
    score += 1;
    feedback.push(text.heading.hasRadius);
  } else {
    feedback.push(text.heading.missingRadius);
  }

  if (hasPadding) {
    score += 1;
    feedback.push(text.heading.hasPadding);
  } else {
    feedback.push(text.heading.missingPadding);
  }

  if (score === 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 3) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateStyledButton({ html, css }, language = "en") {
  const text = getValidatorCopy(language);
  const feedback = [];
  let score = 0;

  const hasButton = includesAny(html, ["<button"]);
  const hasPadding = includesAny(css, ["padding"]);
  const hasBorderRadius = includesAny(css, ["border-radius"]);
  const hasBackground = includesAny(css, ["background", "background-color"]);
  const hasHover = includesAny(css, [":hover"]);

  if (hasButton) {
    score += 1;
    feedback.push(text.button.hasButton);
  } else {
    feedback.push(text.button.missingButton);
  }

  if (hasPadding) {
    score += 1;
    feedback.push(text.button.hasPadding);
  } else {
    feedback.push(text.button.missingPadding);
  }

  if (hasBorderRadius) {
    score += 1;
    feedback.push(text.button.hasRadius);
  } else {
    feedback.push(text.button.missingRadius);
  }

  if (hasBackground) {
    score += 1;
    feedback.push(text.button.hasBackground);
  } else {
    feedback.push(text.button.missingBackground);
  }

  if (hasHover) {
    score += 1;
    feedback.push(text.button.hasHover);
  } else {
    feedback.push(text.button.missingHover);
  }

  if (score === 5) {
    return createResult({
      status: "success",
      feedback: [text.button.complete, ...feedback],
    });
  }

  if (score >= 3) {
    return createResult({
      status: "close",
      feedback: [text.button.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.button.needsWork, ...feedback],
  });
}

export function validateCenteredBox({ html, css }, language = "en") {
  const text = getValidatorCopy(language);
  const feedback = [];
  let score = 0;
  const compactCss = compact(css);

  const hasBox = includesAny(html, ["<div", "class=\"box\"", "class='box'"]);
  const hasLayout =
    compactCss.includes("display:flex") || compactCss.includes("display:grid");
  const hasHorizontalCenter =
    compactCss.includes("justify-content:center") ||
    compactCss.includes("place-items:center") ||
    compactCss.includes("margin:auto");
  const hasVerticalCenter =
    compactCss.includes("align-items:center") ||
    compactCss.includes("place-items:center");
  const hasFullHeight =
    compactCss.includes("min-height:100vh") ||
    compactCss.includes("height:100vh") ||
    compactCss.includes("min-height:100%");
  const hasSize =
    compactCss.includes("width:") &&
    compactCss.includes("height:") &&
    !compactCss.match(/width:\s*0/) &&
    !compactCss.match(/height:\s*0/);
  const hasBackground =
    compactCss.includes("background:") ||
    compactCss.includes("background-color:");

  if (hasBox) {
    score += 1;
    feedback.push(text.centeredBox.hasBox);
  } else {
    feedback.push(text.centeredBox.missingBox);
  }

  if (hasLayout) {
    score += 1;
    feedback.push(text.centeredBox.hasLayout);
  } else {
    feedback.push(text.centeredBox.missingLayout);
  }

  if (hasHorizontalCenter && hasVerticalCenter) {
    score += 1;
    feedback.push(text.centeredBox.hasCentering);
  } else {
    feedback.push(text.centeredBox.missingCentering);
  }

  if (hasFullHeight) {
    score += 1;
    feedback.push(text.centeredBox.hasFullHeight);
  } else {
    feedback.push(text.centeredBox.missingFullHeight);
  }

  if (hasSize) {
    score += 1;
    feedback.push(text.centeredBox.hasSize);
  } else {
    feedback.push(text.centeredBox.missingSize);
  }

  if (hasBackground) {
    score += 1;
    feedback.push(text.centeredBox.hasBackground);
  } else {
    feedback.push(text.centeredBox.missingBackground);
  }

  if (score === 6) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateProfileCard({ html, css }, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource({ html, css, js: "" });
  const feedback = [];
  let score = 0;

  const hasHeading = hasTag(html, ["h1", "h2", "h3"]);
  const hasParagraph = hasTag(html, ["p"]);
  const hasContainer =
    hasTag(html, ["div", "article", "section"]) &&
    (hasHeading || hasParagraph || includesAny(html, ["card", "profile"]));
  const hasPadding = source.compactCss.includes("padding:");
  const hasBorderRadius = source.compactCss.includes("border-radius:");
  const isCentered = hasCentering(source);

  if (hasContainer) {
    score += 1;
    feedback.push(text.profileCard.hasContainer);
  } else {
    feedback.push(text.profileCard.missingContainer);
  }

  if (hasHeading) {
    score += 1;
    feedback.push(text.profileCard.hasHeading);
  } else {
    feedback.push(text.profileCard.missingHeading);
  }

  if (hasParagraph) {
    score += 1;
    feedback.push(text.profileCard.hasParagraph);
  } else {
    feedback.push(text.profileCard.missingParagraph);
  }

  if (hasPadding) {
    score += 1;
    feedback.push(text.profileCard.hasPadding);
  } else {
    feedback.push(text.profileCard.missingPadding);
  }

  if (hasBorderRadius) {
    score += 1;
    feedback.push(text.profileCard.hasRadius);
  } else {
    feedback.push(text.profileCard.missingRadius);
  }

  if (isCentered) {
    score += 1;
    feedback.push(text.profileCard.hasCentering);
  } else {
    feedback.push(text.profileCard.missingCentering);
  }

  if (score === 6) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

function shouldCheckHtml(challenge) {
  if (isReactEditorType(challenge?.editorType)) return false;

  return hasAnyCode(challenge?.solution?.html) || challenge?.editorType === "web";
}

function shouldCheckCss(challenge) {
  if (
    isReactEditorType(challenge?.editorType) &&
    !hasAnyCode(challenge?.solution?.css)
  ) {
    return false;
  }

  const challengeText = [
    challenge?.category,
    challenge?.goal,
    ...(challenge?.requirements || []),
    ...(challenge?.concepts || []),
  ]
    .join(" ")
    .toLowerCase();

  return (
    hasAnyCode(challenge?.solution?.css) ||
    includesAny(challengeText, [
      "css",
      "style",
      "layout",
      "responsive",
      "padding",
      "border",
      "background",
      "grid",
      "flex",
      "center",
    ])
  );
}

function shouldCheckJs(challenge) {
  const challengeText = [
    challenge?.category,
    challenge?.goal,
    ...(challenge?.requirements || []),
    ...(challenge?.concepts || []),
  ]
    .join(" ")
    .toLowerCase();

  return (
    isReactEditorType(challenge?.editorType) ||
    hasAnyCode(challenge?.solution?.js) ||
    includesAny(challengeText, [
      "javascript",
      "dom",
      "event",
      "api",
      "async",
      "fetch",
      "promise",
      "localstorage",
      "react",
      "state",
    ])
  );
}

function checkRequirement(requirement, source, challenge) {
  const text = requirement.toLowerCase();
  const isReact = isReactEditorType(challenge?.editorType);

  if (text.includes("h1")) return hasTag(source.html, ["h1"]);
  if (text.includes("heading") || text.includes("title")) {
    return isReact
      ? /<h[1-6]\b/i.test(source.js)
      : hasTag(source.html, ["h1", "h2", "h3", "h4"]);
  }
  if (text.includes("paragraph") || text.includes("description")) {
    return isReact ? source.lowerJs.includes("<p") : hasTag(source.html, ["p"]);
  }
  if (text.includes("button")) {
    return isReact
      ? source.lowerJs.includes("<button")
      : hasTag(source.html, ["button"]);
  }
  if (text.includes("input")) {
    return isReact
      ? source.lowerJs.includes("<input") || source.lowerJs.includes("<textarea")
      : hasTag(source.html, ["input", "textarea"]);
  }
  if (text.includes("textarea")) {
    return isReact
      ? source.lowerJs.includes("<textarea")
      : hasTag(source.html, ["textarea"]);
  }
  if (/\bselect\b/.test(text)) {
    return isReact
      ? source.lowerJs.includes("<select")
      : hasTag(source.html, ["select"]);
  }
  if (text.includes("form")) {
    return isReact ? source.lowerJs.includes("<form") : hasTag(source.html, ["form"]);
  }
  if (text.includes("list") || text.includes("items") || text.includes("cards")) {
    return (
      hasTag(source.html, ["ul", "ol", "li", "article", "div"]) ||
      includesAny(source.lowerJs, [".map(", "<ul", "<li", "<article"])
    );
  }
  if (text.includes("nav") || text.includes("navigation")) {
    return (
      hasTag(source.html, ["nav"]) ||
      source.lowerJs.includes("<nav") ||
      source.lowerJs.includes("<link")
    );
  }
  if (text.includes("semantic")) {
    return (
      hasTag(source.html, ["header", "main", "section", "article", "nav", "footer"]) ||
      includesAny(source.lowerJs, ["<header", "<main", "<section", "<article"])
    );
  }
  if (text.includes("padding")) return source.compactCss.includes("padding:");
  if (text.includes("rounded") || text.includes("corner")) {
    return source.compactCss.includes("border-radius:");
  }
  if (text.includes("background")) {
    return (
      source.compactCss.includes("background:") ||
      source.compactCss.includes("background-color:")
    );
  }
  if (text.includes("width") && text.includes("height")) {
    return source.compactCss.includes("width:") && source.compactCss.includes("height:");
  }
  if (text.includes("center")) return hasCentering(source);
  if (text.includes("flex")) return source.compactCss.includes("display:flex");
  if (text.includes("grid")) return source.compactCss.includes("display:grid");
  if (text.includes("responsive") || text.includes("mobile")) {
    return (
      source.lowerCss.includes("@media") ||
      source.lowerCss.includes("minmax") ||
      source.lowerCss.includes("auto-fit")
    );
  }
  if (text.includes("hover")) return source.lowerCss.includes(":hover");
  if (
    text.includes("event") ||
    text.includes("click") ||
    text.includes("typing") ||
    text.includes("change")
  ) {
    return includesAny(source.lowerJs, [
      "addeventlistener",
      "onclick",
      "onchange",
      "oninput",
      "onclick",
      "onchange",
    ]);
  }
  if (text.includes("loading")) {
    return includesAny(source.lowerAll, [
      "loading",
      "isloading",
      "setloading",
      "settimeout",
    ]);
  }
  if (text.includes("error")) {
    return includesAny(source.lowerAll, [
      "error",
      "invalid",
      "please enter",
      "message",
      "catch",
      "try",
    ]);
  }
  if (text.includes("empty") || text.includes("no data")) {
    return includesAny(source.lowerAll, [
      "length === 0",
      "length===0",
      "no items",
      "no data",
      "empty",
    ]);
  }
  if (text.includes("success")) {
    return includesAny(source.lowerAll, ["success", "valid", "submitted"]);
  }
  if (text.includes("content") && text.includes("data")) {
    return includesAny(source.lowerJs, [".map(", "<ul", "<li", "<h2", "<p"]);
  }
  if (text.includes("usereducer")) {
    return source.lowerJs.includes("usereducer");
  }
  if (text.includes("state") || text.includes("usestate")) {
    return source.lowerJs.includes("usestate");
  }
  if (text.includes("effect") || text.includes("useeffect")) {
    return source.lowerJs.includes("useeffect");
  }
  if (text.includes("props")) {
    return /\(\s*\{?[a-zA-Z][\w,\s{}]*\}?\s*\)/.test(source.js);
  }
  if (text.includes("component")) {
    return /function\s+[A-Z][A-Za-z0-9]*/.test(source.js);
  }
  if (text.includes("map")) return source.lowerJs.includes(".map(");
  if (text.includes("filter")) return source.lowerJs.includes(".filter(");
  if (text.includes("sort")) return source.lowerJs.includes(".sort(");
  if (text.includes("reduce") || text.includes("total")) {
    return source.lowerJs.includes(".reduce(") || includesAny(source.lowerJs, ["total", "sum"]);
  }
  if (text.includes("fetch")) return source.lowerJs.includes("fetch(");
  if (text.includes("async") || text.includes("await")) {
    return includesAny(source.lowerJs, [
      "async",
      "await",
      "settimeout",
      "promise",
      "useeffect",
    ]);
  }
  if (text.includes("promise")) {
    return source.lowerJs.includes("promise") || source.lowerJs.includes(".then(");
  }
  if (text.includes("localstorage")) return source.lowerJs.includes("localstorage");
  if (text.includes("json")) {
    return includesAny(source.lowerJs, ["json.parse", "json.stringify", ".json("]);
  }
  if (text.includes("route") || text.includes("router")) {
    return includesAny(source.lowerJs, ["routes", "route", "hashrouter", "browserrouter"]);
  }
  if (text.includes("url param") || text.includes("useparams")) {
    return source.lowerJs.includes("useparams");
  }
  if (text.includes("context")) {
    return includesAny(source.lowerJs, ["createcontext", "usecontext"]);
  }
  if (text.includes("validation") || text.includes("validate")) {
    return includesAny(source.lowerJs, ["validate", "required", "error"]);
  }

  return null;
}

export function validateGenericChallenge(challenge, draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [text.generic.intro];
  const checks = [];

  const addCheck = (passed, successMessage, missingMessage) => {
    checks.push(Boolean(passed));
    feedback.push(passed ? successMessage : missingMessage);
  };

  if (shouldCheckHtml(challenge)) {
    addCheck(
      hasAnyCode(source.html) && hasTag(source.html, ["div", "section", "article", "button", "input", "form", "h1", "h2", "p", "ul", "nav"]),
      text.generic.hasHtml,
      text.generic.missingHtml
    );
  }

  if (shouldCheckCss(challenge)) {
    addCheck(
      hasAnyCode(source.css) && (source.css.includes("{") || source.css.includes(":")),
      text.generic.hasCss,
      text.generic.missingCss
    );
  }

  if (shouldCheckJs(challenge)) {
    addCheck(
      hasAnyCode(source.js),
      text.generic.hasJs,
      text.generic.missingJs
    );
  }

  const requirementChecks = (challenge?.requirements || [])
    .map((requirement) => ({
      requirement,
      passed: checkRequirement(requirement, source, challenge),
    }))
    .filter((item) => item.passed !== null);

  requirementChecks.slice(0, 8).forEach(({ requirement, passed }) => {
    addCheck(
      passed,
      text.generic.requirementMet(requirement),
      text.generic.requirementMissing(requirement)
    );
  });

  const passedCount = checks.filter(Boolean).length;
  const totalChecks = checks.length || 1;
  const ratio = passedCount / totalChecks;

  if (ratio >= 0.72) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (ratio >= 0.5) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateBuilderPracticeLab(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasStructure =
    hasTag(source.html, ["section", "form"]) &&
    hasTag(source.html, ["input"]) &&
    hasTag(source.html, ["select"]) &&
    hasTag(source.html, ["button"]);
  const hasLayout =
    source.compactCss.includes("display:grid") ||
    source.compactCss.includes("display:flex");
  const hasRendering = includesAny(source.lowerJs, [
    ".map(",
    "innerhtml",
    "createelement",
  ]);
  const hasFilters =
    source.lowerJs.includes(".filter(") &&
    includesAny(source.lowerJs, [
      "addeventlistener(\"input\"",
      "addeventlistener('input'",
      "addeventlistener(\"change\"",
      "addeventlistener('change'",
    ]);
  const hasSummary =
    includesAny(source.lowerAll, ["summary", "showing", "results"]) &&
    includesAny(source.lowerJs, ["textcontent", "innerhtml"]);
  const hasEmptyState = includesAny(source.lowerAll, [
    "no results",
    "no resources",
    "hidden",
    "length === 0",
    "length===0",
  ]);
  const hasSavedState = includesAny(source.lowerJs, [
    "savedids",
    "data-save-id",
    "save resource",
    "pin",
  ]);
  const hasValidation =
    source.lowerJs.includes(".trim()") &&
    includesAny(source.lowerAll, ["please enter", "already", "feedback", "error"]);
  const hasRemoval = includesAny(source.lowerJs, [
    "data-goal-index",
    "remove",
    "goalindex",
  ]);
  const hasStorage = includesAny(source.lowerJs, [
    "localstorage",
    "json.stringify",
    "json.parse",
  ]);

  [
    [hasStructure, text.builderCapstone.hasStructure, text.builderCapstone.missingStructure],
    [hasLayout, text.builderCapstone.hasLayout, text.builderCapstone.missingLayout],
    [hasRendering, text.builderCapstone.hasRendering, text.builderCapstone.missingRendering],
    [hasFilters, text.builderCapstone.hasFilters, text.builderCapstone.missingFilters],
    [hasSummary, text.builderCapstone.hasSummary, text.builderCapstone.missingSummary],
    [hasEmptyState, text.builderCapstone.hasEmptyState, text.builderCapstone.missingEmptyState],
    [hasSavedState, text.builderCapstone.hasSavedState, text.builderCapstone.missingSavedState],
    [hasValidation, text.builderCapstone.hasValidation, text.builderCapstone.missingValidation],
    [hasRemoval, text.builderCapstone.hasRemoval, text.builderCapstone.missingRemoval],
    [hasStorage, text.builderCapstone.hasStorage, text.builderCapstone.missingStorage],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 8) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 6) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateReactRestaurantCapstone(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const routeCount = countMatches(source.lowerJs, /<route\b/g);
  const hasRouter = includesAny(source.lowerJs, ["hashrouter", "<routes", "<route"]);
  const hasRoutes = routeCount >= 3;
  const hasNavigation = includesAny(source.lowerJs, ["<nav", "<link"]);
  const hasDataRendering = source.lowerJs.includes(".map(");
  const hasFilters =
    source.lowerJs.includes(".filter(") &&
    includesAny(source.lowerJs, ["search", "category", "setsearch", "setcategory"]);
  const hasSavedState = includesAny(source.lowerJs, [
    "savedids",
    "setsavedids",
    "togglesaved",
    "ontogglesaved",
  ]);
  const hasStorage =
    source.lowerJs.includes("localstorage") &&
    includesAny(source.lowerJs, ["useeffect", "json.stringify"]);
  const hasForm =
    source.lowerJs.includes("<form") &&
    includesAny(source.lowerJs, ["onsubmit", "usestate", "setname", "setemail"]);
  const hasValidation =
    source.lowerJs.includes("preventdefault") &&
    includesAny(source.lowerAll, ["please enter", "valid email", "includes(\"@\")", "includes('@')"]);
  const hasEmptyState = includesAny(source.lowerAll, [
    "no dishes",
    "no saved",
    "no results",
  ]);

  [
    [hasRouter, text.reactCapstone.hasRouter, text.reactCapstone.missingRouter],
    [hasRoutes, text.reactCapstone.hasRoutes, text.reactCapstone.missingRoutes],
    [hasNavigation, text.reactCapstone.hasNavigation, text.reactCapstone.missingNavigation],
    [hasDataRendering, text.reactCapstone.hasDataRendering, text.reactCapstone.missingDataRendering],
    [hasFilters, text.reactCapstone.hasFilters, text.reactCapstone.missingFilters],
    [hasSavedState, text.reactCapstone.hasSavedState, text.reactCapstone.missingSavedState],
    [hasStorage, text.reactCapstone.hasStorage, text.reactCapstone.missingStorage],
    [hasForm, text.reactCapstone.hasForm, text.reactCapstone.missingForm],
    [hasValidation, text.reactCapstone.hasValidation, text.reactCapstone.missingValidation],
    [hasEmptyState, text.reactCapstone.hasEmptyState, text.reactCapstone.missingEmptyState],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 8) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 6) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewAccessibilityTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasStructure =
    hasTag(source.html, ["form"]) &&
    hasTag(source.html, ["input"]) &&
    hasTag(source.html, ["select", "button"]);
  const hasLabels = hasTag(source.html, ["label"]);
  const hasFocus =
    source.lowerCss.includes(":focus") ||
    includesAny(source.compactCss, ["outline:", "box-shadow:"]);
  const hasValidation =
    includesAny(source.lowerJs, ["submit", "preventdefault", ".trim()", "includes(\"@\")", "includes('@')"]);
  const hasFeedback = includesAny(source.lowerAll, [
    "feedback",
    "please enter",
    "looks ready",
    "success",
    "error",
  ]);
  const hasA11ySupport = includesAny(source.lowerHtml, [
    "aria-live",
    "aria-describedby",
  ]);

  [
    [hasStructure, text.interviewAccessibility.hasStructure, text.interviewAccessibility.missingStructure],
    [hasLabels, text.interviewAccessibility.hasLabels, text.interviewAccessibility.missingLabels],
    [hasFocus, text.interviewAccessibility.hasFocus, text.interviewAccessibility.missingFocus],
    [hasValidation, text.interviewAccessibility.hasValidation, text.interviewAccessibility.missingValidation],
    [hasFeedback, text.interviewAccessibility.hasFeedback, text.interviewAccessibility.missingFeedback],
    [hasA11ySupport, text.interviewAccessibility.hasA11ySupport, text.interviewAccessibility.missingA11ySupport],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewDebugDomTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasFilter =
    source.lowerJs.includes(".filter(") &&
    includesAny(source.lowerJs, ["innerhtml", "map(", "resource"]);
  const hasInputEvent = includesAny(source.lowerJs, [
    "addeventlistener(\"input\"",
    "addeventlistener('input'",
  ]);
  const hasCaseInsensitive = includesAny(source.lowerJs, [
    "tolowercase()",
    "trim().tolowercase()",
  ]);
  const hasClear = includesAny(source.lowerJs, [
    ".value = \"\"",
    ".value=''",
    ".value = ''",
  ]);
  const hasEmptyState = includesAny(source.lowerJs, [
    ".hidden = visibleresources.length > 0",
    "length > 0",
    "length===0",
    "length === 0",
  ]);

  [
    [hasFilter, text.interviewDebugDom.hasFilter, text.interviewDebugDom.missingFilter],
    [hasInputEvent, text.interviewDebugDom.hasInputEvent, text.interviewDebugDom.missingInputEvent],
    [hasCaseInsensitive, text.interviewDebugDom.hasCaseInsensitive, text.interviewDebugDom.missingCaseInsensitive],
    [hasClear, text.interviewDebugDom.hasClear, text.interviewDebugDom.missingClear],
    [hasEmptyState, text.interviewDebugDom.hasEmptyState, text.interviewDebugDom.missingEmptyState],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 4) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 3) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewDebugAsyncTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasAsyncFlow = includesAny(source.lowerJs, [
    "async function",
    "await ",
    "new promise",
  ]);
  const hasTryCatch = source.lowerJs.includes("try") && source.lowerJs.includes("catch");
  const hasStatusReset = includesAny(source.lowerAll, [
    "loading...",
    "dashboard ready",
    "request failed",
    "textcontent",
  ]);
  const hasFilterFix =
    source.lowerJs.includes(".filter(") &&
    includesAny(source.lowerJs, ["=== \"all\" ||", "=== 'all' ||"]);
  const hasRetry = includesAny(source.lowerJs, [
    "retrybtn",
    "addeventlistener(\"click\", hydratedebugops",
    "addeventlistener('click', hydratedebugops",
  ]);
  const hasStorage = includesAny(source.lowerJs, [
    "localstorage.setitem",
    "localstorage.getitem",
  ]);

  [
    [hasAsyncFlow, text.interviewDebugAsync.hasAsyncFlow, text.interviewDebugAsync.missingAsyncFlow],
    [hasTryCatch, text.interviewDebugAsync.hasTryCatch, text.interviewDebugAsync.missingTryCatch],
    [hasStatusReset, text.interviewDebugAsync.hasStatusReset, text.interviewDebugAsync.missingStatusReset],
    [hasFilterFix, text.interviewDebugAsync.hasFilterFix, text.interviewDebugAsync.missingFilterFix],
    [hasRetry, text.interviewDebugAsync.hasRetry, text.interviewDebugAsync.missingRetry],
    [hasStorage, text.interviewDebugAsync.hasStorage, text.interviewDebugAsync.missingStorage],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewTypeScriptReactTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasTypes = includesAny(source.js, ["type ", "interface "]);
  const hasUnion = source.js.includes("|") && includesAny(source.js, ["\"All\"", "\"Frontend\"", "\"React\""]);
  const hasTypedState = includesAny(source.js, [
    "useState<",
    "React.useState<",
  ]);
  const hasTypedEvents = includesAny(source.js, [
    "React.FormEvent",
    "React.ChangeEvent",
  ]);
  const hasRendering =
    source.lowerJs.includes(".map(") && source.lowerJs.includes(".filter(");
  const hasForm =
    source.lowerJs.includes("<form") &&
    includesAny(source.lowerJs, ["setmessage", "note", "onsubmit"]);

  [
    [hasTypes, text.interviewTypeScript.hasTypes, text.interviewTypeScript.missingTypes],
    [hasUnion, text.interviewTypeScript.hasUnion, text.interviewTypeScript.missingUnion],
    [hasTypedState, text.interviewTypeScript.hasTypedState, text.interviewTypeScript.missingTypedState],
    [hasTypedEvents, text.interviewTypeScript.hasTypedEvents, text.interviewTypeScript.missingTypedEvents],
    [hasRendering, text.interviewTypeScript.hasRendering, text.interviewTypeScript.missingRendering],
    [hasForm, text.interviewTypeScript.hasForm, text.interviewTypeScript.missingForm],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewDebugReactTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasState = includesAny(source.js, ["useState", "React.useState"]);
  const hasDerivedFilter =
    source.lowerJs.includes(".filter(") &&
    includesAny(source.lowerJs, ["filteredresources", "query"]);
  const hasCaseInsensitive = includesAny(source.lowerJs, ["tolowercase()"]);
  const hasSavedToggle = includesAny(source.lowerJs, [
    "currentids.includes(id)",
    "item !== id",
    "...currentids",
  ]);
  const hasStorage = includesAny(source.lowerJs, [
    "json.parse",
    "json.stringify",
    "localstorage.getitem",
    "localstorage.setitem",
  ]);
  const hasEmptyState = includesAny(source.lowerJs, [
    "filteredresources.length === 0",
    "filteredresources.length===0",
  ]);

  [
    [hasState, text.interviewDebugReact.hasState, text.interviewDebugReact.missingState],
    [hasDerivedFilter, text.interviewDebugReact.hasDerivedFilter, text.interviewDebugReact.missingDerivedFilter],
    [hasCaseInsensitive, text.interviewDebugReact.hasCaseInsensitive, text.interviewDebugReact.missingCaseInsensitive],
    [hasSavedToggle, text.interviewDebugReact.hasSavedToggle, text.interviewDebugReact.missingSavedToggle],
    [hasStorage, text.interviewDebugReact.hasStorage, text.interviewDebugReact.missingStorage],
    [hasEmptyState, text.interviewDebugReact.hasEmptyState, text.interviewDebugReact.missingEmptyState],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateInterviewShippingReadinessTest(
  draft,
  language = "en"
) {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasForm =
    source.lowerJs.includes("<form") &&
    includesAny(source.lowerJs, ["input", "button", "usestate"]);
  const hasValidation = includesAny(source.lowerJs, [
    "preventdefault",
    ".trim()",
    "includes(\"@\")",
    "includes('@')",
  ]);
  const hasLoading = includesAny(source.lowerAll, [
    "loading",
    "submitting",
    "setstatus(\"loading\")",
    "setstatus('loading')",
  ]);
  const hasDisabled = includesAny(source.lowerJs, [
    "disabled={status === \"loading\"}",
    "disabled={status === 'loading'}",
    "disabled={isloading}",
  ]);
  const hasAsync = includesAny(source.lowerJs, [
    "await new promise",
    "settimeout",
    "async function",
  ]);
  const hasMessages = includesAny(source.lowerAll, [
    "success",
    "error",
    "please enter",
    "something went wrong",
    "ready to send",
  ]);

  [
    [hasForm, text.interviewShipping.hasForm, text.interviewShipping.missingForm],
    [hasValidation, text.interviewShipping.hasValidation, text.interviewShipping.missingValidation],
    [hasLoading, text.interviewShipping.hasLoading, text.interviewShipping.missingLoading],
    [hasDisabled, text.interviewShipping.hasDisabled, text.interviewShipping.missingDisabled],
    [hasAsync, text.interviewShipping.hasAsync, text.interviewShipping.missingAsync],
    [hasMessages, text.interviewShipping.hasMessages, text.interviewShipping.missingMessages],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  if (score >= 5) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= 4) {
    return createResult({
      status: "close",
      feedback: [text.close, ...feedback],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [text.needsWork, ...feedback],
  });
}

export function validateChallenge(challengeOrId, draft, language = "en") {
  const challengeId =
    typeof challengeOrId === "string" ? challengeOrId : challengeOrId?.id;
  const challenge =
    typeof challengeOrId === "string" ? { id: challengeOrId } : challengeOrId;

  const validators = {
    "styled-heading": validateStyledHeading,
    "styled-button": validateStyledButton,
    "centered-box": validateCenteredBox,
    "profile-card": validateProfileCard,
    "builder-all-in-one-practice-lab": validateBuilderPracticeLab,
    "react-all-in-one-restaurant-app": validateReactRestaurantCapstone,
    "interview-accessibility-qa-test": validateInterviewAccessibilityTest,
    "interview-debug-dom-test": validateInterviewDebugDomTest,
    "interview-debug-async-test": validateInterviewDebugAsyncTest,
    "interview-typescript-react-test": validateInterviewTypeScriptReactTest,
    "interview-debug-react-test": validateInterviewDebugReactTest,
    "interview-shipping-readiness-test":
      validateInterviewShippingReadinessTest,
  };

  const validator = validators[challengeId];

  if (!validator) return validateGenericChallenge(challenge, draft, language);

  return validator(draft, language);
}
