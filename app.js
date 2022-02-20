const express = require("express");
const app = express();
const port = 8080;
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/clock.html");

});

app.listen(process.env.PORT || port,()=>{
    console.log("Server is now running on port:",port);
});