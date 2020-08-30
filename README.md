# @issuekit/core.js
## Usage:
### Setup:
```javascript
const { Issuekit } = require('@issuekit/core')
const issuekit =  new Issuekit({
  auth: '0000000000000000000000000000000000000000',
  repo: 'issuekit/core.js',
  issue: '42'
})
```
### Comment on an issue:
```javascript
issuekit.addComment('Hello World')
```
### Add labels to an issue
```javascript
issuekit.addLabels(['hello', 'world'])
```

### Add Assignees to an issue
```javascript
issuekit.addAssignees(['issuekit', 'nthnchu'])
```
