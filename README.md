# Opinions

El desarrollo es una web de publicación de artículos. Es una web responsive desarrollada con Javascript, webpack, plantillas SASS y json-server para realizar la simulación del backend.

## Instalación

Descargar del repositorio la rama master.

Dentro del directorio raiz ejecutaremos:
```bash
npm install
```

## Ejecución

Una vez instaladas las dependencias podremos ejecutar la web app, para ello, dentro del directorio raiz ejecutaremos:
```bash
npm run start
```
este paso arrancara la aplicación.


## Generación de la distribución

Para generar el código de para realizar una distribución ejecutaremos el siguiente comando dentro del directorio raiz:

```bash

npm run build

```

este generara el directorio dist con los ficheros preparados para instalar en un servidor de produccion.


## Arranque de backend

Para el backend se ha utilizado json-server. Para arrancar el servidor debemos ejecutar el siguiente comando desde el directorio raiz:

```bash

npm run server

```

esto arrancara el backend con los modelos definidos en el fichero /src/data/db.json



### Url de prueba para la web

Si la web se ha levantado correctamente podremos probarla lanzando la siguiente url, Se mostraran el home con el listado de opiniones:

```bash
http://localhost:8080/

```

## Version

 V1.0

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
