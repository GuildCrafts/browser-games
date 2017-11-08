
class Piece {
  constructor( type=PAWN, color=WHITE ){
    this.color = color
    this.type = type
  }

  renderString(  folder = 'classic') {
    return `img/chess/${folder}/${this.type}-${this.color}.png`
  }
}

