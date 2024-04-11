import express from 'express';
import * as crud from './crudFunctions.js';

const app = express();
const port = 8080;


// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
