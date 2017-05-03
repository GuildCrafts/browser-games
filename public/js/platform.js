var simpleLevelPlan = [
  "                      ",
  "                      ",
  "  x              = x  ",
  "  x         o o    x  ",
  "  x @      xxxxx   x  ",
  "  xxxxx            x  ",
  "      x!!!!!!!!!!!!x  ",
  "      xxxxxxxxxxxxxx  ",
  "                      "
];

function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];

  for (var y = 0; y < this.height; y++) {
    var line = plan[y], gridLine = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      if (Actor)
        this.actors.push(new Actor(new Vector(x, y), ch));
      else if (ch == "x")
        fieldType = "wall";
      else if (ch == "!")
        fieldType = "lava";
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }

  this.player = this.actors.filter(function(actor) {
    return actor.type == "player";
  })[0];
  this.status = this.finishDelay = null;
}

function Vector(x, y) {
  this.x = x; this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};

var actorChars = {
  "@": Player,
  "o": Coin,
  "=": Lava, "|": Lava, "v": Lava
};

function Player(pos) {
  this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";

function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "=") {
    this.speed = new Vector(2, 0);
  } else if (ch == "|") {
    this.speed = new Vector(0, 2);
  } else if (ch == "v") {
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  }
}
Lava.prototype.type = "lava";

