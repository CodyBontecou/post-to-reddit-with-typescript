const snoowrap = require('snoowrap')
require('dotenv').config()

const config = {
  username: process.env.username,
  password: process.env.password,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
}

function postLink(title: string, link: string, subreddit: string) {
  const r = new snoowrap({
    userAgent: 'Whatever',
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    username: config.username,
    password: config.password,
  })
  r.getSubreddit(subreddit).submitLink({
    title: title,
    url: link,
    sendReplies: true,
  })
}

postLink('Testing', 'https://codybontecou.com', 'hotspringers')
