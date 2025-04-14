import { useState } from "react";

export const FormRegistro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando:", formData);
    // Aquí podrías hacer una petición fetch/axios para enviar los datos a una API
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="Main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameUser">Usuario:</label>
        <input
          type="text"
          id="nameUser"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="mailUser">Email:</label>
        <input
          type="email"
          id="mailUser"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </main>
  );
};



