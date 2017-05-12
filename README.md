
#Got error messages at npm install, so server thing doesn't work. Games can be opened with open public/index.html

## Specifications

#### General

- [X] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [X] Variables, functions, files, etc. have appropriate and meaningful names.
- [X] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [X] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Every pull request has been reviewed by at least one other person.
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Tic-Tac-Toe

- [X] Tic-Tac-Toe game can be found at `public/ticTacToe.html`
- [X] Tic-Tac-Toe game is playable by two people
- [X] Tic-Tac-Toe game page is linked from `public/index.html`

#### Simon

- [X] Simon game can be found at `public/simon.html`
- [X] Simon game is playable
- [X] Simon game page is linked from `public/index.html`

### Stretch

- [ ] Tic-Tac-Toe has a player-vs-computer version
- [ ] Tic-Tac-Toe AI will always win or tie
- [ ] Simon plays sounds
- Implement Connect Four game
  - [ ] Connect Four game can be found at `public/connectFour.html`
  - [ ] Connect Four game is playable by two people (human v human)
  - [ ] Connect Four game page is linked from `public/index.html`


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
