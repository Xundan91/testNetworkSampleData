const express = require("express")
const app = express()
app.use(cors({ origin: 'http://127.0.0.1:5173' }));

let data = {
    network : 11,
    jobs : 12,
    message : 11 ,
    notifications : 23
}

app.get('/',(req,res)=>{
    res.json(data)

})

app.get('/update',(req,res)=>{
    data = {
        network : 100,
        jobs : 11,
        message : 89,
        notifications : 1000

    }
    res.json(data)    
})

app.listen(3000,()=>{
    console.log("server Running");
    
})