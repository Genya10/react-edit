import { memo } from "react";

 const InitialDetails = ({details, setDetails,handleLoading}) => {
  return (
    <div>
      <div >       
        <div>
         <h1>{details.title}</h1>
         <h2>{details.description}</h2>
         <div>
            <button onClick={()=>{
                 setDetails(prev => {
                    return {
                        ...prev,
                        title: prev.title + '+new'
                    }
                 })
            }}>{details.buttonText}</button>  
            <button onClick={handleLoading}
            >Change loading</button>          
         </div>
        </div>       
      </div>
    </div>
  );
};

export const Details= memo(InitialDetails);