const simpleLevelPlan = [
  "                      ",
  "                      ",
  "  x              = x  ",
  "  x         o o    x  ",
  "  x @      xxxxx   x  ",
  "  xxxxx            x  ",
  "      x!!!!!!!!!!!!x  ",
  "      xxxxxxxxxxxxxx  ",
  "                      "
]

// const gameLevels = [
//
// ]

const Level = (plan) => {
  this.width = plan[0].length
  this.height = plan.length
  this.grid = []
  this.actors = []

  for (let x = 0; x < this.height; x++) {
    let line = plan[x],
        gridLine = []
    for (let y = 0; y < this.width; y++) {
      let ch = line[y],
          fieldType = null
          Actor = actorsChars[ch]
          if (Actor)
            this.actors.push(new Actor(new Vector(x, y), ch))
          else if (ch == 'x')
            fieldType = 'wall'
          else if (ch = '!')
            fieldType = 'lava'
          gridLine.push(fieldType)
    }
    this.grid.push(gridLine)
  }
  this.player = this.actors.filter(function(actor) {
    return actor.type == 'player'
  })[0]
  this.status = this.finishDelay = null
}
