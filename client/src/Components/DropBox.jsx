import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import Tile from './Tile'
import { useRef } from 'react'
import myContext from '../Contexts/myContext'
const DropBox = ({delay,tiles}) => {
    const [arr, setArr] = useState([]);
    
    const {button,setButton} = useContext(myContext);
    const [tileClk, setTileClk] = useState(null);
    
  useEffect(() => {
    let count = 0;
    let interval
    const startInterval = ()=>{

         interval = setInterval(() => {
          if (count < 10) {
            console.log('tile count',tiles[count])
            setArr(prev => ([...prev, tiles[count]]));
            setTileClk(false)
            count++;
           
          } else {
            clearInterval(interval);
          }
        }, 2500);
    }
    const stopInterval = ()=>{
        clearInterval(interval)
    }
    if(button.start){
        console.log(button.start)
        startInterval();
        setArr([]);
        setButton((prev)=>({...prev,score:0}))
    }
    else if(button.stop){
        stopInterval();
    }
    return () => clearInterval(interval);
  }, [delay,button.start,button.stop]);
  const animationStyle = {
    animation: `drop ${delay}ms ease-out 10`, 
  };
  
  const handleTileClk =(item,index)=>{
    setTileClk(index);
    console.log(item)
    
    if(item==='red'){
        setButton((prev)=>({...prev,score:prev.score-10}))
    }else if(item==='blue'){
        setButton((prev)=>({...prev ,score:prev.score+10}))
    }
  }
  return (
    <div className="flex flex-col justify-end">
      {arr.length>0&&arr.map((item, index) => (
        <div key={index} className='' style={index===0?animationStyle:{}} onClick={()=>{handleTileClk(item,index)}}>
            
          <Tile clk={tileClk} indx={index} bgClr={item}/>
        </div>
      ))}
    </div>
  );
}

export default DropBox