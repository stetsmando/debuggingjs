const express = require('express')
const app = express()
const path = require('path')

const availableTalks = require('./talks')

app.use(express.static(path.join(__dirname, '..', 'static')))
app.get('/api/talks', (_, res) => res.json(availableTalks))
app.post('/api/talk/:id/attending', (req, res) => res.send('Ok'))

app.listen(3000, () => console.log('server started...'))
