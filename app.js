const express = require('express')
const{router} = require("./router/index.js")
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const cors = require("cors");


app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());



app.use("/", router)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })