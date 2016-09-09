# Aware

Globally, we lack real time access to on the ground information leading to increased danger and fear in crisis situations.</p>

The Solution: AWARE - A user generated news board. accessible to anyone who has a mobile phone. Simply text us with your update. The application will autopopulate based on your area code which State, City, and Zip Code the update concerns, creating a feed of critical information in your area.

Thanks for helping keep your community Aware.

Check for updates at https://kevin-kabore.github.io/AwareFrontEnd/#/

### Technologies Used
- Twilio API to receive and save user text messages in MongoDB
- NGrogk Webhook to connect Twilio API to local database
- MongoDB as database
- Angular as a front end web framework
- Express.js as a Node.js server side framework
- Node.js as an interface to the V8 Javascript runtime
- Json Web Tokens for user authentication and authorization
- Heroku for back end API deployment
- Gh-Pages for front end deployment and API consumption


[Snapshot1](frontEnd/images/Aware1.png)
[Snapshot2](frontEnd/images/Aware2.png)


### Approach Taken
Started off by signing up for Twilio and obtained a twilio number. Installed Ngrok whoch is a webhook that allowed my Twilio number to connect with my local database then generated my application and set up my backend configuration. Set up my models to capture my Twilio data and configured routes.

Went to the front end and built out my Angular App with appropriate factories and controllers to gather data from my database and API resources. Rendered that data in my html templates using Angular Directives.

### How to run this app locally
- Fork & Clone this repository.
- Open from the command line, cd inside of /api and run: npm install on the command line
- in the same directory run: node config/seeds.js to seed data
- Run: nodemon to activate your local server
- Enjoy!

### Unsolved Problems
Some unsolved problems include letting the user specify which area he is currently in. Twilio's API returns location data based on the User's phone area code and not current location. Major Hurdles that were overcome were figuring out how to save those text messages. Allowing Users that signed up on the web platform to view their text message updates was also a challenge in itself.
