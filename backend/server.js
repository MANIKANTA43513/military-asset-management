
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req,res)=>res.send("Backend Running"));
app.listen(5000, ()=>console.log("Server started"));

app.get("/dashboard", (req, res) => {
  const data = {
    purchases: 120,
    transferIn: 60,
    transferOut: 30,
    net: 150,
    assigned: 40,
    expended: 10
  };

  res.json(data);
});
