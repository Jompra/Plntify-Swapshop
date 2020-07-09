<img src="https://res.cloudinary.com/jompra/image/upload/v1590678593/plntify_f9zfgd_1_csag9s.svg" alt="Plntify Logo" width="400" />

# Plntify

Plntify is a Swapshop for housplants. It utilizes the MERN stack (MongoDB, Express, React, Node.js). Feel free to take a look at the project deployed on Heroku here [gkj.me.uk/plntify](https://gkj.me.uk/plntify).

## Technologies Used
* Node.js
* MongoDB
* Mongoose
* Express
* React.js
* JavaScript ES6, HTML5, SASS
* JWT
* Bcrypt
* Git + Github
* Bulma CSS Framework

### APIs Used:
* [Mapbox](https://www.mapbox.com/)
* [Trefle.io](https://trefle.io/)
* [Image Moderation](https://www.moderatecontent.com/)
* [Pexels](https://www.pexels.com/api/?locale=en-US)
* [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)

The project was completed by myself, [Aino Kytola](https://github.com/ainokyto), [Jakub Horun](https://github.com/ykbhrn), and [Yarden Lawson](https://github.com/YBL123), in 8 days. To ensure smooth running of the project we used Trello.

## Instructions to install
I recommend that you use the deployed version [here](https://gkj.me.uk/plntify) but if you do want to run it locally you will need to sign up for an API key from each provider listed above. I also assume that you have an up to date version of node, MongoDB, and NPM on your machine. Ensure mongo DB is running.

* Fork and clone this repository
* `$ cd into the project directory`
* `$ npm install` to install dependencies
* `$ open example.env` And change all of the placeholders to your own keys and tokens
* `$ mv example.env .env` to rename file
* If you would like users with 150 example plants between portfolios use `$ npm run seed` to fill database with example data and users.
* `$ cd frontend/` to move into frontend folder
* `$ npm install` to install dependencies
* `$ open example.env` And change all of the placeholders to your own keys and tokens
* `$ mv example.env .env` to rename file
* `$ cd ..` To move back to backend folder
* `$ npm run start` Navigate to localhost:8000 in your browser (Chrome Recommended)

## Instructions for use
Sign up for a new account on the homepage.
There's no email/password validation so don't worry about using correct details.

<img src="https://github.com/Jompra/sei-group-project/blob/master/Readme%20Assets/Sign%20Up.png" alt="Sign Up On the homepage" width="350" />

You'll then be taken to an index page of all of the plants that users have uploaded to the site. Fromhere you can take a look at individual plants by clicking their cards.

<img src="https://github.com/Jompra/sei-group-project/blob/master/Readme%20Assets/Index%20Page.png" alt="Index Page View" />

To add a plant of your own, click 'Add your plant' on the top nav bar. and fill in all of the form fields. Scientific name wil populate the possible options based on the common name that you have added. The location will also autocomplete with options.

<img src="https://github.com/Jompra/sei-group-project/blob/master/Readme%20Assets/Plntify-Demo.gif" alt="Add Plant Form being filled in" />

Once this is added take a look at it in [My Profile](https://plntify.herokuapp.com/profile) from the nav bar.

You can edit plants in your own portfolio from their respective page.
Navigating to someone else's plant will allow you to make an offer to swap their plant for one that you own. Once you both accept the offer and discuss your plans to swap them, they will both be removed from their respective portfolios.

<img src="https://github.com/Jompra/sei-group-project/blob/master/Readme%20Assets/Offer%20Box.png" alt="Make an Offer Box" width="250" />

It's also possible to take a look at all of the plants in your area from the map view. Clicking on their cards will take you to the respective plant's page.

<img src="https://github.com/Jompra/sei-group-project/blob/master/Readme%20Assets/Map%20View.png" alt="Plntify Map View" />

## Development and Planning Process

Whilst exploring the possible options for the app we decided that we liked the idea of platforms such as Depop, and eBay, and thought that a swapshop for items or clothes would provide a good challenge for us. In the week previous I had read about the Trefle.io API and we decided that creating a swapshop for houseplants would give us the opportunity to consume this API.

We started the project by putting together some basic wireframes using [Balsamiq](https://balsamiq.com/). This helped us all ensure we were working towards common goal.

We split tasks up so that individual members could take ownership of specific functions. We came together as a group to solve merge conflicts, squash complex bugs, or when specific features were dependent on the work of another team member.

## Individual Contributions
We found that as a group we worked best when we worked on individual components and pair coded only when we had a complex issue to solve. This meant that we could take ownership of what we were working on and bring in team member help when required. Although I was involved with every aspect of the project, the following components were where I took the lead:
* Building homepage, register and login forms.
* Integrating the Trefle.io API for finding Scientific names.
* Image upload and handling of image moderation to the add new plant form.
* Using the height data to provide conversational text to the user.
* Creating 404 page and adding Pexels API for images.
* Getting information from the Wikipedia API for each uploaded plant.
* Writing the seeds program to fill the database with example data including use of .

## Wins
I was proud fo how well the APIs work in the app. Using the trefle api alongside the wikipedia caption search makes the site feel like a fully fledged product that actually gives the user some information.

I'm also happy with how the seeds file worked out. Due to a time constraint this was thrown together in about 45 minutes but ultimately I'm glad that it works well. It was a test of coding under pressure.

## Challenges
As this was the first time I had been exposed to MongoDB and Mongoose I found it challenging to write custom validators on the database models. After carefully reading the documentation however I was able to make this work.

Although it didn't happen too often it was sometimes a challenge to ensure that we encountered minimal merge conflicts. We made sure that as much as possible we always worked in seperate files however as this sometimes was unavoidable we solved merge conflicts as a group.

## Future features
Given more time I'd have liked to integrate better chat functionality. This is something that we started to integrate towards the end of the project however we quickly realised that making it work to a high standard would not be possible in the time remaining.