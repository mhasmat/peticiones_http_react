import { useEffect, useState } from "react";
import axios from "axios";

const TodoItemAxios = () => {
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // funcion asíncrona para obtener los datos
    const fetchTodo = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            setTodo(response.data);
        } catch(err) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    // ejecutar la petición cuando el componente se monta
    useEffect(() => {
        fetchTodo();
    }, []);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

  return (
    <div>
        <h3>Todo Item:</h3>
        <p>ID: {todo.id}</p>
        <p>Title: {todo.title}</p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  )
}

export default TodoItemAxios