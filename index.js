const https = require('https')
exports.Issuekit = class Issuekit {
  constructor ({ auth: token, repo, issue: number }) {
    this.token = token
    this.repo = repo
    this.number = number
    if (!token) {
      throw new Error('You must provide a personal access token')
    }
    if (!repo) {
      throw new Error('You must provide a repository')
    }
    if (!number) {
      throw new Error('You must provide an issue number')
    }
  }

  httpsApiRequest (data, path) {
    const req = https.request(
      {
        hostname: 'api.github.com',
        port: 443,
        path: `/repos/${this.repo}/issues/${this.number}/${path}`,
        method: 'POST',
        headers: {
          'User-Agent': 'issuekit',
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          Authorization: 'token ' + this.token
        }
      },
      (res) => {
        if (res.statusCode !== 201) {
          console.error('Status Code is ' + res.statusCode.toString())
          res.on('data', (d) => {
            process.stderr.write(d)
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

  addComment (string) {
    const data = JSON.stringify({
      body: string
    })
    this.httpsApiRequest(data, 'comments')
  }

  addLabels (array) {
    const data = JSON.stringify({
      labels: array
    })
    this.httpsApiRequest(data, 'labels')
  }

  addAssignees (array) {
    const data = JSON.stringify({
      assignees: array
    })
    this.httpsApiRequest(data, 'assignees')
  }
}
