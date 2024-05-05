import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";

function App() {
  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffect",
    description: "Hello,everybody",
    buttonText: "Click me",
  });

 const [count,setCount] = useState(0);
 const [multiplayer,setMultiplayer] = useState(10);
 
 const result = useMemo(()=>{
  return count * multiplayer
 },[count,multiplayer])

  const handleLoading =useCallback(()=>{
    setDetails(prev => ({...prev,isLoading:!prev.isLoading}))
  },[])

  return (
    <div className={cl.container}>    
     <img src="./iam.jpg" width={250} /> 

    <h2>Result:{result}</h2>
    <button onClick={()=>setCount(count + 2)} 
    >Increase count</button>
    <button onClick={()=> setMultiplayer(multiplayer+10)}>
      Increase sum
    </button>

      {details.isLoading &&
        <p>Loading...</p>}     
        <Details 
        details={details} 
        setDetails={setDetails}
        handleLoading={handleLoading} />
      <p className={cl.text}>My third vite app</p>
    </div>
  );
}

export default App;


