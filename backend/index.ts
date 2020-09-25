import express from 'express'
const app = express()
app.use(express.json())

// App info
const CLIENT_ID = "Iv1.e8426b3c0727bfb5"
//const CLIENT_SECRET =  "60ed1f1c3ab76fd50e84a72e2257122b9132ab30"

app.get('/', (_req: any, res: any) => {
    res.send('<h1>Hello World!</h1>')
})

// Github authentication
app.get('/auth/gh', (_req: any, res: any) => {
  const redirect_uri = 'http://localhost:3001/login/ghcb'
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}`
  )
})

app.get('/login/ghcb', (_req: any, res: any) => {
  res.json({ code: `${_req.query.code}` })
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})