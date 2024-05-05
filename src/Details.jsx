import cl from './Details.module.scss'

export const Details = ({details, setDetails}) => {
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
                        description: prev.description + '+new'
                    }
                 })
            }}>{details.buttonText}</button>            
         </div>
        </div>
       
      </div>
    </div>
  );
};
