import { useEffect, useState } from "react";
import axios from "../../../services/axiosconfig";

const YourVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleTable, setVehicleTable] = useState([]);
  const [search, setSearch] = useState("");

  const vehiclesPetition = () => {
    axios
      .post("/cliente/vehiculos")
      .then((res) => {
        console.log(res.data);
        setVehicles(res.data);
        setVehicleTable(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (word) => {
    let resultSearch = vehicleTable.filter((element) => {
      if (
        element["Placa"].toUpperCase().includes(word.toUpperCase())
      ) {
        return element;
      }
    });

    setVehicles(resultSearch);
  };

  useEffect(() => {
    vehiclesPetition();
  }, []);

  return (
    <>
      <h1 className="mt-4 text-4xl font-bold leading-none tracking-tight  text-center">
        Vehículos registrados
      </h1>
      <div className="w-3/4 my-10 mx-auto">
        <div className="relative overflow-x-auto">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Buscar vehículo por placa
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                value={search}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Placa de vehículo"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Tipo de vehículo
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Placa
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Propietario
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Marca
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
                {vehicles.map((vehicle) => {
                  return (
                    <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{vehicle["Tipo vehículo"]}</td>
                      <td className="px-6 py-4">{vehicle["Placa"]}</td>
                      <td className="px-6 py-4">
                        {vehicle["Nombre propietario"]}
                      </td>
                      <td className="px-6 py-4">{vehicle["Marca"]}</td>
                      <td className="px-6 py-4">{vehicle["Color"]}</td>
                     </tr>
                    </>
                  )})
                }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default YourVehicles;
