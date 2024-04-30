// server.js
import express from 'express';
import path from 'path';
import * as crud from './crudFunctions.js';

const __dirname = path.resolve();
const app = express();
const port = 8080;

app.use(express.static('public', { extensions: ['html'] }));
app.use(express.json());

//get
app.get('/activities', async (req, res) => {
    try {
        const activities = await crud.getActivityNames();
        res.json(activities);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching activities');
    }
});

app.get('/activityTimes', async (req, res) => {
    try {
        const activities = await crud.getActivityTimes();
        res.json(activities);
    } catch (error) {
        res.status(500).send('Error fetching activities');
    }
});

app.get('/workoutTimes', async (req, res) => {
  try {
      const activities = await crud.getActivities();
      const workoutTimes = {};
      activities.forEach(activity => {
          workoutTimes[activity.activity_name] = activity.activity_duration;
      });
      console.log('Workout times fetched from database:', workoutTimes);
        res.json(workoutTimes);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching workout times');
  }
});

app.get('/isUserGenerated', async (req, res) => {
    try {
        const isUserGenerated = await crud.isUserGenerated();
        res.json(isUserGenerated);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching isUserGenerated data');
    }
});

app.get('/getInfoPageData', async (req, res) => {
    try{
        const infoPageData = await crud.getInfoPageData();
        res.json(infoPageData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching info page data');
    }
});

//post

app.post('/addActivity', async (req, res) => {
    console.log('Request body:', req.body);
    try {
        const { activityName, duration, description } = req.body;
        await crud.addActivity(activityName, duration, description);
        res.status(200).send('Activity added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding activity');
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
