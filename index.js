// create server
const http= require("http")
const port= 3000;
const server=http.createServer((req,res)=>{
    const fullName={
        firstName:"Srimokan",
        lastName:"Rivethika"
    }
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(fullName));
});
server.listen(port,()=>{
    console.log(`Sever running at ${port}`)
});

// create file server(fs)
const fs= require(`fs`);
fs.writeFile(`file.txt`,`hello,world`,(err)=>{
    if(err) throwerr;
    console.log("data written file")
});


// read file
fs.readFile(`file.txt`,`utf8`,(err,data)=>{
    if(err)throw err;
    console.log(data);
});