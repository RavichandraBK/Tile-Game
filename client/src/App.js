import {  useState } from "react";
import GamePage from "./Components/GamePage";
import myContext from "./Contexts/myContext";


function App() {
 
  const [button, setButton] = useState({
    start:false,
    stop:false,
    score:0,
    speed:1000,
    range:1,
  })
  return (
    <>
    <myContext.Provider value={{button,setButton}}>
    <GamePage/>
    </myContext.Provider>
    </>
  );
}

export default App;
