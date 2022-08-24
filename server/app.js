const http = require('http');
const fs = require('fs');

// created file sample and added text "hello" to it
let file = "./sample.txt";
let server = http.createServer((req, res)=>{
    if(req.url == '/read'){
        fs.readFile(file,(err, data)=>{
            if(err){
                res.write("error while reading file!");
            }
            else{
                res.write(data.toString());
            }
            res.end();
        })
    }

    // for appending data at end of file
    else if(req.url == '/append'){
        fs.appendFile(file," appended data to file",(err, data)=>{
            if(err){
                res.write("error while appending data to file!");
            }
            else{
                res.write("data appended successfully!");
                // console contents in terminal
                console.log("see console for file data-> ", fs.readFileSync(file,"utf8"));
            }
            res.end();
        })
    }

    // for renaming file to "oldSample.txt"
    else if(req.url == '/rename'){
        fs.rename(file,"./oldSample.txt", err=>{
            if(err){
                res.write("error while renaming file!");
            }
            else{
                res.write("succesfully renamed file");
            }
            res.end();
        })
    }

    // for deleting file
    else if(req.url == '/delete'){
        fs.unlink(file, err=>{
            if(err){
                res.write("error while deleting file!");
            }
            else{
                res.write("file deleted successfully");
            }
            res.end();
        })
    }
})
server.listen(4000);