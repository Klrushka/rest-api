const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()


const CONTACTS = [
    {id: v4(), name: 'Kiryl', value: '+375293567481', marked: false}

]

app.use(express.json())


//GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
})


//POST
app.post('/api/contacts', (req, res) =>{
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201)
    res.json({test: 1})

})


app.use(express.static(path.resolve(__dirname, 'client')))

app.listen(3000, () => console.log('Server started'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.hml'))
})
