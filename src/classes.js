import React, { Component } from 'react'
import './css/tetris.css'

class T {
  constructor(){
    this.color = 'Purple'
    this.rotation = 0
    this.shape = [
      [
        [0,1,0],
        [1,1,1],
        [0,0,0]
      ],
      [
        [0,1,0],
        [0,1,1],
        [0,1,0]
      ],
      [
        [0,0,0],
        [1,1,1],
        [0,1,0]
      ],
      [
        [0,1,0],
        [1,1,0],
        [0,1,0]
      ]
    ]
  }
}

export {T}
