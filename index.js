var http = require('http');

const server = http.createServer(function (req,res){
    if(req.url === '/'){
        res.send('<p>Home.html<p>')
    }
    if(req.url === '/one'){
        
    }
    if(req.url === '/two'){
        
    }
    if(req.url === '/three'){
        
    }
    if(req.url === '/four'){
       
    }
    if(req.url === '/five'){
        
    }
    if(req.url === '/six'){
        
    }
})

server.listen(5000)