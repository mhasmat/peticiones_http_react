import axios from "axios";
import { useEffect, useState } from "react";

const FetchGet = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => setData(response.data))
        .catch((json) => console.error(json));
    }, []);

  return (
    <div style={{ color:"white" }}>
        <h1>FetchGet</h1>
        {data.length > 0 ? (
            data.map((a) => <h3 key={a.id}>{a.title}</h3>)
        ) : (
            <h1>Loading...</h1>
        )}
    </div>
  );
}

export default FetchGet