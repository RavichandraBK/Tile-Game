import React from 'react'

const Tile = ({clk,indx,bgClr}) => {
  console.log(bgClr)
  
  return (
    <>
     <div className={`bg-green-500 w-16 h-16 rounded-3xl border-black border-s border-b box-border ${clk===indx&&'animate-blink-box'} cursor-pointer`} style={{backgroundColor:bgClr}}></div>
    </>
  )
}

export default Tile