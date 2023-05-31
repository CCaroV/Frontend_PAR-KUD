import axios from "axios"

export const getVehicleMarkings=async()=>{
    try {
        const response = await axios.get('http://localhost:5000/cliente/vehiculos/marcas');
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
}