function Coin(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";

function elt(name, className) {
  var elt = document.createElement(name);
  if (className) elt.className = className;
  return elt;
}

function DOMDisplay(parent, level) {
  this.wrap = parent.appendChild(elt("div", "game"));
  this.level = level;

  this.wrap.appendChild(this.drawBackground());
  this.actorLayer = null;
  this.drawFrame();
}

var scale = 20;

DOMDisplay.prototype.drawBackground = function() {
  var table = elt("table", "background");
  table.style.width = this.level.width * scale + "px";
  this.level.grid.forEach(function(row) {
    var rowElt = table.appendChild(elt("tr"));
    rowElt.style.height = scale + "px";
    row.forEach(function(type) {
      rowElt.appendChild(elt("td", type));
    });
  });
  return table;
};

DOMDisplay.prototype.drawActors = function() {
  var wrap = elt("div");
  this.level.actors.forEach(function(actor) {
    var rect = wrap.appendChild(elt("div",
                                    "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
};

DOMDisplay.prototype.drawFrame = function() {
  if (this.actorLayer)
    this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());
  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};

DOMDisplay.prototype.scrollPlayerIntoView = function() {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;
  var margin = width / 3;

  // The viewport
  var left = this.wrap.scrollLeft, right = left + width;
  var top = this.wrap.scrollTop, bottom = top + height;

  var player = this.level.player;
  var center = player.pos.plus(player.size.times(0.5))
                 .times(scale);

  if (center.x < left + margin)
    this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin)
    this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};

DOMDisplay.prototype.clear = function() {
  this.wrap.parentNode.removeChild(this.wrap);
};

Level.prototype.obstableAt = function(pos, size) {
  let xStart = Math.floor(pos.x),
      xEnd = Math.ceil(pos.x + size.x),
      yStart = Math.floor(pos.y),
      yEnd = Math.ceil(pos.y + size.y)

  if (xStart < 0 || xEnd > this.width || yStart < 0) {
    return 'wall'
  }
  if (yEnd > this.height) {
    return 'lava'
  }
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      let fieldType = this.grid[y][x]
      if (fieldType) {
        return fieldType
      }
    }
  }
}

Level.prototype.actorAt = function(actor) {
  for (let i = 0; i < this.actors.length; i++) {
    let other = this.actors[i]
    if (other != actor &&
        actor.pos.x + actor.size.x > other.pos.x &&
        actor.pos.x < other.pos.x + other.size.x &&
        actor.pos.y + actor.size.y > other.pos.y &&
        actor.pos.y < other.pos.y + other.size.y) {
          return other
    }
  }
}















// const simpleLevelPlan = [
//   "                      ",
//   "                      ",
//   "  x              = x  ",
//   "  x         o o    x  ",
//   "  x @      xxxxx   x  ",
//   "  xxxxx            x  ",
//   "      x!!!!!!!!!!!!x  ",
//   "      xxxxxxxxxxxxxx  ",
//   "                      "
// ]
//
// // const gameLevels = [
// //
// // ]
//
// class Level {
//   constructor(plan) {
//     this.width = plan[0].length
//     this.height = plan.length
//     this.grid = []
//     this.actors = []
//
//     for (let x = 0; x < this.height; x++) {
//       let line = plan[x],
//           gridLine = []
//       for (let y = 0; y < this.width; y++) {
//         let ch = line[y],
//             fieldType = null
//             Actor = actorsChars[ch]
//             if (Actor)
//               this.actors.push(new Actor(new Vector(x, y), ch))
//             else if (ch == 'x')
//               fieldType = 'wall'
//             else if (ch = '!')
//               fieldType = 'lava'
//             gridLine.push(fieldType)
//       }
//       this.grid.push(gridLine)
//     }
//     this.player = this.actors.filter(function(actor) {
//       return actor.type == 'player'
//     })[0]
//     this.status = this.finishDelay = null
//   }
//
//   isFinished() {
//     return this.status != null && this.finishDelay < 0
//   }
//
//   obstableAt = (pos, size) => {
//     let xStart = Math.floor(pox.x),
//         xEnd = Math.ceil(pos.x + size.x),
//         yStart = Math.floor(pos.y),
//         yEnd = Math.ceil(pos.y + size.y)
//
//     if (xStart < 0) || xEnd < this.width || yStart < 0)
//       return 'wall'
//     if (yEnd > this.height)
//       return 'lava'
//     for (let y = yStart; y < yEnd; y++) {
//       for (let x = xStart; x < xEnd; x++) {
//         let fieldType = this.grid[y][x]
//         if(fieldType)
//           return fieldType
//       }
//     }
//   }
//
//   actorAt = (actor) => {
//     for (let i = 0; i < this.actors.length; i++) {
//       let other = this.actors[i]
//       if (other != actor &&
//           actor.pos.x + actor.size.x > other.pos.x &&
//           actor.pos.y < other.pos.x + other.size.x &&
//           actor.pos.y + actor.size.y > other.pos.y &&
//           actor.pos.y < other.pos.y + other.size.y)
//         return other
//     }
//   }
//
//   animate = (step, keys) => {
//     if (this.status != null)
//       this.finishDelay -= step
//
//     while (step > 0) {
//       let thisStep = Math.min(step, maxStep)
//       this.actors.forEach(function(actor) {
//         actor.act(thisStep, this, keys)
//       }, this)
//       step -= thisStep
//     }
//   }
// }
//
//
// function Vector(x, y) {
//   this.x = x; this.y = y;
// }
// Vector.prototype.plus = function(other) {
//   return new Vector(this.x + other.x, this.y + other.y);
// };
// Vector.prototype.times = function(factor) {
//   return new Vector(this.x * factor, this.y * factor);
// };
//
// // class Vector {
// //   constructor(x, y) {
// //     this.x = x
// //     this.y = y
// //   }
// //   plus(other) {
// //     return new Vector(this.x + other.x, this.y + other.y)
// //   }
// //
// //   times(factor) {
// //     return new Vector(this.x * factor, this.y * factor)
// //   }
// // }
//
// const actorsChars = {
//   '@': Player,
//   'o': Coin,
//   '=': Lava, '|': Lava, 'v': Lava
// }
//
// function Player(pos) {
//   this.pos = pos.plus(new Vector(0, -0.5))
//   this.size = new Vector(0.8, 1.5);
//   this.speed = new Vector(0, 0);
// }
// Player.prototype.type = 'player'
// // class Player {
// //   constructor(pos) {
// //     this.pos = pos.plus(new Vector(0, -0.5))
// //     this.size = new Vector(0.8, 1.5)
// //     this.speed = new Vector(0, 0)
// //   }
// //
// //   type() = 'player'
// // }
//
// function Coin(pos) {
//   this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1))
//   this.size = new Vector(0.6, 0.6)
//   this.wobble = Math.random() * Math.PI * 2
// }
// Coin.prototype.type = 'coin'
//
// // const simpleLevel = new Level(simpleLevelPlan)
// // console.log(simpleLevel.width, 'by', simpleLevel.height)
//
// function elt(name, className) {
//   let elt = document.createElement(name)
//   if (className) elt.className = className
//   return elt
// }
//
// function DOMDisplay(parent, level) {
//   this.wrap = parent.appendChild(elt('div', 'game'))
//   this.level = level
//
//   this.wrap.appendChild(this.drawBackground())
//   this.actorLayer = null
//   this.drawFrame()
// }
//
// let scale = 20
//
// DOMDisplay.prototype.drawBackground = function() {
//   let table = elt('table', 'background')
//   table.style.width = this.levcel.width * scale + 'px'
//   this.level.grid.forEach(function(row) {
//     let rowElt = table.appendChild(elt('tr'))
//     rowElt.style.height = scale + 'px'
//     row.forEach(function(type) {
//       rowElt.appendChild(eld('td', type))
//     })
//   })
//   return table
// }
//
// DOMDisplay.prototype.drawActors = function() {
//   let wrap = elt('div')
//   this.level.actors.forEach(function(actor) {
//     let rect = wrap.appendChild(elt('div',
//                                     'actor ' + actor.type))
//     rect.style.width = actor.size.x * scale + 'px'
//     rect.style.height = actor.size.y * scale + 'px'
//     rect.style.left = actor.pos.x * scale + 'px'
//     rect.style.top = actor.pos.y * scale + 'px'
//   })
//   return wrap
// }
//
// DOMDisplay.prototype.drawFrame = function() {
//   if (this.actorLayer)
//     this.wrap.removeChild(this.actorLayer)
//   this.actorLayer = this.wrap.appendChild(this.drawActors())
//   this.scrollPlayerIntoView()
// }
//
// DOMDisplay.prototype.scrollPlayerIntoView = function() {
//   let width = this.wrap.clientWidth,
//       height = this.wrap.clientHeight,
//       margin = width / 3
//
//   // The viewport
//   let left = this.wrap.scrollLeft,
//       right = left + width,
//       top = this.wrap.scrollTop,
//       bottom = top + height
//
//   let player = this.level.player
//   let center = player.pos.plus(player.size.times(0.5))
//                   .times(scale)
//
//   if (center.x < left + margin)
//     this.wrap.scrollLeft = center.x - margin
//   else if (center.x > right - margin)
//     this.wrap.scrollLeft = center.x + margin - width
//
//   if (center.y < top + margin)
//     this.wrap.scrollTop = center.y - margin
//   else if (center.y > bottom - margin)
//     this.wrap.scrollTop = center.y + margin - height
// }
//
// DOMDisplay.prototype.clear = function() {
//   this.wrap.parentNode.removeChild(this.wrap)
// }
