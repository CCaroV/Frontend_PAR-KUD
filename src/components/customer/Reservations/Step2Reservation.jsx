import { useState, useEffect } from "react";
import axios from "../../../services/axiosconfig";

const Step2Reservation = ({ enableDiv, formData, setForm,onFormChange }) => {
  
  const [info, setInfo] = useState([]);

  const body = {
    tipo_vehiculo_p:
      formData.tipo_vehiculo_p === undefined ? null : formData.tipo_vehiculo_p,
    ciudad_p:
      formData.ciudad_p === undefined ? null : formData.ciudad_p,
    es_parq_encubierto_p:
      formData.es_parq_cubierto_p === undefined ? null : formData.es_parq_cubierto_p,
      nombre_sucursal_p:
      formData.nombre_sucursal_p === undefined ? null : formData.nombre_sucursal_p,
  };


  const ciudades = info.map((objeto) => objeto["Ciudad"]);

  const ciudadesUnicas = ciudades.filter(
    (ciudad, index) => ciudades.indexOf(ciudad) === index
  );

  const parkingsPetition = () => {
    // console.log(body);
    axios
      .post("/cliente/sucursales", body)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
      setInfo([])
      parkingsPetition();
  }, [formData.ciudad_p, formData.nombre_sucursal_p, formData.es_parq_cubierto_p || undefined]);

  const cleanFilters = () => {
    setForm({ ...formData, es_parq_cubierto_p: "", ciudad_p:undefined , nombre_sucursal_p: undefined });
    parkingsPetition();
     };
  
  return (
    <div
      id="form2"
      className="bg-gray-100 flex flex-col justify-center w-1/2 pointer-events-none bg-gray-300 opacity-50"
    >
      <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">
                  Escoge tu parqueadero (sucursal)
                </h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Filtra la información para encontrar el parqueadero.
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-4">
                  
                  <div className="flex flex-col w-full">
                    <label className="leading-loose">
                      ¿Parqueadero cubierto?
                    </label>
                    <select
                      name="es_parq_cubierto_p"
                      value={formData.es_parq_cubierto_p}
                      onChange={onFormChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="true">Si</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="leading-loose">Ciudad</label>
                    <select
                      name="ciudad_p"
                      value={formData.ciudad_p}
                      onChange={onFormChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value={undefined}>Selecciona una ciudad</option>
                      {ciudadesUnicas.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex flex-col w-3/4">
                    <label className="leading-loose">Tipo de parqueadero</label>
                    <input
                      name="tipo_parqueadero"
                      value={formData.tipo_vehiculo_p}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Parquedero"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col w-3/4">
                    <label className="leading-loose">Sucursal</label>
                    <select
                      name="nombre_sucursal_p"
                      value={formData.nombre_sucursal_p}
                      onChange={onFormChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">Selecciona sucursal</option>
                      {info.map((item, index) => {
                        return (
                          <option key={index} value={item["Nombre sucursal"]}>
                            {item["Nombre sucursal"]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button onClick={cleanFilters} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Limpiar filtros
                </button>
                <button
                  className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md"
                  onClick={enableDiv("form3")}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Reservation;
