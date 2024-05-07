import { useState, useContext } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";
import { AuthContext } from "./AuthContext";
import { Header } from "./Header";

function App() {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  return (
    <div className={cl.container}>
      <Header/>
     
      {isLoggedIn ? (
        <button onClick={()=> setIsLoggedIn(false)}>
          Logout
        </button>
      ):(
        <button onClick={()=> setIsLoggedIn(true)}>
         Enter
        </button>
      )}
    </div>
  )
}

export default App;


