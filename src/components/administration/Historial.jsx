const Historial = () => {
  return (
    <>
      <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Historial Clientes</h1>
      <div className="mx-6 my-2 p-5 bg-transparent min-w-[200px] max-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">
        <h3 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Buscar Usuario</h3>

        <div className="grid grid-cols-3 h-fit pb-6">
          <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Buscar Usuario" />
          <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
            Buscar
          </button>
        </div>

      </div>
      <section className="grid grid-cols-2 h-fit pb-6 space-x-4">
        <div className="mx-6 my-2 p-5 bg-transparent min-w-[50px] mx-auto border border-gray-200 rounded-lg shadow ">
          <h3 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Filtrar por fecha</h3>
          <div className="grid grid-cols-5 h-fit pb-6 space-x-4">
            <h1 className="text-center">Desde:</h1>
            <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Buscar Usuario" />
            <h1 className="text-center">Hasta:</h1>
            <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Buscar Usuario" />
            <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
              Buscar
            </button>
          </div>
        </div>
        <div className="mx-6 my-2 p-5 bg-transparent min-w-[50px] mx-auto border border-gray-200 rounded-lg shadow ">
          <h3 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Ciudad & Sucursal</h3>

          <div className="grid grid-cols-2 h-fit pb-6">

            <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
              <option value="" disabled selected>
                Ciudad
              </option>
              <option value="C.C">C.C</option>
              <option value="NUIP">NUIP</option>
              <option value="T.I">T.I</option>
            </select>
            <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
              Buscar
            </button>

            <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
              <option value="" disabled selected>
                Sucursal
              </option>
              <option value="C.C">C.C</option>
              <option value="NUIP">NUIP</option>
              <option value="T.I">T.I</option>
            </select>
            <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
              Buscar
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Usuario: Pepito Perez</h3>
        <div className="mx-6 my-2 p-5 bg-transparent min-w-[200px] max-w-[1000px] mx-auto border border-gray-200 rounded-lg shadow ">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-red bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Vehiculo</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ciudad</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parqueadero</th>
              </tr>
            </thead>
            <tbody class="bg-transparent divide-y divide-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              </tr>

              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              </tr>

              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              </tr>

              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Historial;
