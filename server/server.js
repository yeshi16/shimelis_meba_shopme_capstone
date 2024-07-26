const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

// middleware for parsing json
app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send('back-end ')
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})