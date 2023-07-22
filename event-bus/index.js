const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
const events = []

app.post('/events', (req, res) => {
    try {
        const event = req.body
        events.push(event)
        axios
            .post('http://posts-clusterip-srv:4000/events', event)
            .then(() => {
                console.log('Post API called successfull')
            })
            .catch((err) => {
                console.log(err.message)
            })
        axios
            .post('http://comments-clusterip-srv:4001/events', event)
            .then(() => {
                console.log('Comment API called successfull')
            })
            .catch((err) => {
                console.log(err.message)
            })
        axios
            .post('http://query-clusterip-srv:4002/events', event)
            .then(() => {
                console.log('Query API called successfull')
            })
            .catch((err) => {
                console.log(err.message)
            })
        axios
            .post('http://moderation-clusterip-srv:4003/events', event)
            .then(() => {
                console.log('Moderation API called successfull')
            })
            .catch((err) => {
                console.log(err.message)
            })

        res.send({ status: 'Ok' })
    } catch (error) {
        res.send({ status: 'not okay' })
    }
})

app.get('/events', (req, res) => {
    try {
        res.send(events)
    } catch (error) {}
})

app.listen(4005, () => {
    console.log('Listening on 4005')
})
