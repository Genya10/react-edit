import { useState } from "react";
import { Details } from "./Details";

function App() {

const [details, setDetails] = useState({
  title:'Null',
  description:'Hello,everybody',
  buttonText:'Click me'
})

  return (
    <div>
     <Details
       details={details} setDetails={setDetails}
      />
    </div>
  );
}

export default App;
