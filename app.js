const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log("Servidor em execução porta 3000");
})