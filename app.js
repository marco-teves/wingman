const express = require('express');
const port = 8080;
const app = express();
const database = require('./db.js'); 


// routes
app.use(express.static('public'));

app.use((req,res) =>{
    res.status(404);
    res.send('<h1>404 File not found :(((((((((</h1>');
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
