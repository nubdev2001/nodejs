const express = require('express')
const app = express()

app.get('/',(req,res) => {
    const { name } = req.query
    res.json({
        name: !name ? "Hi" : `Hi ${name}`,
        status: 200
    })
})


app.listen(8080,() => {
    console.log("Server isrunning on port : 8080")
})
