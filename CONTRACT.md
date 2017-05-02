---
authors:
- "shereefb"
- "tannerwelsh"
team_size: 1
goal_id: 83
title: 'Browser Games [Basic]'
created_at: '2016-10-05T21:34:11Z'
labels:
- foundational
published: true
level: '1'
redirect_from: "/goals/83"
---

# Browser Games [Basic]

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build basic web sites with HTML & CSS
- Can add behavior to a web site with JavaScript
- Are familiar with DOM manipulation
- Are familiar with games like tic-tac-toe and Simon
- Are interested in making more complex interactive web pages

## Description

Build simple graphical games for the browser.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact.

Implement the games **Tic-Tac-Toe** and **Simon** from the list in the [games.md][games-list] file. As a stretch, implement the **Connect Four** game.

You will be using FreeCodeCamp challenges as guides and tutorials for building these games.

## Context

This goal will challenge your ability to take a _formal, defined system_ from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript, HTML, and CSS.

## Specifications

#### General

- [ ] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Every pull request has been reviewed by at least one other person.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Tic-Tac-Toe

- [ ] Tic-Tac-Toe game can be found at `public/ticTacToe.html`
- [ ] Tic-Tac-Toe game is playable by two people
- [ ] Tic-Tac-Toe game page is linked from `public/index.html`

#### Simon

- [ ] Simon game can be found at `public/ticTacToe.html`
- [ ] Simon game is playable
- [ ] Simon game page is linked from `public/index.html`

### Stretch

- [ ] Tic-Tac-Toe has a player-vs-computer version
- [ ] Tic-Tac-Toe AI will always win or tie
- [ ] Simon plays sounds
- Implement Connect Four game
  - [ ] Connect Four game can be found at `public/connectFour.html`
  - [ ] Connect Four game is playable by two people (human v human)
  - [ ] Connect Four game page is linked from `public/index.html`

## Resources

- MDN: [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) #html #dom #js
- MDN: [Guide to Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) #dom #js
- Shay Howe: [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css/) #html #css

[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[basic-games]: https://github.com/GuildCrafts/browser-games/blob/master/games.md#basic-graphical-games
[mit-license]: https://opensource.org/licenses/MIT
