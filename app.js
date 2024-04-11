//app.js

import express from 'express';
import * as crud from './crudFunctions.js';

const app = express();
const port = 8080;


// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/check-connection', async (req, res) => {
    try {
      // Get the table name from the query parameter
      const tableName = req.query.tableName;
      
      if (!tableName) {
        throw new Error('Missing table name parameter');
      }
  
      // Attempt to read the table
      const rows = await crud.readTable(tableName);
      
      // Print the table contents to the console
      console.table(rows);
      
      // Send a success response
      res.status(200).send(`Successfully read table: ${tableName}`);
    } catch (error) {
      // Log the error and send a failure response
      console.error(error);
      res.status(500).send('Failed to read table.');
    }
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
