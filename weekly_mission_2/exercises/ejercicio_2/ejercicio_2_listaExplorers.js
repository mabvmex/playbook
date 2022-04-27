const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('2.1- Nombre del explorer [FOREACH]: ');
explorers.forEach(explorer => console.log(explorer.name));

// 2. Imprime el stack de cada explorer, usa FOR EACH
console.log('\n2.2- Stack del explorer [FOREACH]: ');
explorers.forEach(explorer => console.log(`El stack de ${explorer.name} es: ${explorer.stack}`));

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('\n2.3- Stack usado por el explorer [MAP]: ');
const stackList = explorers.map(explorer => {
  return `El stack de ${explorer.name} es: ${explorer.stack}`
});

console.log(stackList);

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\n2.4- Explorers que usan el stack JS[FILTER/INCLUDES]: ");
const FilterJS = explorers.filter((explorerJS) => {
  return explorerJS.stack.includes("js");
});
console.log(FilterJS);

// 5.- Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\n2.5- Primer Explorer que viva en 'CDMX'[FIND]: ");
const cdmxExplorer = explorers.find(explorer => {
return explorer.city == 'CDMX'
})

console.log(cdmxExplorer)

// 6.- Obtén la suma de todos los' exercises_completed', usa REDUCE
console.log("\n2.6- Suma de los 'exercises_completed'[REDUCE]: ");
const list = explorers.map((explorer) => {
  return explorer.exercises_completed;
});
const completedExercises = list.reduce(
  (accumulated, element) => accumulated + element,
  0
);
console.log(list);
console.log(completedExercises);


/* 7.- Obtén la validación si al menos uno de los explorers tiene la propiedad 
   'exercisesFinished' en frontend como true, usa SOME
*/
console.log("\n2.7- Validación si exite la propiedad 'exercisesFinished'[SOME]: ");
const someList = explorers.map((explorer) => {
  return explorer.missions.frontend.exercisesFinished;
});
const finishedExercises = someList.some (a => a ===  true);

console.log(someList);
console.log(finishedExercises);

/*
8.- Obtén la validación si todos los explorers tienen la propiedad 'isFinished' 
   del onboarding como true. Usa EVERY.
*/
console.log("\n2.8- Validación si exite la propiedad 'isFinished'[EVERY]: ");
const everyList = explorers.map((explorer) => {
  return explorer.missions.onboarding.isFinished;
});
const misionfinished = everyList.every (a => a ===  true);

console.log(everyList);
console.log(misionfinished);
