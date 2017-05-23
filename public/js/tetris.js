var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');


var board = [];
for (var row = 0; row < 20; row++) {
      board[row] = [];
      for (var tile = 0; tile < 10; tile++) {
              board[row][tile] = false;
      }
}


var width = 10;
var height = 20;
var tilesz = 24;

canvas.width = width * tilesz;
canvas.height = height * tilesz;

function drawSquare(x, y) {
  ctx.fillRect(x * tilesz, y * tilesz, tilesz, tilesz);
  ss = ctx.strokeStyle;
  ctx.strokeStyle = "#555";
  ctx.strokeRect(x * tilesz, y * tilesz, tilesz, tilesz);
  ctx.strokeStyle = "#888";
  ctx.strokeRect(x * tilesz + 3*tilesz/8, y * tilesz + 3*tilesz/8, tilesz/4, tilesz/4);
  ctx.strokeStyle = ss
}

function drawBoard() {
  fs = ctx.fillStyle;
  for (var y = 0; y < height; y++) {
    for( var x= 0; x < width; x++) {
          ctx.fillStyle = board[y][x] ? 'red': 'white';
          drawSquare(x, y, tilesz,tilesz);
    }
  }
  ctx.fillStyle = fs;
}

function Piece(patterns, color) {
  this.pattern = patterns[0];
  this.patterns = patterns;
  this.patterni = 0;

  this.color = color;

  this.x = 0;
  this.y = -2;
}

Piece.prototype.draw = function() {
   fs = ctx.fillStyle;
   ctx.fillStyle = this.color;
   for (var ix = 0; ix < this.pattern.length; ix++) {
     for (var iy = 0; iy < this.pattern.length; iy++) {
       if (this.pattern[ix][iy]) {
            drawSquare(this.x + ix, this.y + iy);
       }
     }
   }
   ctx.fillStyle = fs;
}

Piece.prototype.down = function() {
  this.undraw();
  this.y++;
  this.draw();
};

Piece.prototype.moveRight = function() {
  this.undraw();
  this.x++;
  this.draw();
};

Piece.prototype.moveLeft = function() {
  this.undraw();
  this.x--;
  this.draw();
};

Piece.prototype.rotate = function() {
  this.undraw();
  this.patterni = (this.patterni + 1) % this.patterns.length;
  this.pattern = this.patterns[this.patterni];
  this.draw();
};

Piece.prototype._fill = function(color) {
  fs = ctx.fillStyle;
  ctx.fillStyle = color;
  var x = this.x;
  var y = this.y;
  for (var ix = 0; ix < this.pattern.length; ix++) {
    for (var iy = 0; iy < this.pattern.length; iy++) {
          if (this.pattern[ix][iy]) {
               drawSquare(x + ix, y + iy);
          }
    }
  }
  ctx,fillStyle = fs;
};

Piece.prototype.undraw = function(ctx) {
  this._fill("black");
};

Piece.prototype.draw = function(ctx) {
  this._fill(this.color);
};

Piece.prototype.rotate = function() {
  var nextpat = this.patterns[(this.patterni + 1) % this.patterns.length];
  if (!this._collides(0, 0, nextpat)) {
        this.undraw();
        this.patterni = (this.patterni + 1) % this.patterns.length;
        this.pattern = this.patterns[this.patterni]
        this.draw();
  }
};

Piece.prototype.down = function() {
  if(this._collides(0,1, this.pattern)) {

  } else {
      this.undraw();
      this.y++;
      this.draw();
  }
};

Piece.prototype.moveRight = function() {
  if(!this._collides(1,0, this.pattern)) {
          this.undraw();
          this.y++;
          this.draw();
  }
};

Piece.prototype.moveLeft = function() {
  if (!this._collides(-1,0, this.pattern)) {
    this.undraw();
    this.x--;
    this.draw();
  }
};

Piece.prototype._collides = function(dx, dy, pat) {
  for(var ix = 0; ix < pat.length; ix++) {
    for(var iy = 0; iy < pat.lenght; iy++) {
      if(!pat[ix][iy]) {
        continue;
      }

      var x = this.x + ix + dx;
      var y = this.y + iy + dy;
      if(y >= height || x < 0 || x >= width) {
              return true;
      }
      if (y < 0) {
        continue;
      }
      if (board[y][x]) {
        return true;
      }
    }
  }
  return false;;
};

var dropStart = Date.now();
document.body.addEventListener("keypress", function (e) {
  if (e.keyCode == 38) {
    piece.rotate();
    dropStart = Date.now();
  }
  if (e.keyCode == 40) {
      piece.down();
  }
  if(e.keyCode == 37) {
    piece.movieLeft();
    dropStart = Data.now();
  }
  if (e.keyCode == 39) {
      piece.moveRight();
      dropStart = Date.now();
  }
}, false);

var done = false;
function main() {
  var now = Date.now();
  var delta = now - dropStart;

  if (delta > 1000) {
      piece.down();
      dropStart = now;
  }

  if (!done) {
        requestAnimationFrame(main);
  }
}
main();

var lines = 0;
Piece.prototype.lock = function() {
  for(var ix = 0; ix < this.pattern.length; ix++) {
    for(var iy = 0; iy < this.pattern.length; iy++) {
      if(!this.pattern[ix][iy]) {
        continue;
      }
      if (this.y + iy < 0) {
        alert("You' re done!");
        done = true;
        return;
      }
      board[this.y + iy][this.x + ix] = true;
     }
  }

var nlines = 0;
for(var y =0; y < height; y++) {
      var line = true;
      for(var x= 0; x < width; x++) {
            line = line && !board[y][x];
      }
      if (line) {
        for(var y2 = y; y2 > 1; y2--) {
          for (var x = 0; x < width; x++) {
                  board[y2][x] = board[y2-1][x];
          }
        }
        for (var x=0; x< width; x++) {
              board[0][x] = false;
        }
        nlines++;
      }
}

if (nlines > 0) {
      lines += nlines;
      drawBoard();
      console.log(lines);
}
};

var pieces = [
	[I, "cyan"],
	[J, "blue"],
	[L, "orange"],
	[O, "yellow"],
	[S, "green"],
	[T, "purple"],
	[Z, "red"]
];

function newPiece() {
  var p = pieces[parseInt(Math.random() * pieces.length, 10)];
  return new Piece(p[0], p[1]);
}
