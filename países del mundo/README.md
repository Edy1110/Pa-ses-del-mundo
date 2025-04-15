# Proyecto Final de Clase con React: Explorador de Países

## Objetivo

Desarrollar una aplicación web utilizando React que integre datos provenientes de la API pública REST Countries (https://restcountries.com/). La aplicación permite a los usuarios explorar información detallada sobre países de todo el mundo, incluyendo nombre, capital, población, bandera y la posibilidad de marcar países como favoritos.

## Requisitos Funcionales

* **Consumo de API:** La aplicación se conecta a la API pública REST Countries (https://restcountries.com/) para obtener y mostrar datos de los países.
* **Uso de React:** La interfaz de usuario está construida utilizando la librería JavaScript React.
* **Ruteo con `react-router-dom`:** Se utiliza la librería `react-router-dom` para la navegación entre diferentes vistas de la aplicación (lista de países, detalles de un país, página de favoritos).
* **Almacenamiento Local:** La aplicación utiliza el almacenamiento local del navegador (`localStorage`) para persistir la lista de países favoritos.
* **Navbar Innovador:**
    * Menú con botones de "Inicio" y "Favoritos" (con contador que inicia en 0 por sesión).
    * Funcionalidad para añadir y quitar países de la lista de favoritos.
    * Buscador por nombre de país, filtrando la lista en tiempo real por la letra inicial.
* **Página Inicial:** Muestra inicialmente solo dos países. Los demás países aparecen al buscar por la letra inicial en el buscador.
* **Lista de Países Ajustada:** La lista de países presenta un diseño bien organizado con bordes, márgenes y espaciado adecuados para una buena visualización en ordenadores y dispositivos móviles.
* **Indicador Visual de Favorito:** Al hacer clic en el botón de favoritos de un país, su color cambia momentáneamente, proporcionando una retroalimentación visual al usuario.

## Requisitos Técnicos

* **Estructura del Proyecto:** El proyecto está organizado en carpetas para mantener un código limpio y modular:
    * `public/`: Contiene los archivos estáticos de la aplicación.
    * `src/`: Contiene el código fuente de la aplicación.
        * `components/`: Componentes reutilizables de React (ej: `CountryCard`, `Navbar`).
        * `hooks/`: Hooks personalizados (ej: `useFetch` para manejar las peticiones a la API).
        * `pages/`: Componentes que representan las diferentes páginas de la aplicación (ej: `CountryList`, `CountryDetailView`, `Favorites`, `NotFound`).
        * `App.js`: Componente principal de la aplicación.
        * `index.js`: Punto de entrada de la aplicación.
        * `App.css`: Estilos globales de la aplicación (si se utilizan).
        * Archivos `.module.css`: Módulos CSS para el estilo específico de cada componente.
* **Gestión de Errores:** Se implementa el manejo de errores en las peticiones a la API, mostrando mensajes adecuados en caso de fallos (por ejemplo, "Cargando países...", "Error al cargar los países...").
* **Estilos y Diseño:** Se utilizan CSS Modules para personalizar la interfaz, asegurando que los estilos sean locales a cada componente. Se ha buscado una estética agradable y una usabilidad intuitiva tanto en la versión de escritorio como en la móvil. Se han utilizado media queries para la adaptación a diferentes tamaños de pantalla.

## Entregables

* **Código Fuente:** El código fuente completo del proyecto se encuentra disponible en el siguiente repositorio: [**ENLACE A TU REPOSITORIO DE GIT AQUÍ**] (Reemplaza esto con el enlace real a tu repositorio).
* **Documentación:**
    * **Comentarios en el Código:** El código incluye comentarios para explicar la lógica de las partes más importantes.
    * **Documento Explicativo (este README):** Este documento proporciona una visión general de la estructura del proyecto y las decisiones de diseño adoptadas.

## Tecnologías Utilizadas

* React
* `react-router-dom`
* `axios` (para las peticiones HTTP)
* CSS Modules
* `@fortawesome/react-fontawesome` y `@fortawesome/free-solid-svg-icons` (para los iconos de favoritos y búsqueda)
* `localStorage` (para el almacenamiento local)

## Configuración e Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [ENLACE A TU REPOSITORIO DE GIT AQUÍ]
    cd nombre-del-repositorio
    ```
2.  **Instala las dependencias:**
    Si utilizas npm:
    ```bash
    npm install
    ```
    Si utilizas Yarn:
    ```bash
    yarn install
    ```
3.  **Inicia la aplicación:**
    Si utilizas npm:
    ```bash
    npm start
    ```
    Si utilizas Yarn:
    ```bash
    yarn start
    ```
    Esto iniciará el servidor de desarrollo de React y la aplicación se abrirá automáticamente en tu navegador (normalmente en `http://localhost:3000`).

## Uso de la Aplicación

* **Página de Inicio:** Al acceder a la página principal, se mostrarán inicialmente solo dos países.
* **Buscador:** Utiliza el buscador en la barra de navegación para filtrar los países por la letra inicial de su nombre. A medida que escribes, la lista de países se actualizará dinámicamente.
* **Lista de Países:** La lista muestra tarjetas con información básica de cada país (nombre, bandera, capital) y un enlace para ver más detalles.
* **Detalles del País:** Al hacer clic en "Ver Detalles", se accede a una página con información más detallada sobre el país seleccionado, como nombre oficial, población, área, monedas e idiomas.
* **Favoritos:** En cada tarjeta de país y en la página de detalles, hay un botón de corazón. Haz clic en él para añadir o quitar un país de tu lista de favoritos. El contador de favoritos en la barra de navegación se actualizará.
* **Página de Favoritos:** Accede a la página de "Favoritos" desde la barra de navegación para ver la lista de todos los países que has marcado como favoritos.

## Estructura del Proyecto

country-app/ ├── público/ ├── src/ │ ├── componentes/ │ │ ├── CountryCard.js │ │ ├── Navbar.js │ │ └── ... │ ├── ganchos/ │ │ └── useFetch.js │ ├── páginas/ │ │ ├── CountryDetailView.js │ │ ├── CountryList.js │ │ ├── Favoritos.js │ │ ├── NotFound.js │ │ └── ... │ ├── App.js │ ├── index.js │ ├── App.css │ └── ... ├── paquete.json ├── README.md └── ...

## Decisiones de Diseño

* Se optó por una estructura de carpetas modular para facilitar el mantenimiento y la escalabilidad del proyecto.
* Se utilizó `axios` para las peticiones a la API debido a su sintaxis clara y su manejo de promesas.
* CSS Modules se eligió para el estilado con el fin de evitar conflictos de nombres de clases y mantener los estilos encapsulados dentro de cada componente.
* `react-router-dom` se implementó para proporcionar una navegación fluida entre las diferentes secciones de la aplicación sin recargas completas de la página.
* El almacenamiento local se utilizó para persistir los favoritos de manera sencilla y sin necesidad de una base de datos.

## Gestión de Errores

Se implementó un hook personalizado (`useFetch`) para manejar las peticiones a la API. Este hook gestiona los estados de carga (`loading`), error (`error`) y los datos recibidos (`data`), permitiendo mostrar mensajes informativos al usuario en caso de problemas con la conexión a la API.

## Estilos

El estilo de la aplicación se gestiona principalmente a través de archivos `.module.css` asociados a cada componente. Se han utilizado estilos para asegurar una presentación clara y organizada de la información, así como para adaptar la interfaz a diferentes tamaños de pantalla mediante media queries.

## Almacenamiento Local

La lista de países marcados como favoritos se guarda en el `localStorage` del navegador. Esto permite que los favoritos persistan incluso si el usuario cierra y vuelve a abrir la aplicación.

## API Reference

Se utiliza la API pública REST Countries (https://restcountries.com/) para obtener la información de los países. La documentación de la API proporciona detalles sobre los diferentes endpoints y los datos disponibles.

## Posibles Mejoras Futuras

* Implementar funcionalidades de filtrado y ordenamiento más avanzadas para la lista de países (ej: por región, población).
* Añadir pruebas unitarias y de integración para mejorar la calidad del código.
* Mejorar el diseño visual y la usabilidad de la aplicación.
* Implementar una funcionalidad de búsqueda más robusta que permita buscar por diferentes criterios (ej: capital, moneda).
* Considerar el uso de un gestor de estado global como Redux o Context API para aplicaciones más complejas.

## Autor

[**eddy001**]