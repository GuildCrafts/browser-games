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

## Description

Build a [Tetris](https://en.wikipedia.org/wiki/Tetris) game in the browser using HTML, CSS, JavaScript, and the [jQuery][jquery] library.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact. It is recommended that you follow along with this tutorial: https://github.com/jonhoo/tetris-tutorial/.

Implement the **Tetris** game from the list in the [games.md][games-list] file.

![tetris](https://cloud.githubusercontent.com/assets/709100/25557948/482ba5be-2cd1-11e7-8a3f-1cbc07138dbe.gif)
## Game instructions
Q W keys rotate pieces
Arrow keys to move pieces

Start Game by pressing start button

## user-story
Q W key rotate pieces
Arrow keys move pieces

Start Game by pressing start button

“As a player I want a start game option so that I can start playing
As a player I want to exit the game in order to do other things.
As a player I want to see my score.
As a player I want to be able to pause the game.
As a Player I need different pieces to be able to fill the wall.”


## Specifications

#### General

- [x] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [x] There is a clear separation of game logic code from view/rendering code.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Tetris

- [X] [User stories](http://searchsoftwarequality.techtarget.com/definition/user-story) and features for the game are added as issues to your repo with the label `feature` or `user-story`
  <br>_You'll have to define these yourself by looking at the rules of the game and coming up with the right user stories & features_
- [x] jQuery is used for DOM manipulation code
- [x] Tetris game can be found at `public/tetris.html`
- [x] Tetris game is playable
- [x] Players have a score
- [x] Game page is linked from `public/index.html`

### Stretch

- [ ] Players can configure the key mapping (e.g. change the "drop" key to the space bar)
- [ ] Game follows object-oriented patterns using ES6 classes

## Resources

- [jQuery Learning Center](https://learn.jquery.com/) #jquery
- Code School: [Try jQuery](https://www.codeschool.com/courses/try-jquery) #jquery #js #dom
- CSS Tricks: [Learn jQuery from Scratch](https://css-tricks.com/lodge/learn-jquery/) #jquery #js #dom
- Tetris Tutorial https://github.com/jonhoo/tetris-tutorial/
- Video series on building tetris: [part 1](https://www.youtube.com/watch?v=Z3wvP27eW98), [part 2](https://www.youtube.com/watch?v=JRcjqwktccc), [part 3](https://www.youtube.com/watch?v=pSPx2JXSRfM), and [part 4](https://www.youtube.com/watch?v=TZrRS14G8Ns)


[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[mit-license]: https://opensource.org/licenses/MIT

[jquery]: https://jquery.com/
