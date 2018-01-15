const request = require('request')

const tokens = require('./tokens.json')

const NOTIFY_URL = 'https://notify-api.line.me/api/notify'

const notify = (entry) => {
  tokens.forEach((token) => {
    const title = entry.title
    const link = entry.link

    const data = {
      url: NOTIFY_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token.value}`
      },
      formData: {
        message: `${title}\r\n${link}`
      }
    }

    console.log(`sending notification to ${token.name}...`)

    request.post(data, (err, res) => {
      if (err) {
        console.error(err)
      }
      console.log(res.body)
    })
  })
}

module.exports = {
  notify
}
