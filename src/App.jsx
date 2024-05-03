import { useState } from "react";
import { Details } from "./Details";

function App() {

  const [title,setTitle] = useState('Null');

  return (
    <div>
     <Details title={title} setTitle={setTitle}/>
    </div>
  );
}

export default App;
