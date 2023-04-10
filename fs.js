const { log } = require('console');
const fs = require('fs');
const path = require('path')

// //create folder
// fs.mkdir(path.join(__dirname, '/nkdebug'), {} ,(err) => {
//     if(err) throw err;
//     console.log('created the folder');
// });
//write to file

// fs.writeFile(path.join(__dirname, '/nkdebug','demo.text'),'heyyy' ,(err) => {
//     if(err) throw err;
//     console.log('written');
// });

// //read

fs.readFile(path.join(__dirname, '/nkdebug','demo.text'),'utf8' ,(err,data) => {
    if(err) throw err;
    console.log(data);
})
 //renamefile
 

