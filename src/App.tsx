import { useState, useContext, useEffect } from "react";
import { Details } from "./Details";
import cl from "./Details.module.scss";
import { AuthContext } from "./AuthContext";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { ITodo } from "./types";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about-us");
  }, []);

  return (
    <div className={cl.container}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Link to="/about-us">Go to about-us</Link>
    </div>
  );
}

export default App;
