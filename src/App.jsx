import { useState, useEffect, useRef, useCallback } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";

function App() {
  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffect",
    description: "Hello,everybody",
    buttonText: "Click me",
  });

  const handleLoading =useCallback(()=>{
    setDetails(prev => ({...prev,isLoading:!prev.isLoading}))
  },[])

  return (
    <div className={cl.container}>    
     <img src="./iam.jpg" width={250} /> 

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


/**
 
 */