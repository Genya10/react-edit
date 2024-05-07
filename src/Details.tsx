import { memo } from "react";
import { IDetails } from "./types";

interface Props {
  details:IDetails,
  handleLoading:()=> void
}

 const InitialDetails = ({details,handleLoading}:Props) => {
  
  return (
    <div>
      <div >       
        <div>
         <h1>{details.title}</h1>
         <h2>{details.description}</h2>
         <div>
            <button onClick={handleLoading}
            >{details.buttonText}</button>  
            <button onClick={handleLoading}
            >Change loading</button>          
         </div>
        </div>       
      </div>
    </div>
  );
};

export const Details= memo(InitialDetails);