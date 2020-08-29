# @issuekit/core.js
## Usage:
### Comment on an issue:
```javascript
const issuekit = require('@issuekit/core')
issuekit.comment.add({
  token: '0000000000000000000000000000000000000000', // Add a Personal Access Token here. It should at least have the public_repo scope.
  body: 'This comment was made with [issuekit](https://github.com/issuekit/core.js)!', // The body of your comment. Supports markdown. Newlines are \n
  issue: '42', // The issue number you want to comment on.
  repo: 'issuekit/core.js' // The repository that has the issue
})
```
### Add labels to an issue
```javascript
const issuekit = require('@issuekit/core')
issuekit.labels.add({
  token: '0000000000000000000000000000000000000000', // Add a Personal Access Token here. It should at least have the public_repo scope.
  labels: ['issuekit', 'bot'], // The labels you want as an array.
  issue: '42', // The issue number you want to add labels to.
  repo: 'issuekit/core.js' // The repository that has the issue.
})
```

### Add Assignees to an issue
```javascript
const issuekit = require('@issuekit/core')
issuekit.assignees.add({
  token: '0000000000000000000000000000000000000000', // Add a Personal Access Token here. It should at least have the public_repo scope.
  assignees: ['issuekit', 'nthnchu'], // The people you want to assign as an array.
  issue: '42', // The issue number you want to add labels to.
  repo: 'issuekit/core.js' // The repository that has the issue.
})
```
