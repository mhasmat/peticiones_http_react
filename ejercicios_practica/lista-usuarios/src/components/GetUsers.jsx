import axios from "axios";
import { useEffect, useState } from "react";

const GetUsers = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        axios
        .get("https://reqres.in/api/users")
        .then((response) => setUsuario(response.data.data))
        .catch((error) => console.error("Error!", error));
    }, []);

  return (
    <div>
        <h2>Lista de Usuarios</h2>
        
        {
            usuario
            ? usuario.map((data) => (
                <div key={data.id}>
                    <img src={data.avatar} />
                    <div>
                        <p>
                        Nombre: {data.first_name ? data.first_name : "No data"}
                        </p>
                        <p>
                        Apellido: {data.last_name ? data.last_name : "No data"}
                        </p>
                        <p>
                        e-mail: {data.email ? data.email : "No data"}
                        </p>
                    </div>
                    <hr />
                </div>
                    
            ))
            : <h3>Loading...</h3>
        }
        
    </div>
  )
}

export default GetUsers