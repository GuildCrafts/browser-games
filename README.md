# Browser Games

A collection of games to play in a web browser. See the full list of games in the [games.md](games.md) file.

## Installation and Setup

Clone the repo, install npm dependencies, and start the server:

```shell-session
$ git clone git@github.com:GuildCrafts/browser-games.git
$ cd browser-games
$ npm install

...

$ npm start
...
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:4321
  http://10.0.1.11:4321
```

Then open `http://localhost:4321/` in your browser of choice and play away!

# Tetris
## Description

Build a Tetris game in the browser using HTML, CSS, JavaScript, and the jQuery library.

Fork the the browser-games repository and use the fork as your project artifact. It is recommended that you follow along with this tutorial: https://github.com/jonhoo/tetris-tutorial/.

Implement the Tetris game from the list in the games.md file.


## Context

This goal will challenge your ability to take a formal, defined system from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript + jQuery, HTML, and CSS.

## Specifications

### General

 [] Artifact produced is a fork of the browser-games repo.

 [] Variables, functions, files, etc. have appropriate and meaningful names.

 [] HTML, CSS, and JS files are well formatted with proper spacing and indentation.

 [] There is a clear separation of game logic code from view/rendering code.

 [] All major features are added via pull requests with a clear description and concise commit messages.

 [] The artifact produced is properly licensed, preferably with the MIT license.
Tetris

 [] User stories and features for the game are added as issues to your repo with the label feature or user-story

[] You’ll have to define these yourself by looking at the rules of the game and coming up with the right user stories & features

 [] jQuery is used for DOM manipulation code

 [] Tetris game can be found at public/tetris.html

 [] Tetris game is playable

 [] Players have a score

 [] Game page is linked from public/index.html

### Stretch

 Players can configure the key mapping (e.g. change the “drop” key to the space bar)
 Game follows object-oriented patterns using ES6 classes
