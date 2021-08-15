const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url === '/about'){
        //blocking code
        for(let i = 0; i<1000; i++){
            for(let j = 0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }
//    res.end('Error page')

})

server.listen(3001, () => {
    console.log('server is listning on port 3001...')
})