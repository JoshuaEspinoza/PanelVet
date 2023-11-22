import PropTypes from "prop-types";
import Paciente from "../Paciente";
import "./listadoPacientes.css";

const ListadoPacientes = ({
  pacientes,
  setPaciente,
  handleEliminarPaciente,
}) => {
  return (
    <div
      style={{ height: "844px" }}
      className="md:w-1/2 lg:w-3/5 overflow-y-scroll listadoPContainer  "
    >
      <h2 className="font-block text-3xl text-center font-bold ">
        Listado de pacientes
      </h2>

      {pacientes.length ? (
        <>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
        </>
      ) : (
        <>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes mediante el{" "}
            <span className="text-indigo-600 font-bold ">
              formulario de la izquierda
            </span>
          </p>
        </>
      )}

      {pacientes.map((paciente) => (
        <Paciente
          paciente={paciente}
          key={paciente.id}
          setPaciente={setPaciente}
          handleEliminarPaciente={handleEliminarPaciente}
        />
      ))}
    </div>
  );
};

ListadoPacientes.propTypes = {
  eliminarPaciente: PropTypes.any,
  handleEliminarPaciente: PropTypes.any,
  pacientes: PropTypes.shape({
    length: PropTypes.any,
    map: PropTypes.func,
  }),
  setPaciente: PropTypes.any,
};

export default ListadoPacientes;
