const express = require('express');
const mongo = require('mongoose');
const body = require('body-parser');
const route = require('./Routes/index');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 2020;
const host = '0.0.0.0';
const cors = require('cors');
const mongoUrl = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use('/api',route); 
mongo.connect(mongoUrl,{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(
    () =>
    {
        app.listen(port,host,() => {
            console.log(`Server running at  ${host}:${port}`);
        });
    }
).catch(
    () =>{
        // document.write("Error their");
        console.log("Error ");
    }
)

