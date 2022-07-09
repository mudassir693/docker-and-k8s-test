const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    return res.status(200).json({data:"does it goes fine,?"})
})
const port = 5000; 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})