import { useState, useEffect, useRef } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";

function App() {
  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffect",
    description: "Hello,everybody",
    buttonText: "Click me",
  });

  const imageRef = useRef(null)

  const onClick =()=>{
    if(!imageRef.current) return
    imageRef.current.style.borderRadius = '30px';
    imageRef.current.style.boxShadow = '10px 10px 10px rgba(125, 0, 0, 0.8)';
    console.log(imageRef.current)
  }
 
  return (
    <div className={cl.container}>
      
     <img ref={imageRef} src="./iam.jpg" width={250} /> 
      <br/>
      <button onClick={onClick}>
        Change image</button>
      
      
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
