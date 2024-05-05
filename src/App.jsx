import { useState, useEffect } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";

function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title: "useEffect",
    description: "Hello,everybody",
    buttonText: "Click me",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails((prev) => ({ ...prev, isLoading: false }));
    }, 2000);
    return ()=>{
      clearTimeout(timeout);
    }
  });

 useEffect(()=>{
  console.log('title changed')
  setDetails(prev=>({    
    ...prev,
    description:'title has changed!'
  }))
 },[details.title])
 
  return (
    <div className={cl.container}>
      <img src="./iam.jpg" width={250} />
      {details.isLoading ? (
        <p>Loading...</p>
      ) : (
        <Details details={details} setDetails={setDetails} />
      )}
      <p className={cl.text}>My third vite app</p>
    </div>
  );
}

export default App;
