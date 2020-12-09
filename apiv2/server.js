const http = require('http')
const qs = require('querystring') 
const url = require('url') 

const Users = require('./users');

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        return handleGetReq(req, res)
    } else if (req.method === 'POST') {
        return handlePostReq(req, res)
    }
})

function handleGetReq(req, res) {
    const { pathname } = url.parse(req.url)
    if (pathname !== '/users') {
        return handleError(res, 404)
    }
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(Users.getUsers()))
}

function handlePostReq(req, res) {

    const size = parseInt(req.headers['content-length'], 10)
    const buffer = Buffer.allocUnsafe(size)
    if(buffer == "") {
        handleError(res, 404);
    }
    else {
        var pos = 0
        const { pathname } = url.parse(req.url)
        if (pathname !== '/user') {
            return handleError(res, 404)
        }

        req 
        .on('data', (chunk) => { 
            const offset = pos + chunk.length 
            if (offset > size) { 
                reject(413, 'Too Large', res) 
                return 
            } 
            chunk.copy(buffer, pos) 
            pos = offset 
            }) 
            .on('end', () => { 
            if (pos !== size) { 
                reject(400, 'Bad Request', res) 
                return 
            }
            const data = JSON.parse(buffer.toString())

            var username = data.username
            var password = data.password
            Users.saveUser(username, password)
            console.log('User Posted: ', data) 
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end('You Posted: ' + JSON.stringify(data))
        })
    }
        
}

function handleError (res, code) { 
    res.statusCode = code 
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`) 
} 

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});