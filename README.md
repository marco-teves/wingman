# wingman HIIT up2109236

I decided to go for a one page app to keep everything in one place to make it easier for the user to experience the app and to find everything they need. 

### notes:
- database doesnt currently work for this prototype submission

## How to use

- after downloading folder, run ``` cd wingman ``` to connect to the folder
- then run ``` npm install i ``` to install node modules
- after that, run ``` npm start``` which will start the server on port 8080




## Key features



### The stopwatch

Features a stopwatch that will go through the workoutArray until it ends. Has animations to warn the user if they have a specific time left/finished, using custom made sound cues.

### Settings menu

Features a drop down menu that acts as a central hub for everything the user can tweak. The user can use the drag and drop feature to plan their workouts, view their stats or find other peoples workouts (work in progress)

### Preload screen

(currently set to 1s)
displays the screen while waiting for dom elements to load.

## AI

> How would i make this display milliseconds  instead of seconds?

Initially, written the code for it to be in seconds, but i felt that displaying it didnt make it feel 'urgent' enough.

It changed some of my code to reflect this and introduced the formatTime function.



