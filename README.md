# wingman HIIT up2109236

Introducing wingman, a High Intensity Interval Training app.

I designed it to be a stopwatch centric app that is stylized with an 'arcade-y' theme.

# Table of contents
- [Key Features](#key-features)
   
    - [The Stopwatch Page](#the-stopwatch-page)
    - [The Settings Menu](#the-settings-menu)
- [Installation](#installation)
- [How To Use](#how-to-use)
- [Prototype vs Final Submission](#prototype-vs-final-submission)
- [AI](#ai)
- [Credits](#credits)

 
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

- Social media share buttons:
    - Users will be able to click on the respective social media icons to share their *completed* workout. The user must complete their workout to be able to share to social media. 

### The Settings Menu

This menu will be revealed as soon as the user clicks on the arrow button. This is the page that the user will interact with when creating, editing and deleting workout sessions and activities. It is made up of the following components from top to bottom:

- **Workout Info Button** Opens up the workout info menu where the user can scroll up and down to view every workout in the database. It will show the name, duration and description for users who want to know more about a specific workout.

- **Workout Options:** This area of the settings menu will display the default and user-generated workouts from the database. The user will be able to scroll on the x-axis to search for a specific workout. Each workout item is draggable and can be dropped into the playlist section.

    #### Note: on mobile, you need to touch and hold then release to drop the item to the playlist

    - **Default** and **User-Generated** activities will be coloured white and green respectively.

- The **Playlist** is the area that the user will use to drop workout items onto. Currently, the playlist limit is set to 15 items.

    - **Justification:** Initially, I designed it to have around 6 drop down menues that acted as slots for the user to put their activities in. This proved to be cumbersome and limited so I opted for something that the user is already familiar with; playlists similar to Spotify, Youtube etc. This made the user experience more intuitive.

 - To manipulate the playlist, difficulty and workout items, users will interact with the **Utility Bar** that is located below the playlist. It contains several buttons and all buttons will play a button click sound:
    
    - **Delete Button** will delete the entire playlist. Pressing the delete button after confirming a workout will turn grey.
        - **Justification:** couldn't quite figure out how to drag and drop an item already in the playlist to anywhere else to simulate deleting. Instead I added a button that deletes all items.

    - **Difficulty Slider** will set the difficulty of the session, adjusting the time allowed for rests. When the confirm button is pressed, the Stop Watch UI will change colour to reflect on the difficulty.
        - **Justification:** Wanted a more intuitive user experiece, difficulty are color coded. However, this assumes that the user is not colourblind and does not have any setting to change colour.

    - **Add Workout Button** will allow the user to add a custom workout activity. Will display a pop up asking the user to fill out the workout name, duration and description.
        - **Justification:** Because it is located in the utility bar, In my opinion this makes editing and adding activities more streamlined. (this applies to all buttons in the utility bar)

- The **Confirm Button** will read all the workout items inside the playlist, and will send it to the stopwatch. Initially it is greyed out, telling the user that they would need to fill out the playlist first. To make sure the user does so, when pressed it will flash red and play an error sound to indicate the playlist is empty. The button will turn green if there are workouts in the playlist. Users will be able to change the workouts and re-confirm to update the playlist.

## Installation

1) after downloading folder, run ``` cd wingman ``` to connect to the folder
2) then run ``` npm install i ``` to install node modules
3) after that, run ``` npm start``` OR ``` node app.js``` which will start the server on port 8080.

    - On the terminal, it should say:
> Database migration starting

> Server is running on http://localhost:8080

> Database migration DONE

4) Then CTRL + Click on ```http://localhost:8080```, OR on your chosen browser, visit http://localhost:8080

5) If you wish to exit the server, in your terminal CTRL + C to close the server.

## How to use

**Stop Watch**

Upon visiting localhost:8080, you will be greeted by the stop watch menu.

- Initially the stop watch circle will be greyed out, clicking on the start and pause button will do nothing and clicking on the social media icons will alert the user to complete a workout first.

**Settings menu**

At the very top of the stopwatch menu there is an arrow down button. This will toggle the settings menu.

- At the very top, there is the workout info button that will display each workout name, duration and description currently in the wingman database.

-  Directly below it is the workout options: 
    - **Scroll Up/Down** or **Swipe Left/Right** to browse all the available workout activities.
    - Activities coloured **white** are **default activities**
    - Activities coloured **green** are **user-generated activities**

- Below that is the workout playlist. While it can have an infinite amount of activities, I have set the limit to **15 activities**
    - On desktop: **Drag and drop** to add an item to the playlist
    - On mobile: **Touch and hold** for more than 250 ms to add the item

- Following the playlist, the next part is the utility bar.
    - Delete button: Deletes all items from the playlist.
    - Difficulty: Click or drag to set the difficulty. Lenient (easy), Standard (medium), Expert (hard). 
        - This will only modify the rest times
    - Add workout: Will prompt the user for the name, duration and description and will add that workout to the options.

- And finally, the confirm button.
    - Will only confirm if there is at least one activity in the playlist.
    - If deleted a playlist, it will reset the state to unconfirmed
    - Will change the colour of the settings menu button toggle, the stopwatch colour and the next workout text colour to reflect the difficulty.


## Prototype vs Final Submission

I have greatly improved my final submission compared to my first prototype submission.

### Missing / Under developed features : Prototype

My prototype submission contained just the basic countdown and stopwatch page. The workout array was hard coded and the settings menu was extremley basic, with no way to actually utilize the front end to allow the user to make their own workout playlists. It also didnt support mobile users, i.e the css not appearing correctly on mobile and the drag and drop features not supporting touch.

Workout items and times were also hard coded and did not have a database to store them in, nor did it have a functioning server to interact between the front and back end.

### Improving the app

I re designed the settings and went through multiple iterations to get to the final result.

My philosophy that I go by is designing the interface based on what the user already knows. This means taking inspiration from other popular apps that the user may know, such as Spotify, YouTube and Instagram to name a few.

- I took inspiration from Instagram's story bar at the top of their app, which eventually led to the ability to swipe left and right to view and browse all workout options in my app.
- YouTube and Spotify's playlist inspired my own playlist feature as I felt it was a natural way to approach organizing a users workout playlist.
- TikTok/Instagram Reels/ YouTube Shorts inspired the workout info menu in a sense that the user can swipe up and down to view each workout info.

Added a server and database to send/recieve and store data between the client and database.

I added a next workout preview inside the stopwatch circle to notify the user what their current and next workout is.

Added social media share buttons to allow the user to flex on their friends, but only after they complete their workout.

Improved the CSS to make the app style accordingly based on if the user is on mobile or desktop.

Added touch functionality for mobile users when building their workout playlist.

## AI

### Prompts to develop the countdown.js

> How would i make this display milliseconds instead of seconds?

Initially, written the code for it to be in seconds, but i felt that displaying it didnt make it feel 'urgent' enough.

It changed some of my code to reflect this and introduced the formatTime function.

### Prompts to develop draganddrop.js

> I want to add touch functionality for my drag and drop js file, using my drag and drop functions, how would you approach adding touch functionality? ( i pasted my existing drag and drop code here)

The AI initially proposed to measure when the touch started, and the co-ordinates of where touch ended to determine if the user dragged and dropped it into the playlist div area. I tested the code it gave me, but i felt like it wasnt the right approach and was too complex so I proposed getting the user to touch and hold an activity to add it to the workout playlist (see next prompt).


> Similar to my drag and drop functions, i would like to measure the time between the touch start and touch end, and if the difference is greater than 250 ms, i would like to data transfer the text of the playlist item and clone and append it to the playlist div.

I recognized that users who are on mobile may accidentally touch an item, so i implemented a system that checked the difference between the touch start time and end time so the user has to hold for a specific time to add it to the playlist.

> I added code that checks when the user holds, if they move, it will be detected as a swipe, which cancells the data transfer to the playlist. Why is it always detecting it as a swipe?


Because of the way the options div displays each activity, the user will need to scroll/swipe on the x axis to browse each activity item. The issue is that the user will inevitably touch a workout item, and the current system doesnt recognize if the user wants to swipe or add an item to the playlist. The AI added minor modifications to my code, specifically adding a threshold that detects if the user has moved more than 10px on the x axis - which will detect as a swipe if so.

### AI Prompts for Styling styles.css

> How can i animate my stopwatch div to pulse every second?

I thought that I would have to use JavaScript to animate the stop watch to pulse, but instead the AI introduced me to the **@key-frames** in css. To understand it more, I looked at the MDN docs for it and learnt how to make custom animations for my app. I then used this to make my own custom animations for the error buttons flashing red and for the drop down.

# Credits
Fonts Used: 

- 'Pil Love': https://www.dafont.com/pil-love.font
- 'Arial'

Icons provided by: 
- Google Material Icons: https://fonts.google.com/icons
- Icons8: https://icons8.com/

All audio effects are custom made by me using FL Studio 21

###
