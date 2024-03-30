import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Tile from "./Tile";
import DropBox from "./DropBox";
import myContext from "../Contexts/myContext";
import patterns from "../apis/pattern";
const GamePanel = () => {
  const { button, setButton } = useContext(myContext);

  const [data, setData] = useState(null);
  useEffect(() => {
    const handlePattern = async () => {
      const grids = await patterns();
      setData(grids.data.grid);
    };
    handlePattern();
  }, []);
  
  const animationStyle = {
    animation: `fro ${button.speed}ms ease-in-out infinite alternate`, 
  };
 useEffect(()=>{
  if(button.start){
    setButton((prev)=>({...prev,score:0}));
  }
 },[button.start])
  

  return (
    <>
      <div className="bg-black  h-[640px] w-[640px] ml-8 mt-10 rounded-xl">
        <div className="flex h-full w-full">
          <div className="flex">
            {/* <div>{defaultPattern1}</div>
            <div>{defaultPattern1}</div> */}
            {data&&data.defaults&&data.defaults.map((_,index)=>(<DropBox
                key={index}
                delay={(index + 1) * button.speed}
                tiles={data.defaults[0].type1}
              />))}
          </div>

          <div className={`flex absolute left-40  w-96`} style={button.start ? animationStyle : null}>
            {/* <div>{defaultPattern2}</div>
            <div>{defaultPattern2}</div> */}
            {data&&data.defaults&&data.defaults.map((_,index)=>(<DropBox
                key={index}
                delay={(index + 1) * button.speed}
                tiles={data.defaults[1].type2}
              />))}
          </div>
          {data&&data.Patterns&& data.Patterns.map((item, index) => (
              <DropBox
                key={index}
                delay={(index + 1) * button.speed}
                tiles={item[`pattern${index+1}`]}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default GamePanel;
