/* 
Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` 
a través de `userService`. 

Crea un método en esta clase llamado `create User` que sirva para 
crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que 
contenga información para crearlo.



Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
*/

class UserView {
  constructor()

  createUser() {
    payload = {}
  }
}

module.exports = UserView;