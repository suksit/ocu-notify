const cheerio = require('cheerio')
const fs = require('fs')
const parser = require('rss-parser')
const url = require('url')

const udemy = require('./udemy')
const eduonix = require('./eduonix')
const simple = require('./simple')

const oldEntries = require('./entries.json')

const FEED_URL = 'http://www.onlinecoursesupdate.com/feeds/posts/default?alt=rss'

parser.parseURL(FEED_URL, (err, parsed) => {
  if (err) {
    console.error(err)
    return
  }

  fs.writeFileSync('entries.json', JSON.stringify(parsed.feed.entries, null, 2))

  if (oldEntries.length === 0) {
    console.log('saved initial entries')
    return
  }

  const newEntries = parsed.feed.entries.filter((entry) => {
    return oldEntries.filter((oldEntry) => {
      return oldEntry.guid === entry.guid
    }).length === 0
  })

  console.log(`found ${newEntries.length} new entries`)

  newEntries.forEach((entry) => {
    const $ = cheerio.load(entry.content)
    const course = $('.take-btn a').attr('href')

    switch (url.parse(course).hostname) {
      case 'www.udemy.com':
        udemy.notify(entry, course)
        break
      case 'www.eduonix.com':
        eduonix.notify(entry, course)
        break
      default:
        simple.notify(entry)
    }
  })
})
