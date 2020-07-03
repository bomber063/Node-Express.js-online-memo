const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))//这里的req就是请求，res就是响应，res.send就是响应的信息发送给前端的请求

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))