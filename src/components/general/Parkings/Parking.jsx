import axios from '../../../services/axiosconfig'
import { useState, useEffect } from "react"
import ParkingCard from "./ParkingCard"

const Parking = () => {

  const [parkings, setParkings] = useState([])
  const [parkingTable, setParkingTable] = useState([])
  const [search, setSearch] = useState("")
  const [diaActual, setDiaActual] = useState('');


  const parkingsPetition = () => {
    axios.get('/cliente/parqueaderos').then(res => {
        setParkings(res.data);
        setParkingTable(res.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter = (word) => {
    let resultSearch = parkingTable.filter(element => {
      if (element['Nombre parqueadero'].toLowerCase().includes(word.toLowerCase())) {
        return element;
      }
    })

    setParkings(resultSearch);
  }

  useEffect(() => {
    const obtenerDiaActual = () => {
      const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const fechaActual = new Date();
      const dia = fechaActual.getDay();
      const nombreDia = diasSemana[dia];
      setDiaActual(nombreDia);
    };

    
    obtenerDiaActual();
    parkingsPetition()
   
  }, [])

  

  return (
    <>
      <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center">Nuestros parqueaderos</h1>
      <h2 className="my-3 text-lg font-bold leading-none tracking-tight text-gray-900 text-center">Día de la semana:  {diaActual}</h2>

      <form className="mx-64">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Buscar</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Buscar parqueadero" value={search} onChange={handleChange} />
        </div>
      </form>

      <article className="relative w-full h-3/4 top-10 justify-center">
        <section className="grid grid-cols-3 h-fit pb-6 ">
          {
            parkings.map((parking,index) => (
              <ParkingCard key={index} info={parking} />
            ))

          }
        </section>
      </article>
    </>
  )
}

export default Parking