import axios from "../../../services/axiosconfig";
import { useState } from "react";
import Step1Reservation from "./Step1Reservation";
import Step2Reservation from "./Step2Reservation";
import Step3Reservation from "./Step3Reservation";
import { showSuccessAlert,showErrorAlert} from "../../../services/alertsconfig";

const MakeReservation = () => {
  const [step3, setStep3] = useState(false);
  const [formReserva, setFormReserva] = useState({
    tipo_vehiculo_p: undefined,
    marca_placa_vehiculo_p: "",
    es_parq_cubierto_p: undefined,
    ciudad_p: undefined,
    nombre_sucursal_p: undefined,
    direccion_sucursal_p: "",
    fecha_reserva_p: "",
    hora_reserva_p: "",
    ultimos_cuatro_digitos_p: "",
    tipo_tarjeta_p: "",
    nombre_duenio_tarjeta_p: "",
    apellido_duenio_tarjeta_p: "",
    puntos_usados_p: 0,
    tarifa: "",
    cvc:""
  });

  const handleFormChange = (e) => {
    setFormReserva({
      ...formReserva,
      [e.target.name]: e.target.value,
    });
  };

  const reservationPetition = () => {
    axios
      .post("/cliente/reservar", formReserva)
      .then((res) => {
        if (validarCVC()){
          showSuccessAlert('Reserva registrada','/YourReservations')
        }else {
          showErrorAlert("Verifica tus datos.También tu CVC");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const validarCVC = () => {
    let cvcRegex = /^[0-9]{3}$/;
    return cvcRegex.test(formReserva.cvc);
  };

  const enableDiv = (id) => () => {
    if (id == "form3") {
      setStep3(true);
    }
    let div = document.getElementById(id);
    div.classList.remove("pointer-events-none");
    div.classList.remove("bg-gray-300");
    div.classList.remove("opacity-50");
  };

  const disableDiv = () => {
    showSuccessAlert('Registro de reserva cancelado','/MakeReservation')
    };
  

  return (
    <>
      <div className="flex">
        <Step1Reservation
          enableDiv={enableDiv}
          formData={formReserva}
          onFormChange={handleFormChange}
        />
        <Step2Reservation
          enableDiv={enableDiv}
          formData={formReserva}
          setForm={setFormReserva}
          onFormChange={handleFormChange}
        />
      </div>
      <div>
        <Step3Reservation
          disableDiv={disableDiv}
          formData={formReserva}
          onFormChange={handleFormChange}
          setForm={setFormReserva}
          valid={step3}
          handleReservation={reservationPetition}
        />
      </div>
    </>
  );
};

export default MakeReservation;
