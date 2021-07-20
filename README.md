# Aplicacion de consola con Node y Sequelize

## Descripción
    El proyecto trata de una aplicacion de consola. Mediante comandos escritos en esta,
    se interactua con la base de datos. 

## Instalacion de dependencias
    - npm install sequelize sequelize-cli sqlite3

    Mediante esta dependencia, vamos a poder interactuar con la DB gracias el CLI que nos brinda Sequelize

## Comandos
    Para hacer un insert
    - node . --create:Contact --firstname=Pablo --lastname=Diaz --phone=121331 --email="pablo@gmail.com"

    Para leer los datos de la Entidad que queremos ver
    - node . --read:<<Entidad a leer>> 
    En nuestro caso seria 'Contact'

    Para realizar un update
    - node . --update:Contact --id=<<id a borrar>> --firstname=<<nombre>>
    *En un futuro se agregara la posibilidad para que sea variable el campo a modificar

    Para borrar un registro
    - node . --delete:Contact --id=<<id a borrar>>
