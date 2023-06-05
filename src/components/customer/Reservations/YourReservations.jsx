import { useEffect, useState } from "react";
import axios from "../../../services/axiosconfig";

const YourReservations = () => {
  const [reservations, setReservations] = useState([]);
  const reservationsPetition = () => {
    axios
      .post("/cliente/reservas")
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    reservationsPetition();
  }, []);

  return (
    <>
      <h1 className="mt-4 text-4xl font-bold leading-none tracking-tight  text-center">
        Tus reservas
      </h1>
      <div className="w-11/12 my-10 mx-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Fecha de reserva
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Ciudad
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Nombre sucursal
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Dirección
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Placa
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Slot asignado
                </th>
                <th scope="col" className="px-6 py-3 bg-red text-white">
                  Total reserva
                </th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => {
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">
                        {reservation["Fecha reserva"]}
                      </td>
                      <td className="px-6 py-4">{reservation["Ciudad"]}</td>
                      <td className="px-6 py-4">
                        {reservation["Nombre sucursal"]}
                      </td>
                      <td className="px-6 py-4">{reservation["Dirección"]}</td>
                      <td className="px-6 py-4">{reservation["Placa"]}</td>
                      <td className="px-6 py-4">{reservation["Slot"]}</td>
                      <td className="px-6 py-4">
                        {reservation["Total reserva"]}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default YourReservations;
