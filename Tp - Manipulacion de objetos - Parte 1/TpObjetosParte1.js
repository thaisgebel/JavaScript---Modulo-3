/*Enunciado:

En este ejercicio, vas a trabajar con un objeto Personaje basado en el universo de El Señor
de los Anillos. Tu tarea es crear y manipular este objeto utilizando funciones. Debes
implementar varias funciones para actualizar y acceder a las propiedades del objeto.
Instrucciones:

1. Crea un objeto Personaje con las siguientes propiedades:
○ Nombre
○ Raza
○ Edad
○ Clase (por ejemplo: Guerrero, Mago, etc.)
○ Arma*/

let character = {
  Name: "Mangolo",
  Race: "Elfo oscuro",
  Age: 163,
  Class: "Druid",
  Weapon: "Staff",
};

/*2. Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.*/

character.Ally = "Alfonso Ricotta";

console.log(character);

/*3. Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1 usando tanto la notación de punto como la de corchetes.*/

character.Age = character.Age + 1;
console.log(character.Age);

character["Age"] = character["Age"] + 1;
console.log(character.Age);

/*4. Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si existe, aumente su edad en 1.*/

function ageExists(characterObj) {
  if (characterObj.Age) {
    return {
      Name: characterObj.Name,
      Race: characterObj.Race,
      Age: characterObj.Age + 1,
      Class: characterObj.Class,
      Weapon: characterObj.Weapon,
    };
  } else {
    return "La propiedad no existe";
  }
}
let age = ageExists(character);
console.log(age);

/*5. Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres*/

function allyExists(characterObj) {
  if (characterObj.Ally.length === 10) {
    return "El aliado tiene 10 caracteres";
  } else {
    return "El aliado no tiene 10 caracteres";
  }
}

let allyHave10Characters = allyExists(character);
console.log(allyHave10Characters);

/*6. Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es igual al Nombre del aliado.*/

function sameNameCharacterAlly(characterObj) {
  if (characterObj.Ally === characterObj.Name) {
    return (
      "El aliado " +
      characterObj.Ally +
      " tiene el mismo nombre que " +
      characterObj.Name +
      ", el personaje principal."
    );
  } else {
    return (
      "El aliado se llama " +
      characterObj.Ally +
      ", mientras que el personaje principal se llama " +
      characterObj.Name
    );
  }
}
let sameName = sameNameCharacterAlly(character);
console.log(sameName);

/*7. Crea una función que reciba el objeto Personaje y retorne una cadena que describa al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma], Raza: [raza]". */

function characterDescription(characterObj) {
  return {
    DescriptionCharacter:
      "Nombre: " +
      characterObj.Name +
      " Edad: " +
      characterObj.Age +
      " Arma: " +
      characterObj.Weapon +
      " Raza: " +
      characterObj.Race,
  };
}

let description = characterDescription(character);
console.log(description);

/*8. Crea una función que reciba a Personaje y verifique si es mayor de 100 años (considerando que en el universo de El Señor de los Anillos algunas razas pueden vivir mucho más tiempo).*/

function ageCharacter(characterObj) {
  if (characterObj.Age > 100) {
    return "El personaje principal tiene mas " + characterObj.Age;
  } else {
    "El personaje principal tiene " + characterObj.Age;
  }
}
let characterAge = ageCharacter(character);
console.log(characterAge);

/*9. Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.*/

function ageAndName(characterObj) {
  return {
    Name: characterObj.Name,
    Age: characterObj.Age,
  };
}
let nameAndAge = ageAndName(character);
console.log(nameAndAge);

/*10.  Añade una propiedad Habilidades que sea un array de habilidades del personaje y accede a ese array por medio de notación de punto o corchetes*/

//character.Skills = [ "Summon beasts","Heal ally","Metamorphosis","Resurrection",];
//console.log(character.Skills);

character["Skills"] = [
  "Summon beasts",
  "Heal ally",
  "Metamorphosis",
  "Resurrection",
];
console.log(character["Skills"]);

/*11. Crea una función que reciba una habilidad y la agregue al array Habilidades.*/

function moreSkills(skill, characterObj) {
  characterObj.Skills.push(skill);
  return characterObj;
}
obj = moreSkills("flare", character);

console.log(obj.Skills);

/*12. Crea una función que reciba una habilidad y la devuelva si existe en el array Habilidades.*/

function existsSkill(characterObj, skillToEvaluate) {
  let skillExist = characterObj.Skills.some(function (element) {
    return element === skillToEvaluate;
  });
  return skillExist;
}
let skill = existsSkill(character, "fwhfe3hfe");

if (skill === true) {
  console.log("Ya conoce la habilidad");
} else {
  console.log("No conoce la habilidad");
}

/*13. Crea una función que retorne cuántas habilidades tiene el personaje.*/

function howManySkills(characterObj) {
  return characterObj.Skills.length;
}
let manySkills = howManySkills(character);
console.log("Tiene " + manySkills + " habilidades.");

/*14. Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese array por medio de notación de punto o corchetes.*/

// character.Allys = ["Raul Alberto", "Dionisio Carmesio", "Lorenzo Lamepapas"];
// console.log(character.Allys);

character["Allys"] = ["Raul Alberto", "Dionisio Carmesio", "Lorenzo Lamepapas"];
console.log(character["Allys"]);

/*15. Crea una función que reciba un aliado y lo agregue al array Aliados.*/

function newAlly(characterObj, ally) {
  characterObj.Allys.push(ally);
  return characterObj;
}
character = newAlly(character, "Miguel Peponcio");
console.log(obj.Allys);

/*16. Crea una función que reciba un aliado y lo elimine del array Aliados.*/

function deleteAlly(characterObj, allyEliminated) {
  let allys = characterObj.Allys.filter(function (ally) {
    return allyEliminated != ally;
  });
  return allys;
}
character.Allys = deleteAlly(character, "Dionisio Carmesio");

/*17. Crea una función que devuelva una lista de los nombres de los aliados.*/

function listNameAlly(characterObj) {
  return characterObj.Allys;
}
let namesAllys = listNameAlly(character);
console.log(namesAllys);

/*18. Crea una función que reciba un nuevo nombre de arma y actualice la propiedad Arma del objeto Personaje.*/

function newWeapon(characterObj, weapon) {
  let replaceArmor = (characterObj.Weapon = weapon);
  return replaceArmor;
}
character.Weapon = newWeapon(character, "Spear");
console.log(character.Weapon);

/*19. Crea una función que reciba una clase y devuelva true o false si el personaje tiene
esa clase.*/

function classCharacter(characterObj, newClass) {
  return characterObj.Class.includes(newClass);
}
character.Class = classCharacter(character, "Druid");
console.log(character.Class);

/*20. Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad", "Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar la propiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos avanzados.*/

function changeValue(characterObj, property, value) {
  characterObj[property] = value;
  return characterObj;
}
character = changeValue(character, "Age", 380);
console.log(character.Age);
