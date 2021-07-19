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

const url =
  'https://codybontecou.com/post-to-reddit-with-nodejs-and-typescript.html'
const title = 'Post to Reddit using its API'
const subreddits = ['webdev', 'learnjavascript', 'typescript', 'programming']

subreddits.forEach(subreddit => postLink(title, url, subreddit))
