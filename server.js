require('dotenv').config();

const express = require('express');
const app = express();
let bodyParser = require('body-parser');
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded(({ extended: true })));

require(`${__dirname}/app/routes`)(app);

app.get('/', (req, res) => {
    res.send("server is running")
})


app.listen(port, () => {
    console.log(`server app listening at ${port}`)
});