/* 

Tomando de referencia el ejercicio 1, 
convierte esos objetos a definiciones de clases, 
trata de aplicar lo visto en los ejemplos.s

*/

// Ejercicio 0: > exercises/ejercicio_1/ejercicio_0_ejemplo.js
class repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_closed
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_closed = issues_closed;
  }

  getTotalIssues() {
    return this.issues_open + this.issues_closed;
  }

  getGeneralInfo() {
    return `The repository ${this.name} was created by ${this.author}`;
  }
}

const developer = new repo("playbook", "carlo", "JS", 9, 22, 6, 5, 7);

console.log("\nEJERCICIO OBJETOS/CLASES: 0")
console.log("Nombre del repo: " + developer.name)
console.log("Author: " + developer.author)
console.log("Lenguaje: " + developer.language)
console.log("General Info: " + developer.getGeneralInfo())
console.log("Issues: " + developer.getTotalIssues())



// Ejercicio 1: > exercises/ejercicio_1/ejercicio_1.1.js
class issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdate
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdate = lastUpdate;
  }
}

const myIssue = new issue(
  "corrección",
  "playbook",
  "open",
  33,
  "Semana 2",
  "Carlo",
  "10-Abril-2022",
  "20-Abril-2022"
);

console.log("\nEJERCICIO OBJETOS/CLASES: 1.1")
console.log('Issue: ' + myIssue.title);
console.log('Status: ' + myIssue.status);
console.log('Creado: ' + myIssue.dateCreated);
console.log('Actualizado: ' + myIssue.lastUpdate);



// Ejercicio 1: > exercises/ejercicio_1/ejercicio_1.1.js
class MyPullRequest {
  constructor(
    author,
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated
  ) {
    this.author = author;
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated
  }
}

const myPR = new MyPullRequest(
  "Carlo",
  'playbook update',
  'main',
  '10-Abril-2022',
  'accepted',
  'playbook'
  )

console.log("\nEJERCICIO OBJETOS/CLASES: 1.2")
console.log('Creado por: ' + myPR.author);
console.log('titulo: ' + myPR.title);
console.log('Creado en la rama: ' + myPR.branchName);
console.log('Creado: ' + myPR.dateCreated);