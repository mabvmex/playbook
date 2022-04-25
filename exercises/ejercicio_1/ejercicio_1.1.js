const issue = {
  title: 'Semana 2',
  repositoryNameAssociated: 'TemaObjetos',
  status: 'Open',
  numberOfComments: 45,
  labels: ['Semana 2', 'LaunchX', 'Backend'],
  author: 'CarloGilmar',
  dateCreated: '14-Abril-2022',
  lastUpdate: '20-Abril-2022',
  getTitleAndAuthor: function () {
    return this.title, this.author
  },
  getGeneralInfo() {
    return `This Issue ${this.title}, belongs to the topic: ${this.repositoryNameAssociated}, currently: ${this.status}`
  }
}

console.log('Nombre del issue: ' + issue.title);
console.log('Datos del autor: ' + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());