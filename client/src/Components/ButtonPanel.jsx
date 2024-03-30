import React, { useContext } from "react";
import myContext from "../Contexts/myContext";
const ButtonPanel = () => {
  const {button, setButton} = useContext(myContext);
  const handleStart = ()=>{ 
    setButton((prev)=>({...prev,start:true,stop:false}));
  }
  const handleStop  =()=>{
    setButton((prev)=>({...prev,start:false,stop:true}));
  }
  const handleIncrement=()=>{
    button.speed>700&&setButton(prev=>({...prev,speed:prev.speed-50,range:prev.range+1}));
  }
  const handleDecrement=()=>{
    button.speed<1000&&setButton(prev=>({...prev,speed:prev.speed+50,range:prev.range-1}));
  }
  return (
    <>
      <div>
        <div className="flex flex-col justify-around items-center ml-10 bg-purple-500 w-[600px] h-[700px] rounded-3xl">
          <div className="w-5/6 h-36 bg-orange-500 flex flex-col justify-center items-center rounded-2xl ">
            <p className="font-bold text-5xl  text-white">Score</p>
            <p className="font-bold text-3xl leading-10 mt-5 text-white">{button.score}</p>
            </div>
          <button className="w-5/6 h-24 rounded-xl text-center bg-green-500 text-white text-5xl font-bold cursor-pointer" onClick={handleStart}>Start</button>
          <button className="w-5/6 h-24 rounded-xl text-center bg-red-500 text-white text-5xl font-bold" onClick={handleStop}>Stop</button>
          <div className="flex justify-evenly items-center w-5/6">
            <button className="w-32 h-20 bg-green-800 rounded-2xl text-white text-6xl text-center font-bold" onClick={handleIncrement}>+</button>
            <div className="w-48 h-24 rounded-xl bg-violet-800 flex  flex-col justify-center items-center">
              <p className="text-3xl font-bold text-white">Drop Speed</p>
              <p className="text-3xl font-bold text-white">{button.range}</p>
            </div>
            <button className="w-32 h-20 bg-red-800 rounded-2xl text-white text-6xl text-center font-bold" onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonPanel;
