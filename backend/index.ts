import express from 'express'
const app = express()
app.use(express.json())

// App info
const CLIENT_ID = "Iv1.7c7e5687129a365a"
//const CLIENT_SECRET =  "e55d0a2b2f414f42825fd0d1943d956af613e9bc"

app.get('/', (_req: any, res: any) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/auth/GH', (_req: any, res: any) => {
  const redirect_uri = 'http://localhost:3001/auth/GHCB'
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}`
  )
})

app.get('/auth/GHCB', (_req: any, res: any) => {
  res.json({ code: `${_req.query.code}` })
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})