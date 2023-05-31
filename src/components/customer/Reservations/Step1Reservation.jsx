const Step1Reservation = ({ enableDiv, formData, onFormChange }) => {
  return (
    <div className=" bg-gray-100 flex flex-col justify-center w-1/2">
      <div className="t-0 py-2 sm:max-w-2xl sm:mx-22">
        <div className="relative px-4 py-2 bg-trasnparent mx-8 md:mx-0 border-black rounded-3xl sm:p-4 ">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Elige tu vehículo</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Elige con qué vehículo deseas reservar.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-5">
                  <div className="flex flex-col w-full">
                    <label className="leading-loose">Tipo de vehículo</label>
                    <select
                      name="tipo_vehiculo"
                      value={formData.tipo_vehiculo}
                      onChange={onFormChange}
                      required
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="" selected>
                        Selecciona un tipo de vehículo
                      </option>
                      <option value="Automovil">Automóvil</option>
                      <option value="Moto">Moto</option>
                      <option value="SUV">SUV</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">
                    Tus vehículos registrados
                  </label>
                  <select
                    name="info_vehiculo"
                    value={formData.info_vehiculo}
                    onChange={onFormChange}
                    required
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  >
                    <option value="" selected>
                      Selecciona {formData.tipo_vehiculo}
                    </option>
                    <option value="Vehículo 1">Vehículo 1</option>
                  </select>
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red hover:text-white">
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Limpiar filtros
                </button>
                <button
                  class="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md"
                  onClick={enableDiv("form2")}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Reservation;
