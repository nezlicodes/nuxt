const express = require('express')
const router = express.Router()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
const db = mongoose.connection
id('err', (err) => console.log(err))
idce('open', () => console.log('Connected to database'))

router.get('/api', (req, res) => {
  res.send('Hello api')
})

module.exports = router
