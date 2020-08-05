# Prueba Técnica gitei - UNAL


## [Sitio web aquí](https://kevinmalaverr.github.io/prueba-tecnica-gitei/ "sitio web")

## Grilla
Se construyó una grilla adaptable a diferentes dispositvos usando css gris layout
la cual cambiara su número de columnas de acuerdo al ancho disponible

## Bootstrap

Adaptabilidad a diferentes tamaños de pantalla. Se tomó como referencia los breakpoints por defecto que usa bootstrap

| Extra small | Small  | Medium  | Large  | Extra large  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  <576px |≥576px   | ≥768px  | ≥992px  | ≥1200px  |

Ademas del posicionamiento, Bootstrap fue utilizado en:
- menú de navegación
- barra de búsqueda


## Sass

El proyecto se estructuro separando el código en components usando sass

**ESTRUCTURA:**
- components
	- card
	- header
	- footer
	- navbar
	- pagination


## JS & Jquery

Se usó js y jquery para poder animar la entrada de las tarjetas y agregar la funcionalidad del menú de paginación. Para esta último también fue usada la librería [Bootpag](https://github.com/botmonster/jquery-bootpag "Bootpag")
