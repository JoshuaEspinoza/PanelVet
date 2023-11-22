import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      // llenar el form con la infor que tenemos en el setState, ya que esta atado o sumamente relacionado a los inputs
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } else {
      // Reiniciar el formulario
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    } //
  }, [paciente]);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);

    // utilizando curry
  };

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(0, 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      // lo que pasa es que aqui ejecuta la funcion, lo que regresa el return
      // en este caso regresaria por ejem: id:"sdfewtyrh"
      // no es necesario ejecutarla despues
    };

    if (paciente.id) {
      // editando el registro
      objetoPacientes.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPacientes : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // aqui si no estamos editando estamos creando un nuevo registro

      // setPacientes([...pacientes, objetoPacientes]); asi se haria normalmente,
      // teniendo que pasar un prop pacientes

      // solucion vista clase 74 preguntas,// de paciente, el setState funciona como
      // callback, trae a su variable Paciente y dice que quieres hacer con ella
      // en este caso copiamos todos los pacientes en un arreglo, y añadimos otro objeto
      objetoPacientes.id = generateId();
      setPacientes((pacientes) => [...pacientes, objetoPacientes]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div
      className="
      md:w-1/2 
        lg:w-2/5
          mx-5"
      style={{}}
    >
      <h2
        className="
        font-black 
          text-3xl
            text-center"
      >
        Seguimiento pacientes
      </h2>
      <p
        className="
        text-lg 
          mt-5 
            text-center
              mb-10"
      >
        Añade Pacientes y {""}
        <span
          className="
          text-indigo-600
           font-bold "
        >
          Administralos
        </span>
      </p>
      <form
        className="
         bg-white 
          shadow-md 
          rounded-lg 
          py-10 
          px-5 
          mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre de la mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={handleChange(setNombre)}
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={handleChange(setPropietario)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="Email"
          >
            Email
          </label>

          <input
            id="Email"
            type="text"
            placeholder="Email "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={handleChange(setEmail)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Fecha de dia de alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={handleChange(setFecha)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>

          <textarea
            placeholder="Describe los sintomas"
            id="sintomas"
            cols="30"
            rows="7"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={handleChange(setSintomas)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 
          text-white 
          uppercase 
          font-bold 
          hover:bg-indigo-700 
          cursor-pointer
          transition-colors"
          value={paciente.id ? "Editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  paciente: PropTypes.array,
  pacientes: PropTypes.shape({
    map: PropTypes.func,
  }),
  setPaciente: PropTypes.any,
  setPacientes: PropTypes.func,
};

export default Formulario;
