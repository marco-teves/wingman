const express = require('express');
const path = require('path');
const port = 8080;
const app = express();
const database = require('./db.js'); 
const {createItem, readItems, updateItem, deleteItem} = require('./crudFunctions.js');



app.use(express.static('public'));

app.use((req,res) =>{
    res.status(404);
    res.sendFile(path.join(__dirname,'404.html'));
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
