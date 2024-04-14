# wingman HIIT up2109236

 
## Key Features

### The Stopwatch Page
The stopwatch page is the main part of the app that the user will be spending the most time on. It is the first page the user will see when opening the app.

#### Key Parts:

- At the top, there is an **Arrow Button** that will reveal the settings menu, where users can plan their workout session and add activities. This will be explained in depth in the next section.

- The **Stopwatch Circle** and the **Timer** are the main component of the app:

    - The **Stopwatch Circle** displays to the user the current workout and the next workout to ensure they will know what is next. When a workout is active, it will play a pulsing animation to confirm to the user that the workout session is active.

    - The **Timer** displays a countdown that represents the individual workout duration in seconds and milliseconds. Depending on the time, the Timer will also play audio cues to warn the user if there is ten seconds left, if it is a rest period, or if the workout session is finished. The timer text color will also update to yellow when there is ten seconds left

- **Play** and **Pause** buttons:
    - The **Play** button will play the entire workout session. If there are no items inside the playlist in the settings menu, it will flash red and play an error sound, indicating that the user will need to establish a workout playlist first. If the workout countdown is already active, when pressed, the Play button will also flash red and will play an error sound. This is to avoid creating multiple instances of the countdown timer.

    - Users at any time, when the countdown is running, are able to pause the countdown timer using the **Pause** button. Visual and auditory feedback are given to the user when it is pressed. The user can press it again to resume the session.

### The Settings Menu

This menu will be revealed as soon as the user clicks on the arrow button. This is the page that the user will interact with when creating, editing and deleting workout sessions and activities. It is made up of the following components:

 - **Workout Options:** This area of the settings menu will display the default and custom workouts from the database. The user will be able to scroll on the x-axis to search for a specific workout. Each workout item is draggable and can be dropped into the playlist section.

 - The **Playlist** is the area that the user will use to drop workout items onto. At this point of writing the README, the playlist limit is set to 5 items. 

 - To manipulate the playlist, difficulty and workout items, users will interact with the **Utility Bar** that is located below the playlist. It contains several buttons and all buttons will play a button click sound:
    
    - **Delete Button** will delete the entire playlist. Pressing the delete button after confirming a workout will turn grey.

    - **Difficulty Slider** will set the difficulty of the session, adjusting the time allowed for rests. When the confirm button is pressed, the Stop Watch UI will change colour to reflect on the difficulty.

    - **Add Workout Button** will allow the user to add a custom workout activity. Will display a pop up asking the user to fill out the workout name, duration and description.

- The **Confirm Button** will read all the workout items inside the playlist, and will send it to the stopwatch. Initially it is greyed out, telling the user that they would need to fill out the playlist first. To make sure the user does so, when pressed it will flash red and play an error sound to indicate the playlist is empty. The button will turn green if there are workouts in the playlist. Users will be able to change the workouts and re-confirm to update the playlist.

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



