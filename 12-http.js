const http=require('http');
//create server method include 2 parameters which are objects...req object representing the incoming request it will contain info about the method and all that webpage stuff
//res is the object having the response back to the fnc
const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.write('Welcome to our home page');
    // res.end(); 
    if(req.url==='/'){
        res.end('We can parametrised text in end fnc as well');
    }
    if(req.url==='/about'){
        res.end(`<h1>Oops!</h1>
        <p>here is a short history</p>
        <a href="/"> back home </a>`);
        // res.end('here is a short history ');
    }
})
server.listen(5000);// localhost:5000 is the address where our web server listens to and responds to requests given in createServer fnc