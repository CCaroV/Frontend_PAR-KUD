import { useNavigate } from "react-router-dom"

const AdminParkingCard = () => {
  const navigate = useNavigate();

  const editDataComp = () => {
    navigate("/SignUp");
  }

  return (
    <>
      <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">Sucursal</h1>
      <div className="my-2 p-5 bg-transparent max-w-[500px] min-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 bg-red text-lg text-center font-semibold tracking-tight text-white rounded">Cedritos</h5>
        <p className="mb-1 text-sm font-normal text-center text-black"><span className="font-semibold">Tipo sucursal:</span> Tipo Suc </p>
        <p className="mb-1 text-sm font-normal text-center text-black"><span className="font-semibold">Ciudad:</span> Bogotá </p>
        <p className="mb-1 text-sm font-normal text-center text-black "><span className="font-semibold">Dirección:</span> kr 153 19-20</p>
        <p className="mb-1 text-sm font-normal text-center text-black "><span className="font-semibold">Disponibilidad de cupos:</span> 2 </p>
        <hr />
        <p className="mt-1 text-sm font-normal text-black text-center"><span className="font-bold">Tarifas</span> </p>
        <hr />
        <p>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carro</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moto</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SUV</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adicional Cubierto</th>

              </tr>
            </thead>
            <tbody class="bg-transparent divide-y divide-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              </tr>
            </tbody>
          </table>
        </p>
      </div>

      <div className="my-2 p-5 bg-transparentmax-w-[700px] min-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">

        <p className="mt-1 text-sm font-normal text-black text-center"><span className="font-bold">Tarifas</span> </p>
        <hr />

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span className="font-bold">Dia</span> </th>
              <th class="px-6 py-3 text- text-xs font-medium text-gray-500 uppercase tracking-wider"><span className="font-bold">Horarios</span> </th>
            </tr>
          </thead>
          <tbody class="bg-transparent divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Lunes</td>

              <td class="px-6 py-4 whitespace-nowrap">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apertura</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cierre</th>
                    </tr>
                  </thead>
                  <tbody class="bg-transparent divide-y divide-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Lunes</td>

              <td class="px-6 py-4 whitespace-nowrap">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apertura</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cierre</th>
                    </tr>
                  </thead>
                  <tbody class="bg-transparent divide-y divide-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Lunes</td>

              <td class="px-6 py-4 whitespace-nowrap">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apertura</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cierre</th>
                    </tr>
                  </thead>
                  <tbody class="bg-transparent divide-y divide-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horaa </th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horaa</th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>




          </tbody>
        </table>
      </div>

      <div className="my-2 p-5 bg-transparent max-w-[500px] min-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 bg-blue text-lg text-center font-semibold tracking-tight text-white rounded">Editar</h5>


        <label className="leading-loose">Tipo Vehiculo</label>
        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
          <option value="C.C">C.C</option>
          <option value="NUIP">NUIP</option>
          <option value="T.I">T.I</option>
        </select>

        <label className="leading-loose">Valor</label>
        <input
          type="text"
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          placeholder="Valor"

        />
        <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
          Editar
        </button>


      </div>
      <div className="my-2 p-5 bg-transparent max-w-[500px] min-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">
        <label className="leading-loose">DIA</label>
        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
          <option value="C.C">C.C</option>
          <option value="NUIP">NUIP</option>
          <option value="T.I">T.I</option>
        </select>
        <label className="leading-loose">Horario Apertura</label>
        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
          <option value="C.C">C.C</option>
          <option value="NUIP">NUIP</option>
          <option value="T.I">T.I</option>
        </select>


        <label className="leading-loose">Horario Cierre</label>
        <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
          <option value="C.C">C.C</option>
          <option value="NUIP">NUIP</option>
          <option value="T.I">T.I</option>
        </select>
        <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
          Editar
        </button>
      </div>
      <div className="my-2 p-5 bg-transparent max-w-[500px] min-w-[500px] mx-auto border border-gray-200 rounded-lg shadow ">
        <label className="leading-loose">Valor cubierto</label>
        <input
          type="text"
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          placeholder="Valor Cubierto"

        />
        <button className="bg-yellow flex justify-center items-center w-full text-black font-bold px-4 py-3 shadow rounded-md ">
          Editar
        </button>

      </div>



    </>
  )
}

export default AdminParkingCard