const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const APIroutes = require("./routers/index");

const PORT = 9876

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(APIroutes);

app.listen(PORT,async ()=>{
    
    console.log(`Server started at ${PORT}`);

});