const http = require('http');
http.createServer((req,res)=>{
    res.write('Heyyyy!');
    res.end();

})
.listen(5000,()=> console.log('the server is running'));