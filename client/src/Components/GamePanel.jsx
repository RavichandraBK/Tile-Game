import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import Tile from "./Tile";
import DropBox from './DropBox';
import myContext from '../Contexts/myContext';
import patterns from '../apis/pattern'
const GamePanel = () => {
  const {button,setButton} = useContext(myContext)
  const [tileClk, setTileClk] = useState(null);
    // const [arr, setArr] = useState([1,2,3])
    const [data, setData] = useState(null);
    useEffect(()=>{
      const handlePattern = async()=>{
        const grids = await patterns();
        setData(grids.data.grid);
      }
      handlePattern();
    },[])
    const handleTileClk =(item,index)=>{
      setTileClk(index);
      // console.log(item)
      item==='red'&&setButton((prev)=>({...prev,score:prev.score-10}));
    }
    const generatePatterns = (times,type) => {
      const divs = [];
      for (let i = 0; i < times; i++) {
        divs.push(
          <div key={i} onClick={()=>{handleTileClk(type,i)}}>

        <Tile clk={tileClk} indx={i} bgClr={type}/>
          </div>
      );
      }
      return divs;
    };
    const defaultPattern1 = generatePatterns(10,data&&data.type1);
    const defaultPattern2 = generatePatterns(10,data&&data.type2);

    return (
      <>
      <div className="bg-black  h-[640px] w-[640px] ml-8 mt-10 rounded-xl">
        <div className="flex h-full w-full">
        <div  className="flex flex-col justify-end">
          {defaultPattern1}
          </div>
        <div  className="flex flex-col justify-end">
          {defaultPattern1}
          </div>
        <div  className="flex flex-col justify-end">
          {defaultPattern2}
          </div>
        <div  className="flex flex-col justify-end">
          {defaultPattern2}
          </div>
          
          {data &&
          data.Patterns&&data.Patterns.map((item,index)=>(<DropBox key={index} delay={(index+1)*button.speed} tiles={item[`pattern${index+1}`]}/>))}
        </div>
        
      </div>
      </>
    )
  
}

export default GamePanel