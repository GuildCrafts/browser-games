# Browser Games: Chess

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build web sites with HTML & CSS
- Can add behavior to a web site with JavaScript
- Can use jQuery
- Have built other browser games
- Are familiar with the rules of Chess
- Are interested in making more complex interactive web pages

## Description

Build a [Chess](https://en.wikipedia.org/wiki/Chess) game in the browser using HTML, CSS, JavaScript, and the [jQuery][jquery] library.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact.

Implement the **Chess** game from the list in the [games.md][games-list] file.

![chess-gif](https://cloud.githubusercontent.com/assets/709100/25557927/a936f2b0-2cd0-11e7-84d8-faf1cf988d7c.gif)

## Context

This goal will challenge your ability to take a _formal, defined system_ from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript + jQuery, HTML, and CSS.

## Specifications

#### General

- [ ] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [ ] There is a clear separation of game logic code from view/rendering code.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Chess

- [ ] [User stories](http://searchsoftwarequality.techtarget.com/definition/user-story) and features for the game are added as issues to your repo with the label `feature` or `user-story`
  <br>_You'll have to define these yourself by looking at the rules of the game and coming up with the right user stories & features_
- [ ] jQuery is used for DOM manipulation code
- [ ] Chess game can be found at `public/chess.html`
- [ ] Chess game is playable by two people
- [ ] Pieces can only be moved according to the rules of chess
- [ ] The game state is persisted (so reloading the page resumes where you left off)
- [ ] The board can scale to the window size
- [ ] Game page is linked from `public/index.html`

### Stretch

- [ ] Game can be played against a computer AI (i.e. human v. computer)

## Resources

- [jQuery Learning Center](https://learn.jquery.com/) #jquery
- Code School: [Try jQuery](https://www.codeschool.com/courses/try-jquery) #jquery #js #dom
- CSS Tricks: [Learn jQuery from Scratch](https://css-tricks.com/lodge/learn-jquery/) #jquery #js #dom
- FreeCodeCamp article: [A step-by-step guide to building a simple chess AI](https://medium.freecodecamp.com/simple-chess-ai-step-by-step-1d55a9266977)

[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[mit-license]: https://opensource.org/licenses/MIT

[jquery]: https://jquery.com/
