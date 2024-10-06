# Daniel Otero Rivera.<br>Prueba técnica desarrollo frontend.

El proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app) y utiliza [React Router](https://reactrouter.com/en/main).

## Scripts

Se pueden utilizar los siguientes comandos:

### `npm start`

Lanza la aplicación en modo desarrollo.\
[http://localhost:3000](http://localhost:3000)

### `npm run build`

Genera le versión de producción en la carpeta `build`, ahí estarán los archivos minimizados.
Una vez generada, se puede lanzar en local con `serve -s build` ( instalar con `npm install -g serve` si no está disponible ) .

## Observacones

Se ha mantenido el límite de 20 entradas para los episodios del podcast como venía en el enlace.

En la lista de podcasts no se ha incluído ningún tipo de paginación, con solo 100 entradas no me parece necesario.

He intentado mantener el diseño de las vistas todo lo fiel posible a la tarea, aunque con algunas pequeñas libertades de diseño para ofrecer una mejor 
experiencia visual:

- Se ha ajustado el alineamiento de los podcast en la lista.

- El icono de carga utilizado proviene de [CSS Loaders](https://cssloaders.github.io/)

- Se han ajustado algunos de los márgenes para encajar mejor el diseño.

- Otras modificaciones que no recojen los requisitos ( algún efecto hover y focus por ejemplo ) .