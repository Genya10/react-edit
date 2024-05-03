import cl from './Details.module.scss'

export const Details = ({title,setTitle}) => {
  return (
    <div>
      <div className={cl.container}>
        <img src="./iam.jpg" width={250} />
        <div>
          <h2>{title}</h2>
          <button onClick={
            () => setTitle(prev=>{
                return prev + "again"
            })}>Click</button>
        </div>
        <p className={cl.text}>My third vite app</p>
      </div>
    </div>
  );
};
