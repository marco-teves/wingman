//app.js
import * as crud from './crudFunctions.js';
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express();
const port = 8080;

app.use(express.static('public', { extensions: ['html'] }));


/* app.get('/activities', async (req, res) => {
  try {
     // Use crud.getActivities()
    const activities = await crud.getActivities();
    console.log('Retrieved activities:', activities);
    res.status(200).send('SUCCESS: activities retrieved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching activities');
  }
}); */

app.get('/activities', async (req, res) => { // Handle requests for the root path ('/')
  try {
    const activities = await crud.getActivities();
    res.json(activities);  // Send the activity names as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching activities');
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
