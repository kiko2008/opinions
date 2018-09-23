# Opinions

El desarrollo es una web de publicación de artículos desarrollada con Javascript, webpack y json-server para realizar la simulación del backend.

Se han intentado incluir los conocimientos adquiridos en el modulo.

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

Para generar el código de para realizar una distribución ejecutaremos el siguiente comando dentro del directorio:

```bash

npm run build

```

este paso arrancara la aplicación.


## Arranque de backend



Para el backend se ha utilizado json-server, para arrancar el servidor debemos ejecutar el siguiente comando desde el directorio raiz:

```bash

npm run server

```

esto arrancara el backend con los modelos definidos en el fichero /src/data/db.json



### Url de prueba para la web

Si la web se ha levantado correctamente podremos probarla lanzando la siguiente url y se mostraran el home con el listado de opiniones:

```bash
GET
http://localhost:8080/

```

## Version

 V1.0

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)