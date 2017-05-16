# Chess

A chess game two players can play in the browser.

## Specs

General

[x] Artifact produced is a fork of the browser-games repo.

[x] Variables, functions, files, etc. have appropriate and meaningful names.

[x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.

[x] There is a clear separation of game logic code from view/rendering code.

[x] All major features are added via pull requests with a clear description and concise commit messages.

[x] The artifact produced is properly licensed, preferably with the MIT license.
 
 
Chess

[x] Two users can play a game of chess. Peices can only be moved according to the rules of the game.

[ ] jQuery is used for DOM manipulation code
(used react instead)

[x] Chess game can be found at public/chess.html

[x] Chess game is playable by two people

[x] Pieces can only be moved according to the rules of chess
( Mostly, did not finish castle, en passant, or checkmate logic )

[ ] The game state is persisted (so reloading the page resumes where you left off)
(did not get it working)

[x] The board can scale to the window size

[x] Game page is linked from public/index.html

## Installation and Setup

Clone the repo, install npm dependencies, and start the server:

```shell-session
$ git clone git@github.com:TrevorJamesH/browser-games.git
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
