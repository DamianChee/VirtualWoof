# Project3 (VirtualWoof)

SEI-49 project 3 (MERN)

This app is a game for dog lovers that do not have the time to take care of real life dogs to have a virtual dog to take care of. The player will have virtual dog that will have stats that they will have to fill up, if not the dog will run away. You will have three tasks that will refresh every day for you to do for your dog. Note that should you fail any of these task, your dog will not like you and will run away if the dog stats reaches 0 or below.

## Features

- Login & Registration
- Lovely cute pet dogs to adopt
- Feed, Train & Play with your furry companion!
- Daily tasks to accomplish with your wonderful furriend based on your goals for this app!
- Adopt more dogs as you increase your closeness and relationship with your furkids!

## Screenshots

This image is the login with a resgistration link that will bring you to the register page.

![Login Page](/Loginpage.png)

THis image is the registration page

![Registration page](/Registrationpage.png)

This image is the main page before adding the dog.

![Landing Page with no dog](/Main01.png)

This image is after clicking on the adding dog button. Here you will select one of the three dogs that are presented to you.

![Adopt a new dog](/Main02.png)

This image is after clicking on the next button. Here you will select one of the three different options in which you want to play the game as.

![Select a goal to work towards](/Main03.png)

This image is after adding the dog to you, there are three buttons and three tasks for you. The button to add dog is greyed out as you can only have one dog for now. The buttons interacts with the dog, and the task correlate to the number to times you click on the buttons.

![Landing page with dog](/Main04.png)

This image is you click one of the three buttons, the dog's stats will increase by one each time. (See the affection number from before and after)

![Interact with dog](/Main05.png)

This image is the dog running away from you should you let the dog's stats reaches 0 or below.

![Neglected dogs run away](/Main06.png)

## Technologies Used

- HTML
- CSS
- Javascript
- React
- MongoDB
- Express

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

[Frontend]

`VITE_SERVER`
`ACCESS_SECRET`
`REFRESH_SECRET`

[Backend]

`PORT`
`DATABASE`
`ACCESS_SECRET`
`REFRESH_SECRET`

## Learning Points

[Frontend]

- Fetch, useEffect, useState, useRef
- Component reuse
- API usage
- React lifecycle

[Backend]

- Mongoose Schemas
- Routers
- Controllers
- Models
- Authentication

## Ice Box

- Animation - Add dog animation. Currently, there are no animations or image to show the user what happens when you do the task. There is only text that shows when you do one of the actions.

- More interactions - Add more interactions with the dog. Currently, there is only three interactions with the dog. We would like to include many other interactions that the dog would like and improve on the specific interactions.

- Interaction cooldown - Add a cooldown to interacting with the dog. Prevent users from spamming interactions and increasing the dog's values too quickly.

## Known Bugs

- Dog values sometimes increase with button click and sometimes require two clicks
- First dog runs away on new user registration (Should be fixed?)
- MUI Button produces error in console

## Authors

- [DamianChee](https://github.com/DamianChee/)
- [thisisanita](https://github.com/thisisanita)
- [Ng-Ting-Wei](https://github.com/Ng-Ting-Wei)

## Acknowledgements

- [Phind](https://www.phind.com/search?home=true)
- [Material UI](https://mui.com/)
- [Stackoverflow](https://stackoverflow.com/)
- [Awesome Readme Editor](https://readme.so/editor)
