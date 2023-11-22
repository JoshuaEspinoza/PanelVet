import PropTypes from "prop-types";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Paciente = ({ paciente, setPaciente, handleEliminarPaciente }) => {
  const newHandleEliminar = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar?",
      text: "No puedes revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5730d6",
      cancelButtonColor: "#000000",
      confirmButtonText: "Si, eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleEliminarPaciente(paciente.id); //llamar el prop y enviar el id
        Swal.fire("Eliminado!", "Tu cita se ha eliminado.", "success");
      }
    });
  };
  return (
    <div
      className="mx-5 my-10
     bg-white shadow-md
     px-5 py-10
     rounded-xl
     "
    >
      <p className="font-bold mb-3 text-gray-700 uppercase ">Nombre:{""}</p>
      <span className="font-normal normal-case">{paciente.nombre}</span>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Propietario:{""}
      </p>
      <span className="font-normal normal-case">{paciente.propietario}</span>
      <p className="font-bold mb-3 text-gray-700 uppercase ">Email:{""}</p>
      <span className="font-normal normal-case">{paciente.email}</span>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Fecha de alta:{""}
      </p>
      <span className="font-normal normal-case">{paciente.fecha}</span>
      <p className="font-bold mb-3 text-gray-700 uppercase ">Sintomas:{""}</p>
      <span className="font-normal normal-case">{paciente.sintomas}</span>

      <div className="flex justify-between mt-10 botonesFlex">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg"
          onClick={newHandleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  eliminarPaciente: PropTypes.any,
  handleEliminarPaciente: PropTypes.any,
  paciente: PropTypes.shape({
    email: PropTypes.any,
    fecha: PropTypes.any,
    id: PropTypes.any,
    nombre: PropTypes.any,
    propietario: PropTypes.any,
    sintomas: PropTypes.any,
  }),
  setPaciente: PropTypes.array,
};

export default Paciente;
