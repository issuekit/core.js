const https = require('https')
const commentCreate = (object) => {
  const token = object.token
  const body = object.body
  const issue = object.issue
  const repo = object.repo
  if (!token) {
    throw new Error('You must provide a token')
  }
  if (!body) {
    throw new Error('You must provide a body')
  }
  if (!issue) {
    throw new Error('You must provide an issue number')
  }
  if (!repo) {
    throw new Error('You must provide a repository')
  }
  const data = JSON.stringify({
    body: body
  })
  const req = https.request(
    {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${repo}/issues/${issue}/comments`,
      method: 'POST',
      headers: {
        'User-Agent': 'issuekit',
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Authorization: 'token ' + token
      }
    },
    (res) => {
      if (res.statusCode !== 201) {
        console.error('Status Code is ' + res.statusCode.toString())
        res.on('data', (d) => {
          process.stdout.write(d)
        })
      }
    }
  )
  req.on('error', (error) => {
    throw error
  })
  req.write(data)
  req.end()
}

const labelsAdd = (object) => {
  const token = object.token
  const labels = object.labels
  const issue = object.issue
  const repo = object.repo
  if (!token) {
    throw new Error('You must provide a token')
  }
  if (!labels) {
    throw new Error('You must provide labels')
  }
  if (!issue) {
    throw new Error('You must provide an issue number')
  }
  if (!repo) {
    throw new Error('You must provide a repository')
  }
  const data = JSON.stringify({
    labels: labels
  })
  const req = https.request(
    {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${repo}/issues/${issue}/labels`,
      method: 'POST',
      headers: {
        'User-Agent': 'issuekit',
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token ' + token
      }
    },
    (res) => {
      if (res.statusCode !== 200) {
        console.error('Status Code is ' + res.statusCode.toString())
        res.on('data', (d) => {
          process.stdout.write(d)
        })
      }
    }
  )
  req.on('error', (error) => {
    throw error
  })
  req.write(data)
  req.end()
}

const assigneesAdd = (object) => {
  const token = object.token
  const assignees = object.assignees
  const issue = object.issue
  const repo = object.repo
  if (!token) {
    throw new Error('You must provide a token')
  }
  if (!assignees) {
    throw new Error('You must provide assignees')
  }
  if (!issue) {
    throw new Error('You must provide an issue number')
  }
  if (!repo) {
    throw new Error('You must provide a repository')
  }
  const data = JSON.stringify({
    assignees: assignees
  })
  const req = https.request(
    {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${repo}/issues/${issue}/assignees`,
      method: 'POST',
      headers: {
        'User-Agent': 'issuekit',
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token ' + token
      }
    },
    (res) => {
      if (res.statusCode !== 201) {
        console.error('Status Code is ' + res.statusCode.toString())
        res.on('data', (d) => {
          process.stdout.write(d)
        })
      }
    }
  )
  req.on('error', (error) => {
    throw error
  })
  req.write(data)
  req.end()
}

exports.comment = { add: commentCreate }
exports.labels = { add: labelsAdd }
exports.assignees = { add: assigneesAdd }
