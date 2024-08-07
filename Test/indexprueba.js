let persona = {
  nombre: "Jaz",
  apellido: "Des...",
  edad: 23,
  esprogramador: true,
  amigos: ["Seba", "Nacho"],
};
console.log(persona.nombre); //metodo de cosologear algo especifico
console.log(persona["amigos"][1]); //metodo de cosologear algo especifico / el [.] es para acceder a un indice especifico
//This refiere al objeto dentro de una funcion

persona.nombre = "Maria"; // Metodo para modificar el valor dentro de un objeto
console.log(persona.nombre);

persona["nombre"] = "Juan"; // Metodo para modificar el valor dentro de un objeto
console.log(persona.nombre);


