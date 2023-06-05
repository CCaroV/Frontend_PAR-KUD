import axios from "../../../services/axiosconfig";
import { useEffect, useState } from "react";

const Step3Reservation = ({ disableDiv, formData, onFormChange, valid,setForm,handleReservation }) => {
  const [infoCards, setInfoCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardType, setCardType] = useState("");

  const body = {
    ciudad_p: formData.ciudad_p,
    es_parq_cubierto_p: formData.es_parq_cubierto_p,
    tipo_parqueadero_p: formData.tipo_vehiculo_p,
    nombre_sucursal_p: formData.nombre_sucursal_p,
  };

  const parkingInfoPetition = () => {
    axios
      .post("/cliente/sucursal/reserva", body)
      .then((res) => {
        const direccionSucursal = res.data[0]["Dirección"];
        const tarifa = res.data[0]["Tarifa minuto"];
        console.log("Before update:", formData);
        const updatedFormData = {
          ...formData,
          direccion_sucursal_p: direccionSucursal,
          tarifa: tarifa,
        };
        
        setForm(updatedFormData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardsPetition = () => {
    axios
      .post("/cliente/metodosDePago")
      .then((res) => {
        setInfoCards(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    console.log(selectedValue);

    const selectedOption = infoCards.find(
      (option) => option["Últimos 4 dígitos"] === selectedValue
    );
    const nombre_duenio_tarjeta_p = selectedOption["Nombre"];
    const apellido_duenio_tarjeta_p = selectedOption["Apellido"];
    const tipo_tarjeta_p = selectedOption["Tipo tarjeta"];

    setName(nombre_duenio_tarjeta_p);
    setLastName(apellido_duenio_tarjeta_p);
    setCardType(tipo_tarjeta_p);

    const updatedFormData = {
      ...formData,
      ultimos_cuatro_digitos_p: selectedValue,
      nombre_duenio_tarjeta_p: nombre_duenio_tarjeta_p,
      apellido_duenio_tarjeta_p: apellido_duenio_tarjeta_p,
      tipo_tarjeta_p:tipo_tarjeta_p
    };

    setForm(updatedFormData);
  };

  useEffect(() => {
    parkingInfoPetition();
    cardsPetition();
  }, [valid]);

  return (
    <div
      id="form3"
      className="mx-2 bg-gray-100 w-full pointer-events-none bg-gray-300 opacity-50"
    >
      <div className="w-full relative px-4 bg-trasnparent mx-8 border-black rounded-3xl sm:p-2 ">
        <div className="flex items-center">
          <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
            i
          </div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Reserva tu cupo</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Completa los campos y reserva tu cupo.
            </p>
          </div>
        </div>
        <div className="mx-10 py-8 justify-around text-base text-gray-700 sm:text-lg sm:leading-7">
          <div className="flex">
            <div className="flex flex-col mr-20">
              <label className="leading-loose font-bold ">Ciudad</label>
              <p>{formData.ciudad_p}</p>
            </div>
            <div className="flex flex-col mr-20">
              <label className="leading-loose font-bold ">Parqueadero</label>
              <p>{formData.nombre_sucursal_p}</p>
            </div>
            <div className="flex flex-col mx-3">
              <label className="leading-loose font-bold">Dirección</label>
              <p>{formData.direccion_sucursal_p}</p>
            </div>

            <div className="flex flex-col mx-3">
              <label className="leading-loose font-bold">Tarifa-minuto</label>
              <p>${formData.tarifa}</p>
            </div>

            <div className="flex flex-col w-40 mx-3">
              <label className="leading-loose font-bold">Fecha reserva</label>
              <input
                name="fecha_reserva_p"
                value={formData.fecha_reserva_p}
                onChange={onFormChange}
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                type="date"
              />
            </div>

            <div className="flex flex-col w-40 mx-3">
              <label className="leading-loose font-bold">Hora de entrada</label>
              <input
                name="hora_reserva_p"
                value={formData.hora_reserva_p}
                onChange={onFormChange}
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                type="time"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative px-4 bg-trasnparent mx-8 border-black rounded-3xl sm:p-2 ">
        <div className="flex items-center">
          <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
            i
          </div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Tarjeta</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Información de tus tarjetas
            </p>
          </div>
        </div>
        <div className="mx-10 py-8 justify-around text-base text-gray-700 sm:text-lg sm:leading-7">
          <div className="flex">
            <div className="flex flex-col mr-20">
              <label className="leading-loose font-bold ">
                Ultimos 4 dígitos
              </label>
              <select
                name="ultimo_cuatro_digitos"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Tarjetas</option>
                {infoCards.map((card, index) => {
                  return (
                    <option key={index} value={card["Últimos 4 dígitos"]}>
                      {card["Últimos 4 dígitos"]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mr-20">
              <label className="leading-loose font-bold ">
                Tipo de tarjeta
              </label>
              <input
                name="tipo_tarjeta_p"
                type="text"
                value={cardType}
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                disabled
              />
            </div>
            <div className="flex flex-col mr-20">
              <label className="leading-loose font-bold">Propietario</label>
              <input
                name="nombre"
                value={name +' '+lastName}
                type="text"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose font-bold ">CVC</label>
              <div className="flex">
                <input
                  name="cvc"
                  value={formData.cvc}
                  onChange={onFormChange}
                  type="text"
                  className="px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 w-20 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="3 dígitos"
                />
              </div>
            </div>
            <div className="flex flex-col mx-3">
              <label className="leading-loose font-bold">Puntos usados</label>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mx-auto mb-4 mt-0">
        <button
          className="flex justify-center items-center w-1/4 text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white"
          onClick={disableDiv}
        >
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
          Cancelar
        </button>
        <button onClick={handleReservation} className="bg-yellow flex justify-center items-center w-1/4 text-black font-bold px-4 py-3 shadow rounded-md ">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default Step3Reservation;
