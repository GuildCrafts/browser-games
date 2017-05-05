
var sequence = []
var copy = []
var round = 0
var active = true

var startGame = function() {
  document.querySelector('[data-action="lose"]').style.visibility = "hidden"
  sequence = []
  copy = []
  round = 0
  active = true
  newRound()
}

var newRound = function() {
	document.querySelector('[data-round]').innerHTML = ++round
	sequence.push(randomNumber())
	copy = sequence.slice(0)
	animate(sequence)
}

var randomNumber = function() {
		return Math.floor((Math.random()*4)+1)
}

var animate = function(sequence) {
	var i = 0
	var interval = setInterval(function() {
		playSound(sequence[i])
		lightUp(sequence[i])

		i++
		if (i >= sequence.length) {
			clearInterval(interval)
			activateSimonBoard()
		}
	}, 600)
}

var playSound = function(tile) {
  let audio = document.createElement('audio')
  audio.setAttribute('autoplay', true)
  let source1 = document.createElement('source')
  source1.src = 'js/simonSounds/' + tile + '.ogg'
  source1.type = 'audio/ogg'
  let source2 = document.createElement('source')
  source2.src = 'js/simonSounds/' + tile + '.mp3'
  source2.type = 'audio/mp3'
  audio.appendChild(source1)
  audio.appendChild(source2)
  document.querySelector('[data-action="sound"]').appendChild(audio)
}

var lightUp = function(tile) {
	var tileDom = document.querySelector('[data-tile="' + tile + '"]')
  tileDom.className += ' lit'
	window.setTimeout(function() {
		tileDom.classList.remove('lit')
	}, 300)
}

var activateSimonBoard = function() {
  document.querySelector('.simon').addEventListener('click', function(event) {
    let num = event.target.getAttribute('data-tile')
    registerClick(num)
  })
  document.querySelector('[data-tile]').className += ' hoverable'
}

var registerClick = function(num) {
	var desiredResponse = copy.shift()
	var actualResponse = num
	active = (desiredResponse == actualResponse)
	checkLose()
}

var checkLose = function() {
  if (copy.length === 0 && active) {
			deactivateSimonBoard()
			newRound()
	} else if (!active) {
  		deactivateSimonBoard()
  		endGame()
	}
}

var deactivateSimonBoard = function() {
	document.querySelector('.tile').removeEventListener('click', function() {
  })
  document.querySelector('[data-tile]').classList.remove('hoverable')
}

var endGame = function() {
  document.querySelector('[data-action="lose"]').style.visibility = "visible"
}



window.onload = function() {
  document.querySelector('[data-action=start]').addEventListener('click', function() {
    startGame()
  })
}
