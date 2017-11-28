# Word Counter App

Word Counter is a Node.js based app that allows the users to load their .txt file from a link and check all the words in that document. It also counts how many time a word is repeated and tells you if that number is prime. Pretty cool, huh?!

## How to install

- Make sure you have Node.js installed in your machine. If not, follow this [link](https://nodejs.org/en/) for more details and documentation.
- Clone this repo: `$ git clone https://github.com/rolandosorbelli/word-counter-app`
- Navigate into the folder: `$ cd word-counter-app`
- Install all the node modules and dependencies: `$ npm install`

## How to run the app

At the moment the app renders this text file: [The Railway Children](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt) but if you want to change it simply go to `index.js` and change the url and name on line 20. The app will read the text and split every word in a JSON file which will be saved into the `public` folder.

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

## My approach

I approached the tech test in different ways since I had many ideas in mind. First I wanted to create my app using `React` and render the list of words in a `DOM`, so I started diagramming but then I thought that maybe that would have taken too much time so I decided to go with `Node.js` and `Express` because I still had in mind the idea to render everything on a browser. So I started installing dependencies, writing my first tests and implementing my code and I encountered my first issue: my app was loading the .txt file from the root folder and running it so when I was testing if my functions were splitting the words properly I had some difficulties in loading another file for test purposes (I didn't want to use the same file for testing purposes). I spent some time thinking about my issue, trying to solve it but the more the time ran the more complicated my code became. It was time for a step back!

I spent some time doing extra research regarding another way of loading files, writing them and saving them into different formats and I came across `file system`, a Node.js extension that allows users to work with the file system of their machine, that means that a user can manage to work with storing files. I read their documentation and found some tutorials and I thought that was the thing I needed so I decided that the behaviour of the app would be to read a txt file from a url, save it into the folder of the project, do the the magic and save it again as a JSON file so a user could easily read every word, count and other info. This was totally new for me so I preferred to spend some extra time finding documentation and examples online.

All my functions have been tested using mocha with its library, chai. I tried to be driven by testing first so I could implement my code in a better way and so I did.

The User Stories I created for the development of the app are the following:

## User Stories
```
As a User
so that I can see the content of a given text
I want to be able to load a file into my code
```

```
As a User
so that I can see a word per line on my code
I want to be able to split a text file into separate words
```

```
As a User
so that I can see how many times a word is repeated
I want to be able to count every word in the text file
```

```
As a User
so that I can see if the number of times that a word is repeated is prime
I want to be able to create a function that checks if a number is prime or not
```

```
As a User
so that I can read the saved file every time I desire
I want to be able to save it into my root folder
```