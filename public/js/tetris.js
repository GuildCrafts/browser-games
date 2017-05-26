$(document).ready(function() {
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext("2d");
  let width = 10;
  let height = 20;
  let tilepx = 24;
  canvas.width = width * tilepx;
  canvas.height = height * tilepx;

  let board = [];
  for (let r = 0; r < height; r++) {
  	board[r] = [];
  	for (let c = 0; c < width; c++) {
  		board[r][c] = "";
  	}
  }

   const drawSquare = (x, y) => {
    ctx.fillRect(x * tilepx, y * tilepx, tilepx, tilepx);
    let ss = ctx.strokeStyle;
    ctx.strokeStyle = "#555";
    ctx.strokeRect(x * tilepx, y * tilepx, tilepx, tilepx);
    ctx.strokeStyle = "#888";
    ctx.strokeRect(x * tilepx + 3*tilepx/8, y * tilepx + 3*tilepx/8, tilepx/4, tilepx/4);
    ctx.strokeStyle = ss;
  }

  const drawBoard = () => {
    let fs = ctx.fillStyle
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        ctx.fillStyle = board[y][x] || "#888"
        drawSquare(x, y, tilepx, tilepx)
      }
    }
    ctx.fillStyle = fs
  }

  const pieces = [
  	[I, "cyan"],
  	[J, "blue"],
  	[L, "orange"],
  	[O, "yellow"],
  	[S, "green"],
  	[T, "purple"],
  	[Z, "red"]
  ]

  const newPiece = () => {
  	let p = pieces[parseInt(Math.random() * pieces.length, 10)];
  	return new Piece(p[0], p[1]);
  }

  function Piece(patterns, color) {
  	this.pattern = patterns[0];
  	this.patterns = patterns;
  	this.patterni = 0;
  	this.color = color;
  	this.x = width/2-parseInt(Math.ceil(this.pattern.length/2), 10);
  	this.y = -2;
  }

  Piece.prototype.rotate = function() {
  	let nextpat = this.patterns[(this.patterni + 1) % this.patterns.length];

  	if (!this._collides( 0, 0, nextpat)) {
  		this.undraw();
  		this.patterni = (this.patterni + 1) % this.patterns.length;
  		this.pattern = this.patterns[this.patterni];
  		this.draw();
  	}
  };

  Piece.prototype._collides = function(dx, dy, pat) {
    let WALL = 1;
    let BLOCK = 2;
  	for (let ix = 0; ix < pat.length; ix++) {
  		for (let iy = 0; iy < pat.length; iy++) {
  			if (!pat[ix][iy]) {
  				continue;
  			}

  			let x = this.x + ix + dx;
  			let y = this.y + iy + dy;
  			if (y >= height || x < 0 || x >= width) {
  				return WALL;
  			}
  			if (y < 0) {
  				// Ignore negative space rows
  				continue;
  			}
  			if (board[y][x] !== "") {
  				return BLOCK;
  			}
  		}
  	}
  	return 0;
  };

  Piece.prototype.down = function() {
  	if (this._collides(0, 1, this.pattern)) {
  		this.lock();
  		piece = newPiece();
  	} else {
  		this.undraw();
  		this.y++;
  		this.draw();
  	}
  };

  Piece.prototype.moveRight = function() {
  	if (!this._collides(1, 0, this.pattern)) {
  		this.undraw();
  		this.x++;
  		this.draw();
  	}
  };

  Piece.prototype.moveLeft = function() {
  	if (!this._collides(-1, 0, this.pattern)) {
  		this.undraw();
  		this.x--;
  		this.draw();
  	}
  };

  let lines = 0;
  let done = false;

  Piece.prototype.lock = function() {
  	for (let ix = 0; ix < this.pattern.length; ix++) {
  		for (let iy = 0; iy < this.pattern.length; iy++) {
  			if (!this.pattern[ix][iy]) {
  				continue;
  			}
  			if (this.y + iy < 0) { // Game ends
  				alert("Thought you were better than this...");
  				done = true;
  				return;
  			}
  			board[this.y + iy][this.x + ix] = this.color;
  		}
  	}

  	let nlines = 0;
  	for (let y = 0; y < height; y++) {
  		let line = true;
  		for (let x = 0; x < width; x++) {
  			line = line && board[y][x] !== "";
  		}
  		if (line) {
  			for (let y2 = y; y2 > 1; y2--) {
  				for (let x = 0; x < width; x++) {
  					board[y2][x] = board[y2-1][x];
  				}
  			}
  			for (let x = 0; x < width; x++) {
  				board[0][x] = "";
  			}
  			nlines++;
  		}
  	}

  	if (nlines > 0) {
  		lines += nlines;
  		drawBoard();
  		$('#lines').text("Lines: " + lines)
  	}
  };

  Piece.prototype._fill = function(color) {
  	let fs = ctx.fillStyle;
  	ctx.fillStyle = color;
  	let x = this.x;
  	let y = this.y;
  	for (let ix = 0; ix < this.pattern.length; ix++) {
  		for (let iy = 0; iy < this.pattern.length; iy++) {
  			if (this.pattern[ix][iy]) {
  				drawSquare(x + ix, y + iy);
  			}
  		}
  	}
  	ctx.fillStyle = fs;
  };

  Piece.prototype.undraw = function(ctx) {
  	this._fill('#888');
  };

  Piece.prototype.draw = function(ctx) {
  	this._fill(this.color);
  };

  let dropStart = Date.now();

  $('body').on('keydown', function(event){
      if(event.keyCode == 38) { // Player pressed up
    		piece.rotate();
    		dropStart = Date.now();
    	}
    	if (event.keyCode == 40) { // Player holding down
    		piece.down();
    	}
    	if (event.keyCode == 37) { // Player holding left
    		piece.moveLeft();
    		dropStart = Date.now();
    	}
    	if (event.keyCode == 39) { // Player holding right
    		piece.moveRight();
    		dropStart = Date.now();
    	}
    })

function calculateDelta() {
  let now = Date.now();
  let delta = now - dropStart;
  if (delta > 1000) {
    piece.down();
    dropStart = now;
  }
}

  function main() {
  	if (!done) {
      calculateDelta()
  		requestAnimationFrame(main);
  	}
  }

  let piece = newPiece();
  drawBoard();
  main();

  $('#newGame').on('click', function() {
    location.reload()
  })

})
