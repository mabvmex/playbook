const pullRequest = {
  author: 'Carlo',
  title: 'Update index.js',
  branchName: 'main',
  dateCreated: '15-Abril-2022',
  status: 'closed',
  repositoryNameAssociated: 'blog-Hugo',
  getStatus: function(){
    return this.pullRequest.status;
  },
  getTitleAndAuthor: function(){
    return `This PullRequest's Name is ${this.title} and Author is: ${this.author}`
  }
}

console.log('Name of the PullRequest: ' + pullRequest.title);
console.log('Branch of the PullRequest: ' + pullRequest.branchName);
console.log(pullRequest.getTitleAndAuthor());