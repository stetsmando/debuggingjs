const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const availableTalks = require('./talks')

app.use(express.static(path.join(__dirname, '..', 'static')))
app.get('/api/talks', (_, res) => res.json(availableTalks))
app.post('/api/talk/:id/attending', (req, res) => {
  try {
    const talk = req.body
    availableTalks[talks.id] = talk
    res.json(talk)
  } catch (error) {
    res.status(500).json({})
  }
})

app.listen(3000, () => console.log('server started...'))
