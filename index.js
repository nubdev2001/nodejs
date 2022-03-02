const express = require('express')
const app = express()

app.get('/',(req,res) => {
    const { name } = req.query
    res.json({
        name: !name ? "Hi" : `Hi ${name}`
    })
})


app.listen(8080,() => {
    
})