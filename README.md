![Logo](img/ucol-logo.jpg)

# Práctica 11: Contenido estático

> Segunda Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Nodemon server
- Express module
- EJS

> ENTREGA: Sabado 9 DE ABRIL DEL 2022

## INFORMACIÓN ADICIONAL

Una forma de enviar información que se genera en los “route handlers” de nuestra app, hacia el “front end” es mediante un template engine. Express permite “conectar” una cantidad considerable de “templates engines” a nuestra aplicación de Express.
Uno de los “template engines” más populares es “EJS”.

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_12"

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Instala el paquete 'ejs' con el comando npm i express --save o npm i ejs

5. Crea un nuevo archivo app.js en el cual se le pasara todo el codigo hecho en la practica anterior

6. Crea una nueva carpeta llamada "public" dentro de la carpeta "practica_12"

7. Dentro de la carpeta "public" crea un nuevo archivo style.css

8. Dentro del archivo style.css se le escribira body y dentro de este tendra un front-family : 'Roboto Condensed', sans-serif;

9. En el archivo app.js con el app.use donde tenemos la carpeta virtual llamada "assets" y ese nombre sera mapeado con la carpeta fisica llamada "public"

10. Despues de la linea cuatro se inserta el codigo con el que se espesifica la app de express y su engine ejs

11. Ahora se crea una carpeta al nivel de public la cual se llamara Views y dentro de esta se creara un archivo llamado index.ejs

12. Ahora se ingresa el codigo igual como se realiza en html.

13. Ahora crea un archivo llamado person.ejs en la carpeta views pero dentro de este archivo se debe ingresar en el body como un titulo <h1> el codigo Person: <%= ID %>

14. Regresando al app.js en la ruta raiz se colocara .render en lugar de .send y entre parentesis index

15. En la ruta person cambiaremos el interior de la funcion por res.render("person", { ID: req.params.id });w

16. Ahora se ejecuta el comando "nodemon app” en la terminal y acccede a localhost:3000 para observar el resultado

17. Ahora se cambia el orden de los route handler del de person y api, ademas en el navegador observa el codigo fuente para poder observar lo impreso

## RECURSOS

- https://www.npmjs.com/
- https://ejs.co/
