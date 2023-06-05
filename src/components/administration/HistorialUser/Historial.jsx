import {  useState } from "react";
import { TableBasic } from "./Table";
import axios from "../../../services/axiosconfig";

const Historial = () => {
  const [auditRecords, setAuditRecords] = useState([]);
  const [auditType, setAuditType] = useState("");

  const historialPetition = () => {
    axios
      .post("/auditoria")
      .then((res) => {
        const registrosFiltrados = res.data.filter((registro) =>
          registro["Transacción"].startsWith(auditType)
        );
        setAuditRecords(registrosFiltrados);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">
        Historial de usuarios
      </h1>
      <div className="flex items-center space-x-5 w-2/5 mx-auto">
        <div className="flex flex-col w-full text-center my-6">
          <label className="leading-loose text-black font-bold">Auditorias</label>
          <select
            name="tipo_vehiculo_p"
            value={auditType}
            onChange={(e) => setAuditType(e.target.value)}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          >
            <option value="">
              Selecciona el tipo de auditoría
            </option>
            <option value="Reserva">Reservas</option>
            <option value="Ingreso">Ingresos</option>
            <option value="Registro">Registros</option>
            <option value="Vehículo">Vehículos</option>
          </select>
        </div>
        <div className="pt-4 flex items-center space-x-4">
          <button
            className="bg-yellow  hover:border-2 hover:bg-transparent flex justify-center items-center w-full font-bold px-4 py-3 shadow rounded-md"
            onClick={historialPetition}
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
      <TableBasic data={auditRecords} />
      </div>
    </>
  );
};

export default Historial;
