import { colorCity } from "../../../data/colorCity"


const ParkingCard = ({ info }) => {
  const city = colorCity.find((item) => item.city === info['Ciudad']);
  const backgroundColor = city ? city.color : 'gray';

  return (
    <>
          <div className="mx-6 my-2 p-5 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className={`mb-2 ${backgroundColor} text-lg text-center font-semibold tracking-tight text-white rounded`}>{info['Nombre parqueadero']}</h5>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Tipo sucural:</span> {info['Tipo parqueadero']} </p>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Ciudad:</span> {info['Ciudad']} </p>
            <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Dirección:</span> {info['Dirección']}</p>
            <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Disponibilidad de cupos:</span> {info['Disponibilidad']}</p>
            <hr />
            <p className="mt-1 text-sm font-normal text-black"><span className="font-bold">Horarios</span> </p>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Hora de apertura:</span> {info['Hora abierto']} </p>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Hora de cierre:</span> {info['Hora cerrado']} </p>
            <hr />
            <p className="mt-1 text-sm font-normal text-black"><span className="font-bold">Tarifas</span> </p>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">SUV:</span> ${info['Tarifa SUV']} minuto </p>
            <p className="mb-1 text-sm font-normal text-black"><span className="font-semibold">Automóvil:</span> ${info['Tarifa automóvil']} minuto  </p>
            <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Moto:</span> ${info['Tarifa motocicleta']} minuto</p>
            <p className="mb-1 text-sm font-normal text-black "><span className="font-semibold">Incremento parq. cubiero:</span> {info['Incremento parq. cubierto']} </p>
            
          </div>
        
      
    </>
  )
}

export default ParkingCard