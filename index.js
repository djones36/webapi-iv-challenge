const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json("Hello World")
})

//for heroku dynamic port
//We can read the PORT value added by heroku
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\napi running on ${port}\n`))