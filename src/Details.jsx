import cl from './Details.module.scss'

export const Details = ({details, setDetails}) => {
  return (
    <div>
      <div className={cl.container}>
        <img src="./iam.jpg" width={250} />
        <div>
         <h1>{details.title}</h1>
         <h2>{details.description}</h2>
         <div>
            <button onClick={()=>{
                 setDetails(prev => {
                    return {
                        ...prev,
                        title: prev.title + '...'
                    }
                 })
            }}>{details.buttonText}</button>            
         </div>
        </div>
        <p className={cl.text}>My third vite app</p>
      </div>
    </div>
  );
};
