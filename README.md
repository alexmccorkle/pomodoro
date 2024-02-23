# Pomodoro Timer

Simple Pomodoro timer that I made as a way of practicing/learning React. So far it's a functioning timer where you can adjust the time and either 'Start', 'Pause', or 'Reset' the timer. 

**Latest Update:** 17/02/24

### Features :
- Buttons for increasing/decreasing time
- Buttons for Start/Pause/Reset
  - Reset to 25 minutes
- Animations for 'Work' or 'Rest' states
- Runs as an Electron App
- Sound for when timer ends
- Will reset to set time. 
  - If doing 10 minute timers it will go back to 10 minutes after the rest
- Blinking time when approaching the end
- Imbedded SoundCloud LoFi playlist in the background
  - When you click Play it starts the playlist
  - Pause/Reset pauses the playlist

### How to Package:
- Should be able to package and make an app by running '$npm run build' first, followed by '$npm run package'
- This will create a folder within the root containing the app that can be sent to people 
- Just need to adjust the "package" script in the package.json file if you want to adjust what OS it is packaged for, (i.e. Silicon Chips vs Intel)


### Screenshots : 
#### - How it looks as of 16/02/24:
  <img width="350" alt="Screenshot 2024-02-16 at 21 23 31" src="https://github.com/alexmccorkle/pomodoro/assets/114952775/bf151156-edda-432f-bc1d-c90052b68f4a">
  <img width="350" alt="Screenshot 2024-02-17 at 00 50 28" src="https://github.com/alexmccorkle/pomodoro/assets/114952775/b6c8cbf1-feec-4a15-aa99-8d89b0cec642">




#### - How it looks as of 13/02/24 :
  <img width="350" alt="Screenshot of Work state" src="https://github.com/alexmccorkle/pomodoro/assets/114952775/06541d06-5a97-45bc-939a-2f4192810872">
  <img width="350" alt="Screenshot of Work state" src="https://github.com/alexmccorkle/pomodoro/assets/114952775/85b770a5-f262-44fc-9b1f-760fa8fe7fca">


### To Do : 
  1. Add a sound when the timer ends
  2. Turn into Electron app and all that comes with that
  3. Add sound effects to buttons
  4. Customize button colors and styles, make them cool and pixel style
  5. Implement a settings or a start page to change the work and rest times?
  6. Add animations to the state display instead of text
     a. Make the state display a sprite that is working at a desk when state = work
     b. Make the state display a sprite that is resting when state = rest

