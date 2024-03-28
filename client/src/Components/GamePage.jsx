import React from 'react'
import GamePanel from './GamePanel'
import ButtonPanel from './ButtonPanel'

const GamePage = () => {
   return(
    <>
    <p className='text-6xl font-extrabold '>Welcome to Tile Game</p>
    <div className='flex'>
    <GamePanel/>
    <ButtonPanel/>
    </div>

    </>
   )
}

export default GamePage