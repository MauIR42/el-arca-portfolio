import { createServer } from 'node:http'

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
}

const server = createServer((req, res) => {
  const pathname = req.url?.split('?')[0]

  if (req.method === 'GET' && pathname === '/health') {
    sendJson(res, 200, { status: 'ok' })
    return
  }

  sendJson(res, 404, { error: 'Not found' })
})

server.listen(3001, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3001')
})