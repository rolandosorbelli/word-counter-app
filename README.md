# Word Counter App

Word Counter is a Node.js based app that allows the user to load their .txt file from a link and check all the words in the document. It also counts how many time a word is repeated and tell you if that number is prime. Pretty cool, huh?!

## How to install

- Make sure you have Node.js installed in your machine. If not, follow this [link](https://nodejs.org/en/) for more details and documentation.
- Clone this repo: `$ git clone https://github.com/rolandosorbelli/word-counter-app`
- Navigate into the folder: `$ cd word-counter-app`
- Install all the node modules and dependencies: `$ npm install`

## How to run the app

At the moment the app renders this text file: [The Railway Children](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt) but if you want to change it simply go to `index.js` and change the url and name on line 20. The app will read the file and split every word in a JSON file which will be saved into `public` folder.

## How to test

- Navigate into the folder: `$ cd word-counter-app`.
- Run `mocha`.
- All the tests will appear in the Terminal.

## Tech

I have used different technologies to achieve my goal:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/) - so I could manage all the dependencies
- [Mocha](https://mochajs.org/) and its library [Chai](http://chaijs.com/) for testing
- [Eslint](https://eslint.org/) for linting