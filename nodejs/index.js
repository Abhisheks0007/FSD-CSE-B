// const http=require('http');

// const myserver = http.createServer((req,res)=>{

//    if(req.url=='/'){
//     res.end('This is ABESEC');
//    }
//     else if(req.url=='/student'){
//         res.end('This is  ABESEC student page');
//     }
//       else if(req.url=='/about'){
//         res.end('This is  about details page');
//       }
//     else if(req.url=='/contact'){
//         res.end('This is   contact details page');
//     }
//     else if(req.url=='/faculty'){
//         res.end('This is  ABESEC faculty page');
//     }
//      else if (req.url == '/image') {
//          res.end('<img src="https://www.abes.ac.in/images/logo.png" alt="ABESEC Logo">');
//      }
//     else{
//         res.end('404 page is not found');
//     }
// })

// myserver.listen(7001,()=>{
//     console.log('server is run');
// })

// const fs = require('fs');
// fs .writeFileSync("./cse-c.txt","cse department");

// result= fs.readFileSync("./cse-c.txt","utf-8");
// console.log(result);

const fs = require('fs');
// fs .writeFile("./a.txt","cse m department",()=>{});

// fs.readFile("./a.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.writeFile("./a.txt","cse department write",()=>{
//     if(err){
//         console.log(err);
//     }
    
// });

// fs.appendFileSync("./a.txt",'cse department append');

// fs .writeFile("./b.txt","",()=>{});

// fs.appendFile("./.a.txt","./b.txt",(err)=>{
   
// });

// fs.cpSync("./a.txt","./b.txt");
// fs.cp("./a.txt","./b.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }


// fs.unlinkSync("./a.txt");

const os=require('os');
console.log("platform",os.platform());
console.log("userinfo",os.userInfo());
console.log("cpu",os.arch());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());