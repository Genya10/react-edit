import cl from './Details.module.scss'

export const Details = ({title,text,number}) => {
  return (
    <div>
      <div className={cl.container}>
        <img src="./iam.jpg" width={250} />
        <h1 className={cl.title}>
            {title}{text}
            <h3>{number}</h3>
        </h1>
        <p className={cl.text}>My third vite app</p>
      </div>
    </div>
  );
};
