// server.js

import express from 'express';
import path from 'path';
import * as crud from './crudFunctions.js';

const __dirname = path.resolve();
const app = express();
const port = 8080;

app.use(express.static('public', { extensions: ['html'] }));

app.get('/activities', async (req, res) => {
    try {
        const activities = await crud.getActivityNames();
        res.json(activities);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching activities');
    }
});

app.get('/workoutTimes', async (req, res) => {
  try {
      // Code to fetch all workout names and times from the database
      const activities = await crud.getActivities();
      const workoutTimes = {};
      activities.forEach(activity => {
          workoutTimes[activity.activity_name] = activity.activity_duration;
      });
      console.log('Workout times fetched from database:', workoutTimes); // Log the fetched data
        res.json(workoutTimes); // Send all workout names and times as JSON response
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching workout times');
  }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
