const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('mock-db.json')
const middlewares = jsonServer.defaults()
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'GET' && req.url === '/detainees') {
    const failure = randomBetween(1, 5)

    if (failure !== 5) {
      const detainees = router.db.get('detainees').value().slice(0)
      res.send(JSON.stringify(detainees))
    } else {
      res.sendStatus(400)
    }
  }
  next()
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
