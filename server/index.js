require('dotenv').config()
const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser');
const router = require('./router')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const postsRouter = require('./routers/posts/index')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Important middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  // Routing
  app.use(router);
  app.use('/api/posts', postsRouter)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
