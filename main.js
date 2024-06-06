import express from "express";


const app = express()

const PORT = 6969;

// get rout 
app.get('/', (req,res)=>{
    res.json({msg: "Hello students!"})
});

app.listen(PORT, () =>{
    console.log(`The server is runnning at http://localhost:${PORT}`) // in programming when we are using same value in two different palce, we donot do 
                                                                       // because we follow DRY PRINCIPLE (DON'T REPEAT YOURSELF) 
                                                                       // other one is KISS PRINCIPLE (KEEP IT SO SIMPLE)
});