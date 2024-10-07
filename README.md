# Daniel Otero Rivera | Prueba técnica desarrollo frontend.

El proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app) 
y utiliza [React Router](https://reactrouter.com/en/main).

## Scripts

Se pueden utilizar los siguientes comandos:

### `npm install`

Instala las dependencias.

### `npm start`

Lanza la aplicación en modo desarrollo.\
[http://localhost:3000](http://localhost:3000)

### `npm run build`

Genera la versión de producción en la carpeta `build` con los archivos minimizados.
Una vez generada, se puede lanzar en local con `serve -s build` 
( instalar con `npm install -g serve` si no está disponible ) .

## Mejoras

Se ha priorizado el tiempo de desarrollo siguiendo los requisitos de la prueba. 
Algunas posibles mejoras de cara a una futura versión en un entorno real serían:

- Refactorización con TypeScript para una mejor experiencia de desarrollo.

- Uso de tests ( end-to-end, unitarios ) para facilitar revisiones futuras. 

- Gestión de errores de cara al usuario.

- Paginación en la lista de podcast y episodios 
( en caso de que se manejasen más de 100 entradas ) .

## Observaciones

Las peticiones a algunas URL fallan, tanto utilizando el enlace directamente como
con el recurso proporcionado, p.ej. en el podcast "THE ZANE LOWE INTERVIEW SERIES" 
o "DOLLY PARTON'S AMERICA".

Algunos episodios no proporcionan una duración, se ha decidido indicar "00:00:00" 
en estos casos.

Se ha mantenido el límite de 20 entradas para los episodios del podcast como 
venía en el enlace.

## Diseño

Se ha mantenido el diseño de las vistas todo lo fiel posible a la tarea, 
con algunas pequeñas libertades de diseño para ofrecer una mejor 
experiencia visual:

- Se ha ajustado el alineamiento vertical en la lista de podcast.

- Se han ajustado algunos de los márgenes para encajar mejor el diseño.

- El icono de carga utilizado proviene de 
[CSS Loaders](https://cssloaders.github.io/).

- Otras modificaciones que no recojen los requisitos 
( algún efecto hover y focus por ejemplo ) .
