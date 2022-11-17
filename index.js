/*
    erőforrás:
             datas {
                id: sting
                name: string: 
                merchantName : string
                workLocation : string
                taxNumber : string
                banAccountNumber: string
                email: string
                emailServer : string
                checkbox: boolean ?
                endTime: string 
             }
*/



const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); 
});



// read

app.get('/datas', (req,res) =>{

    fs.readFile('./data/datas.json',(err, file) =>{
         
            res.send(file);
        });
      

});

// read by Id

app.get('/datas/:egyediAzonosito', (req,res) =>{
   
   const id = req.params.egyediAzonosito; 

   fs.readFile('./data/datas.json',(err, file) => {

    const datas = JSON.parse(file);

      const dataById = datas.find(data => data.id === id );

      if (!dataById){
        res.status(404);
        res.send({error: `id: ${id} not found`});
        return;
      }

    console.log(dataById);
    res.send(dataById);

   })
   
   

});

// create
app.post('/datas', bodyParser.json(), (req,res) =>{

    
    const newData = {
         id: uuidv4(),
         name: sanitizeString(req.body.name),
         merchantName : sanitizeString(req.body.merchantName),
         workLocation: sanitizeString(req.body.workLocation),
         taxNumber : sanitizeString(req.body.taxNumber),
         banAccountNumber:sanitizeString(req.body.banAccountNumber),
         email: sanitizeString(req.body.email),
         emailServer : sanitizeString(req.body.emailServer),
         checkbox: Boolean(req.body.checkbox),
         endTime: sanitizeString(req.body.endTime),

    }
    fs.readFile('./data/datas.json',(err, file) =>{
         const datas = JSON.parse(file);
         datas.push(newData);
         fs.writeFile('./data/datas.json', JSON.stringify(datas), (err)=> {
             res.send(newData);
         })
          
    })
   
});

// update

app.put('/datas/:egyediAzonosito',bodyParser.json(), (req, res) => {
    const id = req.params.egyediAzonosito;

    fs.readFile('./data/datas.json', (err, file) => {
        const datas = JSON.parse(file);
        const dataIndexById = datas.findIndex(data => data.id === id);

        if(dataIndexById === -1) {
            res.status(404);
            res.send({error: `id: ${id} not found`});
            return;
        }

        const updatedData = {
            id: id,
            name: sanitizeString(req.body.name),
            merchantName : sanitizeString(req.body.merchantName),
            workLocation: sanitizeString(req.body.workLocation),
            taxNumber : sanitizeString(req.body.taxNumber),
            banAccountNumber:sanitizeString(req.body.banAccountNumber),
            email: sanitizeString(req.body.email),
            emailServer : sanitizeString(req.body.emailServer),
            checkbox: Boolean(req.body.checkbox),
            endTime: sanitizeString(req.body.endTime),
          };

          datas[dataIndexById] = updatedData; 

        fs.writeFile('./data/datas.json', JSON.stringify(datas), () => {
            res.send(updatedData);
        });
    });
});
 
 
// delete

app.delete('/datas/:egyediAzonosito', (req,res) =>{
     
        const id = req.params.egyediAzonosito;
    
        fs.readFile('./data/datas.json', (err, file) => {
            const datas = JSON.parse(file);
            const dataIndexById = datas.findIndex(data => data.id === id);
    
            if(dataIndexById === -1) {
                res.status(404);
                res.send({error: `id: ${id} not found`});
                return;
            };
    
            
    
            datas.splice(dataIndexById,1);
    
            fs.writeFile('./data/datas.json', JSON.stringify(datas), () => {
                res.send({id : id});
            });
        });
    });
     
    


app.listen(3000);

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}