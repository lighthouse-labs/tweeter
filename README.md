# Tweeter Project

Tweeter is a simple, single-page Twitter clone. Created with jQuery, HTML, and CSS, and featuring data persistence through MongoDB.

Tweets are displayed newest first
!["Screenshot of tweets"](https://github.com/JohYoshida/tweeter/blob/master/docs/tweets.png?raw=true)
Click Compose to begin tweeting
!["Screenshot of composition box"](https://github.com/JohYoshida/tweeter/blob/master/docs/compose.png?raw=true)
Tweet composition features dynamic character counter
!["Screenshot of tweet exceeding character counter"](https://github.com/JohYoshida/tweeter/blob/master/docs/char-counter.png?raw=true)
Keep your tweets within 140 characters!
!["Screenshot of posting tweet exceeding character counter"](https://github.com/JohYoshida/tweeter/blob/master/docs/post-char-overflow.png?raw=true)
Hover over any tweet to see share icons
!["Screenshot of icons displayed when hovering on a tweet"](https://github.com/JohYoshida/tweeter/blob/master/docs/on-hover.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- MongoDB
- body-parser
- chance
- md5
