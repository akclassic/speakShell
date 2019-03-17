const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const shell = require('shelljs');

const pwd = shell.exec('pwd');
console.log('pwd'+pwd);

//middleware to deliver static folder
app.use('/',express.static(path.join(__dirname,'/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/input',(req,res)=>{

    console.log(req.body.transcript);
    if(fs.existsSync(`${__dirname}/${req.body.transcript}.sh`)){
        shell.exec(`./${req.body.transcript}.sh`);
    }else{
        console.log('file not found');
    }
    
    // if(shell.exec(`find | grep ${__dirname/req.body.transcript}.sh`)){
    //     shell.exec(`./${req.body.transcript}.sh`);
    // }else{
    //     console.log('file not found');
    // }

    // shell.exec(`python ideone_sh0Ph9.py ${req.body.transcript} `);
      
    
    // console.log(text);
    res.sendStatus(200);
});

app.listen(4500,()=>{
    console.log('server started at 5000');
});