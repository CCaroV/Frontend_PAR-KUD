import { useEffect, useState } from "react";
import { showSuccessAlert,showErrorAlert} from "../../../services/alertsconfig";
import axios from "../../../services/axiosconfig";

const RegisterVehicles = () => {
  const [dataMarkings, setDataMarkings] = useState([]);
  const [formData, setFormData] = useState({
    tipo_vehiculo_p: "",
    placa_p: "",
    nombre_1_p: "",
    nombre_2_p: "",
    apellido_1_p: "",
    apellido_2_p: "",
    marca_vehiculo_p: "",
    color_vehiculo_p: "",
  });

  const getVehicleMarkings = () => {
    axios
      .get("/cliente/vehiculos/marcas")
      .then((res) => {
        setDataMarkings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['tipo_vehiculo_p', 'placa_p', 'nombre_1_p', 'apellido_1_p','apellido_2_p','marca_vehiculo_p', 'color_vehiculo_p'];
    const isAllFilled = requiredFields.every((field) => formData[field].trim() !== '');
    if(isAllFilled){
      axios
      .post("/cliente/registro/vehiculo", formData)
      .then((response) => {
        showSuccessAlert("Vehículo registrado con éxito", "/AddVehicle");
        console.log(response.data);
      })
      .catch((error) => {
        showErrorAlert("Hubo un error con el registro del vehículo");
        console.error(error);
      });
    } else {
      showErrorAlert("Completa los campos");
    }
    
  };

  const handleCancel = () => {
    showSuccessAlert("Registro de vehículo cancelado", "/AddVehicle");
  };

  useEffect(() => {
    getVehicleMarkings();
  }, []);

  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center">
        <div className="abosulte t-0 py-2 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Registra tu vehículo</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Completa los siguientes campos.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Primer nombre</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          name="nombre_1_p"
                          value={formData.nombre_1_p}
                          onChange={handleChange}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Primer nombre"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Segundo nombre</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          name="nombre_2_p"
                          value={formData.nombre_2_p}
                          onChange={handleChange}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Segundo nombre"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Primer apellido</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          name="apellido_1_p"
                          value={formData.apellido_1_p}
                          onChange={handleChange}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Primer apellido"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Segundo apellido</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          name="apellido_2_p"
                          value={formData.apellido_2_p}
                          onChange={handleChange}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Segundo apellido"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Tipo de vehículo</label>
                    <select
                      name="tipo_vehiculo_p"
                      value={formData.tipo_vehiculo_p}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">Tipo de vehículo</option>
                      <option value="Automóvil">Automóvil</option>
                      <option value="Moto">Moto</option>
                      <option value="SUV">SUV</option>
                    </select>

                    <label className="leading-loose">Color</label>
                    <select
                      name="color_vehiculo_p"
                      value={formData.color_vehiculo_p}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">Escoge un color</option>
                      <option value="Azul">Azul</option>
                      <option value="Rojo">Rojo</option>
                      <option value="Amarillo">Amarillo</option>
                      <option value="Negro">Negro</option>
                      <option value="Gris">Gris</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Placa</label>
                    <input
                      type="text"
                      name="placa_p"
                      value={formData.placa_p}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Placa"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Marca</label>
                    <select
                      name="marca_vehiculo_p"
                      value={formData.marca_vehiculo_p}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">Escoge una marca</option>
                      {dataMarkings.map((item, index) => {
                        return (
                          <option key={index} value={item[0]}>
                            {item[0]}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={handleCancel}
                    className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      strokeWidth="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeWidth="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>{" "}
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md"
                  >
                    Registrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterVehicles;
