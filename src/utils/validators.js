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
  return (
    editorType === "react" ||
    editorType === "react-ts" ||
    editorType === "react-test"
  );
}

function createResult({ status, feedback }) {
  return {
    status,
    feedback,
  };
}

function finalizeScoreResult(score, successAt, closeAt, feedback, language = "en") {
  const text = getValidatorCopy(language);

  if (score >= successAt) {
    return createResult({
      status: "success",
      feedback: [text.excellent, ...feedback],
    });
  }

  if (score >= closeAt) {
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
    interviewAccessibleModal: {
      hasTrigger: "Good - the modal has a real open trigger and a dialog shell.",
      missingTrigger:
        "Add an open button plus a dialog shell that can appear and disappear.",
      hasAria: "Nice - dialog ARIA attributes are present.",
      missingAria:
        "Add dialog semantics such as role dialog, aria-modal, and an accessible label.",
      hasKeyboard: "Good - keyboard closing is wired in.",
      missingKeyboard:
        "Handle Escape so the modal can be closed from the keyboard.",
      hasFocus: "Nice - focus is moved intentionally when the modal opens or closes.",
      missingFocus:
        "Move focus into the modal and return it to the trigger when the modal closes.",
      hasVisibleState: "Good - the UI clearly shows when the modal is open or closed.",
      missingVisibleState:
        "Toggle the modal visibility clearly so users can tell whether it is open.",
      hasFocusStyles: "Nice - visible focus styling is included.",
      missingFocusStyles:
        "Add visible focus styles so keyboard users can track where they are.",
    },
    interviewAccessibleTabs: {
      hasStructure: "Good - the tabs use a real tablist structure.",
      missingStructure:
        "Build a real tablist with tab buttons and matching panels.",
      hasAria: "Nice - the tabs expose accessible state and relationships.",
      missingAria:
        "Add ARIA relationships such as tablist, tab, tabpanel, aria-selected, and aria-controls.",
      hasKeyboard: "Good - the tabs can be changed with the keyboard.",
      missingKeyboard:
        "Handle ArrowLeft or ArrowRight so keyboard users can move between tabs.",
      hasState: "Nice - the active tab state updates the visible panel.",
      missingState:
        "Update the active tab and visible panel together when selection changes.",
      hasFocusStyles: "Good - focus styles are visible on the tabs.",
      missingFocusStyles:
        "Add visible focus styles so the current keyboard position is clear.",
      hasPanelControl: "Nice - inactive panels are properly hidden or de-emphasized.",
      missingPanelControl:
        "Hide or clearly control the inactive panels instead of leaving every panel equally visible.",
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
    interviewDebugRouting: {
      hasRouter: "Good - the routed screen still uses router primitives.",
      missingRouter:
        "Keep a working router setup with HashRouter, Routes, and Route.",
      hasLinks: "Nice - navigation links point to valid destinations.",
      missingLinks:
        "Fix the navigation links so they match the route paths.",
      hasParams: "Good - the detail route reads URL params.",
      missingParams:
        "Use useParams to read the current route id for the detail view.",
      hasLookup: "Nice - the detail screen looks up the current item from data.",
      missingLookup:
        "Use the route param to find the correct item from the data set.",
      hasFallback: "Good - a missing item or unknown route is handled clearly.",
      missingFallback:
        "Show a clear fallback when the route does not match a known item.",
      hasRendering: "Nice - the main list still renders from data.",
      missingRendering:
        "Keep the primary list rendering with map() instead of hardcoded markup.",
    },
    interviewTestingUnit: {
      hasTestCount: "Good - there are several unit tests in place.",
      missingTestCount:
        "Write multiple focused unit tests instead of a single broad test.",
      hasExpect: "Nice - the tests use clear expectations.",
      missingExpect:
        "Use expect() assertions to show exactly what should happen.",
      hasBehaviorCoverage: "Good - the tests cover more than one behavior path.",
      missingBehaviorCoverage:
        "Cover both the normal case and at least one edge or alternate case.",
      hasSuiteStructure: "Nice - the tests are organised in a readable way.",
      missingSuiteStructure:
        "Use test() and optionally describe() so the test file reads clearly.",
    },
    interviewTestingUi: {
      hasRender: "Good - the component is rendered in the test.",
      missingRender:
        "Render the component before trying to query or interact with it.",
      hasScreenQueries: "Nice - the tests query the UI through screen.",
      missingScreenQueries:
        "Use screen queries such as getByRole or getByText to inspect the UI.",
      hasInteractions: "Good - the tests simulate user interaction.",
      missingInteractions:
        "Use fireEvent to click, type, or submit like a user would.",
      hasAssertions: "Nice - the tests check what changes on screen.",
      missingAssertions:
        "Assert what the user should see after the interaction runs.",
    },
    interviewTestingForms: {
      hasRender: "Good - the form is rendered inside the test.",
      missingRender:
        "Render the form before trying to fill it or submit it.",
      hasSubmitFlow: "Nice - the submit behavior is exercised directly.",
      missingSubmitFlow:
        "Trigger the submit flow so the validation rules actually run.",
      hasFieldCoverage: "Good - the tests cover inputs and validation feedback.",
      missingFieldCoverage:
        "Check field values or validation messages so the form behavior is clearly protected.",
      hasAssertions: "Nice - the expected result is asserted clearly.",
      missingAssertions:
        "Use expect() to show what message or state should appear.",
    },
    interviewTestingAsync: {
      hasRender: "Good - the async component is rendered in the test.",
      missingRender:
        "Render the async UI before checking loading or results.",
      hasWaitFor: "Nice - waitFor is used for delayed UI updates.",
      missingWaitFor:
        "Use waitFor so the test can wait for async UI to settle.",
      hasLoading: "Good - the loading state is covered.",
      missingLoading:
        "Check that the loading state appears before the final result.",
      hasSuccessOrError: "Nice - the final async outcome is asserted.",
      missingSuccessOrError:
        "Assert a success or error state after the async request finishes.",
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
    interviewAccessibleModal: {
      hasTrigger:
        "Bien - el modal tiene un disparador real y una estructura de dialogo.",
      missingTrigger:
        "Anade un boton para abrir y una estructura de dialogo que pueda mostrarse y ocultarse.",
      hasAria: "Bien - existen atributos ARIA de dialogo.",
      missingAria:
        "Anade semantica de dialogo como role dialog, aria-modal y un label accesible.",
      hasKeyboard: "Bien - el cierre por teclado esta conectado.",
      missingKeyboard:
        "Maneja Escape para que el modal pueda cerrarse con teclado.",
      hasFocus:
        "Bien - el foco se mueve de forma intencional al abrir o cerrar.",
      missingFocus:
        "Mueve el foco dentro del modal y devuelvelo al disparador al cerrar.",
      hasVisibleState:
        "Bien - la UI deja claro cuando el modal esta abierto o cerrado.",
      missingVisibleState:
        "Alterna la visibilidad del modal de forma clara para que se note si esta abierto.",
      hasFocusStyles: "Bien - hay estilos focus visibles.",
      missingFocusStyles:
        "Anade estilos focus visibles para que el usuario de teclado se ubique.",
    },
    interviewAccessibleTabs: {
      hasStructure:
        "Bien - las tabs usan una estructura real de tablist.",
      missingStructure:
        "Construye un tablist real con botones tab y paneles asociados.",
      hasAria:
        "Bien - las tabs exponen estado y relaciones accesibles.",
      missingAria:
        "Anade relaciones ARIA como tablist, tab, tabpanel, aria-selected y aria-controls.",
      hasKeyboard:
        "Bien - las tabs pueden cambiarse con teclado.",
      missingKeyboard:
        "Maneja ArrowLeft o ArrowRight para mover tabs con teclado.",
      hasState:
        "Bien - el estado activo actualiza el panel visible.",
      missingState:
        "Actualiza tab activa y panel visible juntos cuando cambie la seleccion.",
      hasFocusStyles:
        "Bien - las tabs tienen estilos focus visibles.",
      missingFocusStyles:
        "Anade estilos focus visibles para que el punto actual del teclado se vea claro.",
      hasPanelControl:
        "Bien - los paneles inactivos se controlan u ocultan correctamente.",
      missingPanelControl:
        "Oculta o controla mejor los paneles inactivos en lugar de dejar todos igual de visibles.",
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
    interviewDebugRouting: {
      hasRouter:
        "Bien - la pantalla mantiene primitivas de routing.",
      missingRouter:
        "Mantén una configuracion de router que funcione con HashRouter, Routes y Route.",
      hasLinks:
        "Bien - los links de navegacion apuntan a destinos validos.",
      missingLinks:
        "Arregla los links para que coincidan con las rutas reales.",
      hasParams:
        "Bien - la ruta de detalle lee parametros de URL.",
      missingParams:
        "Usa useParams para leer el id actual de la ruta de detalle.",
      hasLookup:
        "Bien - la pantalla de detalle busca el item correcto en los datos.",
      missingLookup:
        "Usa el parametro de ruta para encontrar el item correcto en el array.",
      hasFallback:
        "Bien - un item faltante o una ruta desconocida se manejan con claridad.",
      missingFallback:
        "Muestra un fallback claro cuando la ruta no coincide con un item conocido.",
      hasRendering:
        "Bien - la lista principal sigue renderizando desde datos.",
      missingRendering:
        "Mantén el render principal con map() en lugar de marcarlo todo a mano.",
    },
    interviewTestingUnit: {
      hasTestCount: "Bien - hay varios unit tests escritos.",
      missingTestCount:
        "Escribe varios tests enfocados en lugar de un solo test muy amplio.",
      hasExpect: "Bien - los tests usan expect() con claridad.",
      missingExpect:
        "Usa expect() para dejar claro que deberia pasar.",
      hasBehaviorCoverage:
        "Bien - los tests cubren mas de un camino de comportamiento.",
      missingBehaviorCoverage:
        "Cubre el caso normal y al menos un caso alternativo o borde.",
      hasSuiteStructure:
        "Bien - los tests estan organizados de forma legible.",
      missingSuiteStructure:
        "Usa test() y opcionalmente describe() para que el archivo se lea con claridad.",
    },
    interviewTestingUi: {
      hasRender:
        "Bien - el componente se renderiza dentro del test.",
      missingRender:
        "Renderiza el componente antes de intentar consultarlo o interactuar con el.",
      hasScreenQueries:
        "Bien - los tests consultan la UI a traves de screen.",
      missingScreenQueries:
        "Usa queries de screen como getByRole o getByText para inspeccionar la UI.",
      hasInteractions:
        "Bien - los tests simulan interacciones de la persona usuaria.",
      missingInteractions:
        "Usa fireEvent para hacer click, escribir o enviar como haria alguien real.",
      hasAssertions:
        "Bien - los tests comprueban que cambia en pantalla.",
      missingAssertions:
        "Haz asserts sobre lo que la persona usuaria deberia ver tras la interaccion.",
    },
    interviewTestingForms: {
      hasRender:
        "Bien - el formulario se renderiza dentro del test.",
      missingRender:
        "Renderiza el formulario antes de completarlo o enviarlo.",
      hasSubmitFlow:
        "Bien - el flujo de submit se prueba de forma directa.",
      missingSubmitFlow:
        "Activa el submit para que las reglas de validacion se ejecuten de verdad.",
      hasFieldCoverage:
        "Bien - los tests cubren inputs y feedback de validacion.",
      missingFieldCoverage:
        "Comprueba valores de campos o mensajes de validacion para proteger el comportamiento del formulario.",
      hasAssertions:
        "Bien - el resultado esperado esta comprobado con claridad.",
      missingAssertions:
        "Usa expect() para dejar claro que mensaje o estado deberia aparecer.",
    },
    interviewTestingAsync: {
      hasRender:
        "Bien - el componente asincrono se renderiza en el test.",
      missingRender:
        "Renderiza la UI asincrona antes de revisar carga o resultados.",
      hasWaitFor:
        "Bien - se usa waitFor para actualizaciones retrasadas.",
      missingWaitFor:
        "Usa waitFor para que el test espere a que la UI asincrona termine de actualizarse.",
      hasLoading:
        "Bien - el estado de carga esta cubierto.",
      missingLoading:
        "Comprueba que el estado de carga aparece antes del resultado final.",
      hasSuccessOrError:
        "Bien - el resultado final asincrono esta comprobado.",
      missingSuccessOrError:
        "Haz un assert sobre un estado final de exito o de error.",
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

function countTags(html, tags) {
  const lowerHtml = html.toLowerCase();

  return tags.reduce((total, tag) => {
    const matches = lowerHtml.match(new RegExp(`<${tag}\\b`, "g"));
    return total + (matches ? matches.length : 0);
  }, 0);
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

function hasGridColumns(source) {
  return source.lowerCss.includes("grid-template-columns");
}

function hasResponsiveGridColumns(source) {
  return (
    hasGridColumns(source) &&
    source.lowerCss.includes("repeat(") &&
    source.lowerCss.includes("minmax(") &&
    (source.lowerCss.includes("auto-fit") ||
      source.lowerCss.includes("auto-fill"))
  );
}

function hasThreeEqualGridColumns(source) {
  return (
    /grid-template-columns\s*:\s*repeat\s*\(\s*3\s*,\s*minmax\s*\(\s*0\s*,\s*1fr\s*\)\s*\)/i.test(
      source.css
    ) ||
    /grid-template-columns\s*:\s*repeat\s*\(\s*3\s*,\s*1fr\s*\)/i.test(
      source.css
    ) ||
    /grid-template-columns\s*:\s*1fr\s+1fr\s+1fr/i.test(source.css) ||
    /grid-template-columns\s*:\s*(minmax\s*\(\s*0\s*,\s*1fr\s*\)\s*){3}/i.test(
      source.css
    )
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

export function validateCssGridGallery(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const itemCount = countTags(source.html, [
    "div",
    "article",
    "figure",
    "section",
  ]);

  const checks = [
    [
      itemCount >= 7,
      isSpanish
        ? "Bien - la galeria tiene un contenedor y seis piezas visibles."
        : "Good - the gallery has a parent container and six visible items.",
      isSpanish
        ? "Crea un contenedor de galeria con exactamente seis piezas dentro."
        : "Create a gallery parent with exactly six items inside it.",
    ],
    [
      source.compactCss.includes("display:grid"),
      isSpanish
        ? "Bien - el contenedor usa display: grid."
        : "Good - the parent layout uses display: grid.",
      isSpanish
        ? "Usa display: grid en el contenedor de la galeria."
        : "Use display: grid on the gallery parent.",
    ],
    [
      hasResponsiveGridColumns(source),
      isSpanish
        ? "Perfecto - grid-template-columns usa repeat(), auto-fit/auto-fill y minmax()."
        : "Nice - grid-template-columns uses repeat(), auto-fit/auto-fill, and minmax().",
      isSpanish
        ? "Usa grid-template-columns con repeat(auto-fit, minmax(...))."
        : "Use grid-template-columns with repeat(auto-fit, minmax(...)).",
    ],
    [
      source.compactCss.includes("gap:"),
      isSpanish ? "Bien - el gap separa las piezas del grid." : "Good - gap separates the grid items.",
      isSpanish ? "Anade gap al contenedor grid." : "Add gap to the grid parent.",
    ],
    [
      source.compactCss.includes("min-height:") ||
        source.compactCss.includes("height:"),
      isSpanish
        ? "Bien - las piezas tienen una altura consistente."
        : "Good - the items have a consistent height.",
      isSpanish
        ? "Da a las piezas una altura o min-height consistente."
        : "Give the items a consistent height or min-height.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateGridFeatureBoard(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const articleCount = countTags(source.html, ["article"]);

  const checks = [
    [
      articleCount === 3,
      isSpanish ? "Bien - hay exactamente tres tarjetas." : "Good - there are exactly three cards.",
      isSpanish ? "Crea exactamente tres tarjetas." : "Create exactly three cards.",
    ],
    [
      source.compactCss.includes("display:grid"),
      isSpanish ? "Bien - el contenedor usa Grid." : "Good - the parent uses Grid.",
      isSpanish ? "Usa display: grid en el padre." : "Use display: grid on the parent.",
    ],
    [
      hasThreeEqualGridColumns(source),
      isSpanish
        ? "Bien - las columnas crean tres espacios iguales."
        : "Good - the columns create three equal spaces.",
      isSpanish
        ? "Usa grid-template-columns para crear tres columnas iguales."
        : "Use grid-template-columns to create three equal columns.",
    ],
    [
      source.compactCss.includes("gap:"),
      isSpanish ? "Bien - el grid usa gap." : "Good - the grid uses gap.",
      isSpanish ? "Anade gap al grid." : "Add gap to the grid.",
    ],
    [
      source.compactCss.includes("padding:") &&
        (source.compactCss.includes("background:") ||
          source.compactCss.includes("background-color:")),
      isSpanish
        ? "Bien - las tarjetas tienen padding y fondo."
        : "Good - the cards have padding and a background.",
      isSpanish
        ? "Da padding y fondo a las tarjetas."
        : "Give the cards padding and a background.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateResponsiveCardGrid(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const articleCount = countTags(source.html, ["article"]);

  const checks = [
    [
      articleCount === 3,
      isSpanish ? "Bien - hay exactamente tres tarjetas." : "Good - there are exactly three cards.",
      isSpanish ? "Crea exactamente tres tarjetas article." : "Create exactly three article cards.",
    ],
    [
      source.compactCss.includes("display:grid"),
      isSpanish ? "Bien - el layout principal usa Grid." : "Good - the main layout uses Grid.",
      isSpanish
        ? "Usa display: grid en el contenedor card-grid."
        : "Use display: grid on the card-grid parent.",
    ],
    [
      hasResponsiveGridColumns(source),
      isSpanish
        ? "Bien - las columnas son responsive con repeat(), auto-fit/auto-fill y minmax()."
        : "Good - the columns are responsive with repeat(), auto-fit/auto-fill, and minmax().",
      isSpanish
        ? "Usa grid-template-columns con repeat(auto-fit, minmax(...))."
        : "Use grid-template-columns with repeat(auto-fit, minmax(...)).",
    ],
    [
      countTags(source.html, ["h2", "h3", "h4"]) >= 3 &&
        countTags(source.html, ["p"]) >= 3 &&
        countTags(source.html, ["a"]) >= 3,
      isSpanish
        ? "Bien - cada tarjeta tiene titulo, texto y link."
        : "Good - the cards include titles, text, and links.",
      isSpanish
        ? "Cada tarjeta debe incluir titulo, texto y link."
        : "Each card should include a title, text, and link.",
    ],
    [
      source.compactCss.includes("gap:") &&
        source.compactCss.includes("padding:"),
      isSpanish
        ? "Bien - el grid y las tarjetas tienen espaciado."
        : "Good - the grid and cards include spacing.",
      isSpanish
        ? "Anade gap al grid y padding a las tarjetas."
        : "Add gap to the grid and padding to the cards.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateDashboardStatsLayout(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const articleCount = countTags(source.html, ["article"]);

  const checks = [
    [
      articleCount === 3,
      isSpanish
        ? "Bien - hay exactamente tres tarjetas de metricas."
        : "Good - there are exactly three stat cards.",
      isSpanish
        ? "Crea exactamente tres tarjetas de metricas."
        : "Create exactly three stat cards.",
    ],
    [
      countTags(source.html, ["span", "p"]) >= 3 &&
        countTags(source.html, ["strong", "b"]) >= 3,
      isSpanish
        ? "Bien - cada tarjeta tiene etiqueta y numero destacado."
        : "Good - each card has a label and prominent number.",
      isSpanish
        ? "Cada tarjeta necesita una etiqueta y un numero destacado."
        : "Each card needs a label and a prominent number.",
    ],
    [
      source.compactCss.includes("display:grid"),
      isSpanish ? "Bien - el contenedor usa display: grid." : "Good - the parent uses display: grid.",
      isSpanish ? "Usa display: grid en .stats-grid." : "Use display: grid on .stats-grid.",
    ],
    [
      hasThreeEqualGridColumns(source),
      isSpanish
        ? "Perfecto - grid-template-columns crea tres columnas iguales."
        : "Nice - grid-template-columns creates three equal columns.",
      isSpanish
        ? "Usa grid-template-columns para crear tres columnas iguales."
        : "Use grid-template-columns to create three equal columns.",
    ],
    [
      source.lowerCss.includes("@media") &&
        /grid-template-columns\s*:\s*1fr/i.test(source.css),
      isSpanish
        ? "Bien - el grid se apila en pantallas pequenas."
        : "Good - the grid stacks on small screens.",
      isSpanish
        ? "Anade una media query que cambie el grid a una columna."
        : "Add a media query that changes the grid to one column.",
    ],
    [
      source.compactCss.includes("gap:") &&
        source.compactCss.includes("padding:"),
      isSpanish
        ? "Bien - las tarjetas tienen espacio consistente."
        : "Good - the cards have consistent spacing.",
      isSpanish
        ? "Anade gap al grid y padding a las tarjetas."
        : "Add gap to the grid and padding to the cards.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 6, 5, feedback, language);
}

export function validateMediaQueryStackLayout(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;

  const checks = [
    [
      countTags(source.html, ["div", "section", "article"]) >= 3,
      isSpanish ? "Bien - hay un padre y dos areas de contenido." : "Good - there is a parent and two content areas.",
      isSpanish ? "Crea un contenedor con dos areas de contenido." : "Create a container with two content areas.",
    ],
    [
      source.compactCss.includes("display:flex"),
      isSpanish ? "Bien - el layout grande usa flexbox." : "Good - the large layout uses flexbox.",
      isSpanish ? "Usa display: flex para el layout de escritorio." : "Use display: flex for the desktop layout.",
    ],
    [
      source.compactCss.includes("gap:") &&
        source.compactCss.includes("padding:"),
      isSpanish ? "Bien - hay gap y padding." : "Good - gap and padding are present.",
      isSpanish ? "Anade gap y padding." : "Add gap and padding.",
    ],
    [
      source.lowerCss.includes("@media") &&
        source.lowerCss.includes("max-width"),
      isSpanish ? "Bien - hay una media query con max-width." : "Good - there is a max-width media query.",
      isSpanish ? "Anade @media con max-width." : "Add an @media rule with max-width.",
    ],
    [
      source.compactCss.includes("flex-direction:column"),
      isSpanish ? "Bien - el layout se apila en movil." : "Good - the layout stacks on mobile.",
      isSpanish ? "Cambia flex-direction a column en movil." : "Change flex-direction to column on mobile.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateFluidContainerShell(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;

  const checks = [
    [
      hasTag(source.html, ["main", "section", "div"]),
      isSpanish ? "Bien - existe un contenedor principal." : "Good - there is a main container.",
      isSpanish ? "Crea un contenedor principal." : "Create one main container.",
    ],
    [
      /width\s*:\s*90%/i.test(source.css),
      isSpanish ? "Bien - el contenedor usa width: 90%." : "Good - the container uses width: 90%.",
      isSpanish ? "Usa width: 90% en el contenedor." : "Use width: 90% on the container.",
    ],
    [
      source.lowerCss.includes("max-width"),
      isSpanish ? "Bien - max-width controla el ancho grande." : "Good - max-width controls the large-screen width.",
      isSpanish ? "Anade max-width al contenedor." : "Add max-width to the container.",
    ],
    [
      source.compactCss.includes("margin:0auto"),
      isSpanish ? "Bien - margin: 0 auto centra el contenedor." : "Good - margin: 0 auto centers the container.",
      isSpanish ? "Centra el contenedor con margin: 0 auto." : "Center the container with margin: 0 auto.",
    ],
    [
      source.compactCss.includes("padding:"),
      isSpanish ? "Bien - hay espacio interior o vertical." : "Good - spacing is present.",
      isSpanish ? "Anade padding o espacio de seccion." : "Add padding or section spacing.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validatePolishedPricingCard(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;

  const checks = [
    [
      countTags(source.html, ["article", "section", "div"]) >= 1 &&
        hasTag(source.html, ["button", "a"]),
      isSpanish ? "Bien - hay una tarjeta con accion." : "Good - there is a card with an action.",
      isSpanish ? "Crea una tarjeta de precio con boton o link." : "Create a pricing card with a button or link.",
    ],
    [
      source.compactCss.includes("border-radius:") &&
        source.lowerCss.includes("box-shadow"),
      isSpanish ? "Bien - radius y shadow dan pulido." : "Good - radius and shadow add polish.",
      isSpanish ? "Anade border-radius y box-shadow." : "Add border-radius and box-shadow.",
    ],
    [
      source.lowerCss.includes(":hover"),
      isSpanish ? "Bien - la tarjeta tiene hover." : "Good - the card has a hover state.",
      isSpanish ? "Anade un estado :hover." : "Add a :hover state.",
    ],
    [
      source.lowerCss.includes("transition") &&
        source.lowerCss.includes("transform"),
      isSpanish ? "Bien - transition y transform suavizan el movimiento." : "Good - transition and transform smooth the movement.",
      isSpanish ? "Usa transition y transform." : "Use transition and transform.",
    ],
    [
      source.lowerCss.includes(":focus") &&
        source.lowerCss.includes("outline"),
      isSpanish ? "Bien - hay focus visible." : "Good - there is a visible focus state.",
      isSpanish ? "Anade un focus visible con outline." : "Add a visible focus state with outline.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateGradientHeroCallout(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;

  const checks = [
    [
      hasTag(source.html, ["section", "article", "div"]),
      isSpanish ? "Bien - hay un wrapper para el callout." : "Good - there is a callout wrapper.",
      isSpanish ? "Crea un wrapper para el callout." : "Create a wrapper for the callout.",
    ],
    [
      countTags(source.html, ["h1", "h2", "h3"]) >= 1 &&
        countTags(source.html, ["p"]) >= 1,
      isSpanish ? "Bien - hay titulo y texto." : "Good - there is a heading and supporting text.",
      isSpanish ? "Anade titulo y parrafo." : "Add a heading and paragraph.",
    ],
    [
      hasTag(source.html, ["button", "a"]),
      isSpanish ? "Bien - hay una accion." : "Good - there is an action.",
      isSpanish ? "Anade un boton o link." : "Add a button or link.",
    ],
    [
      source.lowerCss.includes("linear-gradient"),
      isSpanish ? "Bien - el wrapper usa linear-gradient." : "Good - the wrapper uses linear-gradient.",
      isSpanish ? "Usa linear-gradient en el fondo." : "Use linear-gradient in the background.",
    ],
    [
      source.compactCss.includes("padding:") &&
        source.compactCss.includes("border-radius:"),
      isSpanish ? "Bien - padding y radius enmarcan el callout." : "Good - padding and radius frame the callout.",
      isSpanish ? "Anade padding y border-radius." : "Add padding and border-radius.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateResponsiveFeatureStrip(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const articleCount = countTags(source.html, ["article"]);

  const checks = [
    [
      articleCount === 3,
      isSpanish ? "Bien - hay exactamente tres features." : "Good - there are exactly three feature cards.",
      isSpanish ? "Crea exactamente tres tarjetas feature." : "Create exactly three feature cards.",
    ],
    [
      countTags(source.html, ["h2", "h3", "h4"]) >= 3 &&
        countTags(source.html, ["p"]) >= 3,
      isSpanish ? "Bien - cada feature tiene titulo y descripcion." : "Good - each feature has a heading and description.",
      isSpanish ? "Cada feature necesita titulo y descripcion." : "Each feature needs a heading and description.",
    ],
    [
      source.compactCss.includes("display:grid"),
      isSpanish ? "Bien - el strip usa Grid." : "Good - the strip uses Grid.",
      isSpanish ? "Usa display: grid en el padre." : "Use display: grid on the parent.",
    ],
    [
      hasResponsiveGridColumns(source),
      isSpanish ? "Bien - las columnas son responsive." : "Good - the columns are responsive.",
      isSpanish ? "Usa repeat(auto-fit, minmax(...))." : "Use repeat(auto-fit, minmax(...)).",
    ],
    [
      source.compactCss.includes("gap:") &&
        source.compactCss.includes("padding:"),
      isSpanish ? "Bien - hay spacing consistente." : "Good - spacing is consistent.",
      isSpanish ? "Anade gap y padding." : "Add gap and padding.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validatePortfolioSectionCapstone(draft, language = "en") {
  const source = getSource(draft);
  const isSpanish = language === "es";
  const feedback = [];
  let score = 0;
  const articleCount = countTags(source.html, ["article"]);

  const checks = [
    [
      hasTag(source.html, ["section"]) &&
        countTags(source.html, ["h1", "h2", "h3"]) >= 4,
      isSpanish ? "Bien - la seccion tiene cabecera y titulos de proyecto." : "Good - the section has a heading and project titles.",
      isSpanish ? "Crea una seccion con cabecera y titulos de proyecto." : "Create a section with a heading and project titles.",
    ],
    [
      articleCount === 3,
      isSpanish ? "Bien - hay exactamente tres proyectos." : "Good - there are exactly three projects.",
      isSpanish ? "Crea exactamente tres tarjetas de proyecto." : "Create exactly three project cards.",
    ],
    [
      countTags(source.html, ["p"]) >= 4 &&
        countTags(source.html, ["a"]) >= 3 &&
        countTags(source.html, ["span"]) >= 6,
      isSpanish ? "Bien - los proyectos tienen descripcion, tags y links." : "Good - projects include descriptions, tags, and links.",
      isSpanish ? "Cada proyecto necesita descripcion, tags y link." : "Each project needs a description, tags, and a link.",
    ],
    [
      source.compactCss.includes("display:grid") &&
        hasResponsiveGridColumns(source),
      isSpanish ? "Bien - las tarjetas usan Grid responsive." : "Good - the cards use responsive Grid.",
      isSpanish ? "Usa Grid responsive para las tarjetas." : "Use responsive Grid for the cards.",
    ],
    [
      source.compactCss.includes("padding:") &&
        (source.lowerCss.includes("box-shadow") ||
          source.compactCss.includes("border-radius:")),
      isSpanish ? "Bien - la seccion tiene pulido visual." : "Good - the section has visual polish.",
      isSpanish ? "Anade padding y pulido como shadow o radius." : "Add padding and polish such as shadow or radius.",
    ],
  ];

  checks.forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateDebugBrokenProfileCardCss(draft, language = "en") {
  const source = getSource(draft);
  const copy =
    language === "es"
      ? {
          hasCenter: "Bien - la tarjeta vuelve a estar centrada en la pagina.",
          missingCenter:
            "Centra la tarjeta en la pagina con un layout real, por ejemplo flex o grid.",
          hasPadding: "Perfecto - ya hay espacio interior suficiente en la tarjeta.",
          missingPadding: "Anade padding dentro de la tarjeta para que respire.",
          hasReadableColors:
            "Bien - los colores ahora permiten leer el contenido con claridad.",
          missingReadableColors:
            "Revisa fondo y color de texto para que la tarjeta sea legible.",
          hasRadius: "Bien - las esquinas redondeadas vuelven a dar forma al bloque.",
          missingRadius: "Anade border-radius para que la tarjeta no se vea rota.",
          hasPolish: "Buen toque - la tarjeta ya tiene un detalle de acabado visual.",
          missingPolish:
            "Anade un toque final, por ejemplo box-shadow o un borde limpio.",
        }
      : {
          hasCenter: "Good - the card is centered on the page again.",
          missingCenter:
            "Center the card on the page with a real layout rule such as flex or grid.",
          hasPadding: "Nice - the card now has enough inner spacing.",
          missingPadding: "Add padding inside the card so the content can breathe.",
          hasReadableColors:
            "Good - the colors now make the content readable.",
          missingReadableColors:
            "Review the background and text color so the card is easy to read.",
          hasRadius: "Nice - rounded corners are back in place.",
          missingRadius: "Add border-radius so the card stops looking broken.",
          hasPolish: "Nice touch - the card includes a finishing detail now.",
          missingPolish:
            "Add one finishing detail such as box-shadow or a clean border.",
        };

  const feedback = [];
  let score = 0;

  const hasCenter =
    hasCentering(source) &&
    (source.compactCss.includes("display:flex") ||
      source.compactCss.includes("display:grid"));
  const hasPadding = source.compactCss.includes("padding:");
  const hasReadableColors =
    hasCssDeclaration(source, [
      "background:white",
      "background:#fff",
      "background:#ffffff",
      "background:#f8fafc",
    ]) &&
    hasCssDeclaration(source, [
      "color:#0f172a",
      "color:#111827",
      "color:#1e293b",
      "color:black",
    ]);
  const hasRadius = source.compactCss.includes("border-radius:");
  const hasPolish =
    source.lowerCss.includes("box-shadow") || source.lowerCss.includes("border:");

  [
    [hasCenter, copy.hasCenter, copy.missingCenter],
    [hasPadding, copy.hasPadding, copy.missingPadding],
    [hasReadableColors, copy.hasReadableColors, copy.missingReadableColors],
    [hasRadius, copy.hasRadius, copy.missingRadius],
    [hasPolish, copy.hasPolish, copy.missingPolish],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 3, feedback, language);
}

export function validateDebugBrokenNavbarLayout(draft, language = "en") {
  const source = getSource(draft);
  const copy =
    language === "es"
      ? {
          hasNavFlex:
            "Bien - la navbar ya usa un layout real para separar logo y links.",
          missingNavFlex:
            "Convierte la navbar en un contenedor de layout real para separar izquierda y derecha.",
          hasAlignment:
            "Perfecto - la alineacion horizontal de la barra ya se siente estable.",
          missingAlignment:
            "Revisa justify-content y align-items para que la barra quede bien alineada.",
          hasLinksRow:
            "Bien - los links ya se muestran en una fila en lugar de una lista rota.",
          missingLinksRow:
            "Haz que los links se muestren en una fila con flexbox y algo de gap.",
          hasListReset: "Bien - la lista ya no enseña bullets ni sangria rara.",
          missingListReset:
            "Quita bullets y padding por defecto de la lista de navegacion.",
          hasSurface:
            "Buen trabajo - la navbar ya tiene espaciado y una superficie visible.",
          missingSurface:
            "Anade padding y una superficie clara u oscura para que la navbar se vea terminada.",
        }
      : {
          hasNavFlex:
            "Good - the navbar now uses a real layout system to split logo and links.",
          missingNavFlex:
            "Turn the navbar into a real layout container so left and right can separate properly.",
          hasAlignment:
            "Nice - the horizontal alignment now feels stable.",
          missingAlignment:
            "Review justify-content and align-items so the bar lines up correctly.",
          hasLinksRow:
            "Good - the links now sit in one row instead of a broken list.",
          missingLinksRow:
            "Make the links sit in one row with flexbox and some gap.",
          hasListReset:
            "Nice - the list no longer shows bullets or odd indentation.",
          missingListReset:
            "Remove the default list bullets and padding from the nav list.",
          hasSurface:
            "Nice work - the navbar now has spacing and a visible surface.",
          missingSurface:
            "Add padding and a clear background or surface so the navbar feels finished.",
        };

  const feedback = [];
  let score = 0;

  const hasNavFlex = source.compactCss.includes("display:flex");
  const hasAlignment =
    source.compactCss.includes("justify-content:space-between") &&
    source.compactCss.includes("align-items:center");
  const hasLinksRow =
    countMatches(source.css, /display\s*:\s*flex/gi) >= 2 &&
    source.compactCss.includes("gap:");
  const hasListReset =
    source.lowerCss.includes("list-style: none") ||
    source.lowerCss.includes("list-style:none");
  const hasSurface =
    source.compactCss.includes("padding:") &&
    (source.lowerCss.includes("background:") ||
      source.lowerCss.includes("background-color:"));

  [
    [hasNavFlex, copy.hasNavFlex, copy.missingNavFlex],
    [hasAlignment, copy.hasAlignment, copy.missingAlignment],
    [hasLinksRow, copy.hasLinksRow, copy.missingLinksRow],
    [hasListReset, copy.hasListReset, copy.missingListReset],
    [hasSurface, copy.hasSurface, copy.missingSurface],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 3, feedback, language);
}

export function validateDebugBrokenResponsiveGrid(draft, language = "en") {
  const source = getSource(draft);
  const copy =
    language === "es"
      ? {
          hasGrid: "Bien - el layout ya usa Grid de verdad.",
          missingGrid: "Convierte la seccion en un layout Grid real.",
          hasColumns:
            "Perfecto - las columnas ya se definen con una regla de grid clara.",
          missingColumns:
            "Define columnas de grid claras en lugar de dejar que todo caiga en bloque.",
          hasResponsive:
            "Bien - la solucion ya piensa en pantallas pequenas.",
          missingResponsive:
            "Haz que el layout sea responsive con minmax, auto-fit o una media query.",
          hasGap: "Bien - las tarjetas ya tienen aire entre ellas.",
          missingGap: "Anade gap para separar visualmente las tarjetas.",
          hasCardSpacing:
            "Buen trabajo - las tarjetas recuperaron espacio interior y forma.",
          missingCardSpacing:
            "Revisa padding y border-radius en las tarjetas para que no se vean rotas.",
        }
      : {
          hasGrid: "Good - the layout now uses real Grid.",
          missingGrid: "Turn the section into a real Grid layout.",
          hasColumns:
            "Nice - the columns are defined with a clear grid rule now.",
          missingColumns:
            "Define clear grid columns instead of leaving the layout as a block flow.",
          hasResponsive:
            "Good - the solution now thinks about smaller screens.",
          missingResponsive:
            "Make the layout responsive with minmax, auto-fit, or a media query.",
          hasGap: "Nice - the cards now have space between them.",
          missingGap: "Add gap so the cards separate visually.",
          hasCardSpacing:
            "Good work - the cards regained inner space and shape.",
          missingCardSpacing:
            "Review padding and border-radius on the cards so they stop looking broken.",
        };

  const feedback = [];
  let score = 0;

  const hasGrid = source.compactCss.includes("display:grid");
  const hasColumns = source.lowerCss.includes("grid-template-columns");
  const hasResponsive =
    source.lowerCss.includes("minmax(") ||
    source.lowerCss.includes("auto-fit") ||
    source.lowerCss.includes("@media");
  const hasGap = source.compactCss.includes("gap:");
  const hasCardSpacing =
    source.compactCss.includes("padding:") &&
    source.compactCss.includes("border-radius:");

  [
    [hasGrid, copy.hasGrid, copy.missingGrid],
    [hasColumns, copy.hasColumns, copy.missingColumns],
    [hasResponsive, copy.hasResponsive, copy.missingResponsive],
    [hasGap, copy.hasGap, copy.missingGap],
    [hasCardSpacing, copy.hasCardSpacing, copy.missingCardSpacing],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 3, feedback, language);
}

export function validateCopyMockPricingSection(draft, language = "en") {
  const source = getSource(draft);
  const copy =
    language === "es"
      ? {
          hasIntro:
            "Bien - la seccion tiene cabecera y texto de apoyo como en un brief real.",
          missingIntro:
            "Anade una cabecera de seccion con titulo y texto de apoyo.",
          hasCards: "Perfecto - ya hay tres tarjetas de precios visibles.",
          missingCards: "Crea tres tarjetas de precios para comparar planes.",
          hasActions:
            "Bien - cada tarjeta ya incluye una accion clara para el usuario.",
          missingActions:
            "Asegurate de que cada tarjeta tenga un boton o llamada a la accion.",
          hasFeatured:
            "Bien - una de las tarjetas se diferencia como plan destacado.",
          missingFeatured:
            "Haz que una tarjeta se vea destacada con una clase o estilo especial.",
          hasResponsive:
            "Buen trabajo - la fila de tarjetas ya se adapta a pantallas pequenas.",
          missingResponsive:
            "Haz que la fila de tarjetas sea responsive con grid, minmax o media queries.",
          hasPolish:
            "Bien - la seccion ya transmite ese punto de pulido que suelen mirar en entrevistas.",
          missingPolish:
            "Anade pulido visual con radius, shadow, espaciado o una jerarquia mas clara.",
        }
      : {
          hasIntro:
            "Good - the section includes a heading and supporting copy like a real brief.",
          missingIntro:
            "Add a section header with a title and short supporting paragraph.",
          hasCards: "Nice - there are three visible pricing cards now.",
          missingCards: "Create three pricing cards so the plans can be compared.",
          hasActions:
            "Good - each card includes a clear action for the user.",
          missingActions:
            "Make sure each card has a button or clear call to action.",
          hasFeatured:
            "Nice - one of the cards is visually featured.",
          missingFeatured:
            "Make one card stand out with a featured class or a clearly different style.",
          hasResponsive:
            "Good work - the card row now adapts to smaller screens.",
          missingResponsive:
            "Make the card row responsive with grid, minmax, or media queries.",
          hasPolish:
            "Nice - the section now has the level of polish these interview tasks often test.",
          missingPolish:
            "Add polish with radius, shadow, spacing, or clearer hierarchy.",
        };

  const feedback = [];
  let score = 0;

  const hasIntro = hasTag(source.html, ["h1", "h2", "h3"]) && hasTag(source.html, ["p"]);
  const hasCards = countMatches(source.html, /<article\b/gi) >= 3;
  const hasActions =
    countMatches(source.html, /<button\b/gi) >= 3 ||
    countMatches(source.html, /<a\b/gi) >= 3;
  const hasFeatured = includesAny(source.lowerAll, [
    "featured",
    "popular",
    "highlight",
    ":nth-child(2)",
  ]);
  const hasResponsive =
    source.lowerCss.includes("minmax(") ||
    source.lowerCss.includes("auto-fit") ||
    source.lowerCss.includes("@media");
  const hasPolish =
    source.lowerCss.includes("box-shadow") &&
    source.lowerCss.includes("border-radius");

  [
    [hasIntro, copy.hasIntro, copy.missingIntro],
    [hasCards, copy.hasCards, copy.missingCards],
    [hasActions, copy.hasActions, copy.missingActions],
    [hasFeatured, copy.hasFeatured, copy.missingFeatured],
    [hasResponsive, copy.hasResponsive, copy.missingResponsive],
    [hasPolish, copy.hasPolish, copy.missingPolish],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateCopyMockDashboardOverview(draft, language = "en") {
  const source = getSource(draft);
  const copy =
    language === "es"
      ? {
          hasSidebar:
            "Bien - el layout ya incluye una sidebar o columna de navegacion.",
          missingSidebar:
            "Anade una sidebar o columna lateral para que el dashboard tenga una estructura real.",
          hasHeader:
            "Perfecto - el area principal ya tiene una cabecera clara.",
          missingHeader:
            "Anade una cabecera superior al area principal del dashboard.",
          hasStats:
            "Bien - ya hay cuatro tarjetas de metricas para escanear el estado general.",
          missingStats:
            "Crea cuatro tarjetas de estadisticas o metricas.",
          hasActivity:
            "Bien - hay un panel de actividad o actualizaciones dentro del dashboard.",
          missingActivity:
            "Anade un panel de actividad reciente, updates o una zona de contenido secundario.",
          hasLayout:
            "Buen trabajo - la estructura principal del dashboard ya usa layout real.",
          missingLayout:
            "Usa grid o flex para construir la estructura principal del dashboard.",
          hasResponsive:
            "Bien - el dashboard ya piensa en pantallas pequenas.",
          missingResponsive:
            "Haz que el dashboard se adapte a pantallas pequenas con media query o columnas fluidas.",
        }
      : {
          hasSidebar:
            "Good - the layout includes a sidebar or navigation column now.",
          missingSidebar:
            "Add a sidebar or side navigation column so the dashboard has real structure.",
          hasHeader:
            "Nice - the main area includes a clear top header now.",
          missingHeader:
            "Add a top header area to the main dashboard content.",
          hasStats:
            "Good - there are four stat cards to scan the overview.",
          missingStats:
            "Create four stat cards or metric panels for the overview.",
          hasActivity:
            "Nice - the dashboard includes an activity or updates panel.",
          missingActivity:
            "Add a recent activity, updates, or secondary content panel.",
          hasLayout:
            "Good work - the dashboard uses a real layout system now.",
          missingLayout:
            "Use grid or flex to build the main dashboard shell.",
          hasResponsive:
            "Nice - the dashboard now thinks about smaller screens.",
          missingResponsive:
            "Make the dashboard adapt on smaller screens with a media query or fluid columns.",
        };

  const feedback = [];
  let score = 0;

  const hasSidebar =
    hasTag(source.html, ["aside", "nav"]) || includesAny(source.lowerHtml, ["sidebar"]);
  const hasHeader =
    hasTag(source.html, ["header"]) || includesAny(source.lowerHtml, ["topbar"]);
  const hasStats = countMatches(source.html, /<article\b/gi) >= 4;
  const hasActivity = includesAny(source.lowerHtml, [
    "activity",
    "updates",
    "recent",
    "<ul",
    "<table",
  ]);
  const hasLayout =
    source.compactCss.includes("display:grid") ||
    source.compactCss.includes("display:flex");
  const hasResponsive =
    source.lowerCss.includes("@media") || source.lowerCss.includes("minmax(");

  [
    [hasSidebar, copy.hasSidebar, copy.missingSidebar],
    [hasHeader, copy.hasHeader, copy.missingHeader],
    [hasStats, copy.hasStats, copy.missingStats],
    [hasActivity, copy.hasActivity, copy.missingActivity],
    [hasLayout, copy.hasLayout, copy.missingLayout],
    [hasResponsive, copy.hasResponsive, copy.missingResponsive],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
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
  if (
    text.includes("type or interface") ||
    text.includes("type alias") ||
    text.includes("interface")
  ) {
    return includesAny(source.lowerJs, ["interface ", "type "]);
  }
  if (text.includes("typed array")) {
    return (
      /:\s*[A-Za-z0-9_]+\[\]\s*=/.test(source.js) ||
      /:\s*Array<[^>]+>\s*=/.test(source.js)
    );
  }
  if (text.includes("typed props")) {
    return (
      /function\s+[A-Z][A-Za-z0-9]*\s*\(\s*\{[^)]*\}\s*:\s*[A-Za-z0-9_]+/.test(
        source.js
      ) ||
      /\(\s*\{[^)]*\}\s*:\s*[A-Za-z0-9_]+/.test(source.js)
    );
  }
  if (text.includes("union")) {
    return /\|\s*["'{A-Za-z0-9_]/.test(source.js);
  }
  if (text.includes("optional propert") || text.includes("optional field")) {
    return /[A-Za-z0-9_]+\?\s*:/.test(source.js);
  }
  if (text.includes("typed state")) {
    return /useState<[^>]+>\(/.test(source.js);
  }
  if (text.includes("typed event")) {
    return includesAny(source.lowerJs, [
      "react.mouseevent",
      "react.changeevent",
      "react.formevent",
      "react.keyboardevent",
    ]);
  }
  if (text.includes("narrow")) {
    return includesAny(source.lowerJs, [
      "typeof",
      "instanceof",
      "array.isarray",
      " in ",
    ]);
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
  if (text.includes("find")) return source.lowerJs.includes(".find(");
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

export function validateInterviewAccessibleModalTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasTrigger =
    hasTag(source.html, ["button"]) &&
    includesAny(source.lowerHtml, ["role=\"dialog\"", "role='dialog'", "<dialog"]);
  const hasAria = includesAny(source.lowerHtml, [
    "aria-modal",
    "aria-labelledby",
    "aria-label",
  ]);
  const hasKeyboard = includesAny(source.lowerJs, ["keydown", "escape"]);
  const hasFocus = includesAny(source.lowerJs, [
    ".focus(",
    "document.activeelement",
    "lastactive",
    "lastfocused",
  ]);
  const hasVisibleState = includesAny(source.lowerAll, [
    "hidden",
    "showmodal",
    "closemodal",
    "classlist.add(\"open\"",
    "classlist.remove(\"open\"",
    "classlist.toggle(\"open\"",
  ]);
  const hasFocusStyles = source.lowerCss.includes(":focus");

  [
    [hasTrigger, text.interviewAccessibleModal.hasTrigger, text.interviewAccessibleModal.missingTrigger],
    [hasAria, text.interviewAccessibleModal.hasAria, text.interviewAccessibleModal.missingAria],
    [hasKeyboard, text.interviewAccessibleModal.hasKeyboard, text.interviewAccessibleModal.missingKeyboard],
    [hasFocus, text.interviewAccessibleModal.hasFocus, text.interviewAccessibleModal.missingFocus],
    [hasVisibleState, text.interviewAccessibleModal.hasVisibleState, text.interviewAccessibleModal.missingVisibleState],
    [hasFocusStyles, text.interviewAccessibleModal.hasFocusStyles, text.interviewAccessibleModal.missingFocusStyles],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateInterviewAccessibleTabsTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const tabCount = countMatches(source.html, /role=["']tab["']/gi);
  const hasStructure =
    includesAny(source.lowerHtml, ["role=\"tablist\"", "role='tablist'"]) &&
    tabCount >= 2 &&
    includesAny(source.lowerHtml, ["role=\"tabpanel\"", "role='tabpanel'"]);
  const hasAria = includesAny(source.lowerHtml, [
    "aria-selected",
    "aria-controls",
    "aria-labelledby",
  ]);
  const hasKeyboard = includesAny(source.lowerJs, [
    "keydown",
    "arrowright",
    "arrowleft",
    "home",
    "end",
  ]);
  const hasState = includesAny(source.lowerAll, [
    "activetab",
    "currenttab",
    "selectedindex",
    "aria-selected",
    ".hidden =",
    "classlist.toggle",
  ]);
  const hasFocusStyles = source.lowerCss.includes(":focus");
  const hasPanelControl = includesAny(source.lowerAll, [
    "hidden",
    "aria-hidden",
    "tabpanel.hidden",
    "setattribute(\"hidden\"",
    "removeattribute(\"hidden\"",
  ]);

  [
    [hasStructure, text.interviewAccessibleTabs.hasStructure, text.interviewAccessibleTabs.missingStructure],
    [hasAria, text.interviewAccessibleTabs.hasAria, text.interviewAccessibleTabs.missingAria],
    [hasKeyboard, text.interviewAccessibleTabs.hasKeyboard, text.interviewAccessibleTabs.missingKeyboard],
    [hasState, text.interviewAccessibleTabs.hasState, text.interviewAccessibleTabs.missingState],
    [hasFocusStyles, text.interviewAccessibleTabs.hasFocusStyles, text.interviewAccessibleTabs.missingFocusStyles],
    [hasPanelControl, text.interviewAccessibleTabs.hasPanelControl, text.interviewAccessibleTabs.missingPanelControl],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
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

export function validateInterviewDebugRoutingTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasRouter = includesAny(source.js, [
    "HashRouter",
    "ReactRouterDOM.HashRouter",
    "Routes",
    "Route",
  ]);
  const hasLinks =
    includesAny(source.js, ["Link", "NavLink"]) &&
    includesAny(source.lowerJs, ["to=\"/", "to={'/", "to={`/"]);
  const hasParams = includesAny(source.js, [
    "useParams",
    "ReactRouterDOM.useParams",
  ]);
  const hasLookup =
    source.lowerJs.includes(".find(") &&
    includesAny(source.lowerJs, ["params", "routeid", "itemid", "lessonid"]);
  const hasFallback = includesAny(source.lowerJs, [
    "not found",
    "missing",
    "path=\"*\"",
    "path='*'",
  ]);
  const hasRendering = source.lowerJs.includes(".map(");

  [
    [hasRouter, text.interviewDebugRouting.hasRouter, text.interviewDebugRouting.missingRouter],
    [hasLinks, text.interviewDebugRouting.hasLinks, text.interviewDebugRouting.missingLinks],
    [hasParams, text.interviewDebugRouting.hasParams, text.interviewDebugRouting.missingParams],
    [hasLookup, text.interviewDebugRouting.hasLookup, text.interviewDebugRouting.missingLookup],
    [hasFallback, text.interviewDebugRouting.hasFallback, text.interviewDebugRouting.missingFallback],
    [hasRendering, text.interviewDebugRouting.hasRendering, text.interviewDebugRouting.missingRendering],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 5, 4, feedback, language);
}

export function validateInterviewTestingUnitTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasTestCount = countMatches(source.js, /\b(test|it)\s*\(/g) >= 3;
  const hasExpect = countMatches(source.js, /\bexpect\s*\(/g) >= 3;
  const coveredHelpers = [
    "normalizecandidatename",
    "countopenroles",
    "buildstatuslabel",
  ].filter((name) => source.lowerJs.includes(name)).length;
  const hasBehaviorCoverage = coveredHelpers >= 2;
  const hasSuiteStructure = includesAny(source.lowerJs, ["describe(", "test("]);

  [
    [hasTestCount, text.interviewTestingUnit.hasTestCount, text.interviewTestingUnit.missingTestCount],
    [hasExpect, text.interviewTestingUnit.hasExpect, text.interviewTestingUnit.missingExpect],
    [hasBehaviorCoverage, text.interviewTestingUnit.hasBehaviorCoverage, text.interviewTestingUnit.missingBehaviorCoverage],
    [hasSuiteStructure, text.interviewTestingUnit.hasSuiteStructure, text.interviewTestingUnit.missingSuiteStructure],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 4, 3, feedback, language);
}

export function validateInterviewTestingUiTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasRender = includesAny(source.lowerJs, ["render("]);
  const hasScreenQueries = includesAny(source.lowerJs, [
    "screen.getbyrole",
    "screen.getbytext",
    "screen.querybytext",
  ]);
  const hasInteractions = includesAny(source.lowerJs, [
    "fireevent.click",
    "fireevent.change",
    "fireevent.input",
  ]);
  const hasAssertions = countMatches(source.js, /\bexpect\s*\(/g) >= 3;

  [
    [hasRender, text.interviewTestingUi.hasRender, text.interviewTestingUi.missingRender],
    [hasScreenQueries, text.interviewTestingUi.hasScreenQueries, text.interviewTestingUi.missingScreenQueries],
    [hasInteractions, text.interviewTestingUi.hasInteractions, text.interviewTestingUi.missingInteractions],
    [hasAssertions, text.interviewTestingUi.hasAssertions, text.interviewTestingUi.missingAssertions],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 4, 3, feedback, language);
}

export function validateInterviewTestingFormsTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasRender = includesAny(source.lowerJs, ["render("]);
  const hasSubmitFlow =
    includesAny(source.lowerJs, ["fireevent.submit", "fireevent.click"]) &&
    source.lowerJs.includes("submit");
  const hasFieldCoverage =
    includesAny(source.lowerJs, ["getbylabeltext", "getbyplaceholdertext"]) &&
    includesAny(source.lowerJs, ["fireevent.change", "fireevent.input"]);
  const hasAssertions = countMatches(source.js, /\bexpect\s*\(/g) >= 3;

  [
    [hasRender, text.interviewTestingForms.hasRender, text.interviewTestingForms.missingRender],
    [hasSubmitFlow, text.interviewTestingForms.hasSubmitFlow, text.interviewTestingForms.missingSubmitFlow],
    [hasFieldCoverage, text.interviewTestingForms.hasFieldCoverage, text.interviewTestingForms.missingFieldCoverage],
    [hasAssertions, text.interviewTestingForms.hasAssertions, text.interviewTestingForms.missingAssertions],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 4, 3, feedback, language);
}

export function validateInterviewTestingAsyncTest(draft, language = "en") {
  const text = getValidatorCopy(language);
  const source = getSource(draft);
  const feedback = [];
  let score = 0;

  const hasRender = includesAny(source.lowerJs, ["render("]);
  const hasWaitFor = includesAny(source.lowerJs, ["waitfor("]);
  const hasLoading = includesAny(source.lowerJs, [
    "loading",
    "getbyrole(\"status\"",
    "getbyrole('status'",
    "getbytext(/loading",
  ]);
  const hasSuccessOrError =
    countMatches(source.js, /\bexpect\s*\(/g) >= 2 &&
    includesAny(source.lowerJs, ["loaded", "ready", "failed", "error"]);

  [
    [hasRender, text.interviewTestingAsync.hasRender, text.interviewTestingAsync.missingRender],
    [hasWaitFor, text.interviewTestingAsync.hasWaitFor, text.interviewTestingAsync.missingWaitFor],
    [hasLoading, text.interviewTestingAsync.hasLoading, text.interviewTestingAsync.missingLoading],
    [hasSuccessOrError, text.interviewTestingAsync.hasSuccessOrError, text.interviewTestingAsync.missingSuccessOrError],
  ].forEach(([passed, successMessage, missingMessage]) => {
    if (passed) score += 1;
    feedback.push(passed ? successMessage : missingMessage);
  });

  return finalizeScoreResult(score, 4, 3, feedback, language);
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
    "grid-feature-board": validateGridFeatureBoard,
    "css-grid-gallery": validateCssGridGallery,
    "responsive-card-grid": validateResponsiveCardGrid,
    "media-query-stack-layout": validateMediaQueryStackLayout,
    "fluid-container-shell": validateFluidContainerShell,
    "dashboard-stats-layout": validateDashboardStatsLayout,
    "polished-pricing-card": validatePolishedPricingCard,
    "gradient-hero-callout": validateGradientHeroCallout,
    "responsive-feature-strip": validateResponsiveFeatureStrip,
    "portfolio-section-capstone": validatePortfolioSectionCapstone,
    "debug-broken-profile-card-css": validateDebugBrokenProfileCardCss,
    "debug-broken-navbar-layout": validateDebugBrokenNavbarLayout,
    "debug-broken-responsive-grid": validateDebugBrokenResponsiveGrid,
    "copy-mock-pricing-section": validateCopyMockPricingSection,
    "copy-mock-dashboard-overview": validateCopyMockDashboardOverview,
    "builder-all-in-one-practice-lab": validateBuilderPracticeLab,
    "react-all-in-one-restaurant-app": validateReactRestaurantCapstone,
    "interview-accessibility-qa-test": validateInterviewAccessibilityTest,
    "interview-accessible-modal-test": validateInterviewAccessibleModalTest,
    "interview-accessible-tabs-test": validateInterviewAccessibleTabsTest,
    "interview-debug-dom-test": validateInterviewDebugDomTest,
    "interview-debug-async-test": validateInterviewDebugAsyncTest,
    "interview-typescript-react-test": validateInterviewTypeScriptReactTest,
    "interview-debug-react-test": validateInterviewDebugReactTest,
    "interview-debug-routing-test": validateInterviewDebugRoutingTest,
    "interview-unit-tests-foundations-test": validateInterviewTestingUnitTest,
    "interview-rtl-interaction-test": validateInterviewTestingUiTest,
    "interview-form-validation-tests-test": validateInterviewTestingFormsTest,
    "interview-loading-error-tests-test": validateInterviewTestingAsyncTest,
    "interview-shipping-readiness-test":
      validateInterviewShippingReadinessTest,
  };

  const validator = validators[challengeId];

  if (!validator) return validateGenericChallenge(challenge, draft, language);

  return validator(draft, language);
}
