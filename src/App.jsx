import { useState, useEffect } from "react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/listadoPacientes/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(
    () => JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    return localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const handleEliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
    setPaciente({});
  };

  return (
    <div className="container mx-auto pt-8">
      <Header />
      <div className="mt-14  md:flex ">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          handleEliminarPaciente={handleEliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
