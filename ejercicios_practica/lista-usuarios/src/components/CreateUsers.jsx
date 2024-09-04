import axios from "axios";
import { useState } from "react";

const CreateUsers = () => {
  const [ mensaje, setMensaje ] = useState("");
  
  const handleCreateUser = (e) => {
    e.preventDefault();
    
    const newUser = {
        name: "",
        job: "",
    };
        
    axios
    .post("https://reqres.in/api/users", newUser)
    .then((response) => {
      console.log(response);
      setMensaje('Usuario creado correctamente!');
    })
    .catch((error) => {
      setMensaje('Error al crear Usuario!!!');
      console.log(error);
    });
  }

  return (
    <div>
      <h2>Crear Usuario</h2>
      <button onClick={handleCreateUser}>Crear Usuario</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default CreateUsers