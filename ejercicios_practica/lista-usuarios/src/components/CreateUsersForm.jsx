import axios from "axios";
import { useState } from "react";

const CreateUsersForm = () => {
    const [ mensaje, setMensaje ] = useState("");

    const handleReset = () => {
        setMensaje("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        const usuario = {
            name: e.target.name.value,
            job: e.target.job.value,
        };

        if(!usuario.name || !usuario.job) {
            setMensaje('Todos los campos son requeridos!');
            return;
        }

        axios
        .post("https://reqres.in/api/users", usuario)
        .then((response) => {
            console.log(response);
            setMensaje('Usuario creado exitosamente!');
        })
        .catch((error) => {
            setMensaje('Error creando Usuario!!!');
            console.log(error);
        });  
    }

  return (
    <div>
        <h2>Create User Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:
                <input type="text" name="name" />
            </label>
            <br />
            <label htmlFor="job">Trabajo:
                <input type="text" name="job" />
            </label>
            <br />
            <input type="submit" value="Crear Usuario" />
            <input type="reset" value="Reset" onClick={handleReset} />
        </form>
        <p>{mensaje}</p>
    </div>
  );
}

export default CreateUsersForm;