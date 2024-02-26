# Pomodoro Timer

Simple Pomodoro timer that I made as a way of practicing/learning React. Finished with the project for the time being. Have packaged and distributed it to two family members and my girlfriend so they can all use the app when working, and it works!

**Latest Update:** 26/02/24

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


### Future Features : 
  1. Add XP Bar to track Progress of some sort
    a. With rewards for using it often
  2. Options Menu
  3. Choice of music 
  4. Different backgrounds/Character model
  5. Get higher resolution buttons
    a. Right now they're 32x32 and stretched, so would just need to make them the correct size so the buttons are 'clearer'


