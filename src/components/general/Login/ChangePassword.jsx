//Importaciones necesarias para el funcionamiento de componente
import axios from "axios";
import { useState } from "react";
import Footer from "../Footer/Footer";
import {showSuccessAlert,showErrorAlert,} from "../../../services/alertsconfig";

const ChangePassword = () => {
  // Declaración de variables
  const url = "https://par-kud.azurewebsites.net/cliente/registro/clave";

  // Declaración de States
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombre_usuario_p, setNombre_usuario_p] = useState("");

  const body = {
    nombre_usuario_p: nombre_usuario_p,
    clave_nueva_p: password,
  };

  // Funciones
  const ChangePassword = () => {
    if (
      nombre_usuario_p.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        console.log(body);
        axios
          .post(url, body)
          .then((res) => {
            console.log(res.data);
            showSuccessAlert('Contraseña reestablecida satisfactoriamente','/')
          })
          .catch((err) => {
            showErrorAlert('Hubo un error')
            console.log(err);
          });
      } else {
        showErrorAlert('Las contraseñas no coinciden');
      }
    } else {
      showErrorAlert("Por favor llena todos los campos");
    }
  };

  // Diseño del componente (HTML y tailwind)
  return (
    <>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="my-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-dark text-center ">
          Cambio de contraseña
        </h1>
        <main className="container flex justify-center mx-auto mt-10">
          <article
            id="restorePassword"
            className={`w-3/4 2xl:w-1/4 xl:w-1/3 lg:w-1/3 md:w-2/5 sm:w-2/3 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-hero`}
          >
            <form className="mt-6">
              <div id="form-oldPassword" className="flex justify-center">
                <label htmlFor="oldPassword"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Ingrese su correo"
                  value={nombre_usuario_p}
                  required
                  className="w-3/4 mt-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
                  onChange={(e) => setNombre_usuario_p(e.target.value)}
                />
              </div>
              <div id="form-oldPassword" className="flex justify-center">
                <label htmlFor="oldPassword"></label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  placeholder="Ingrese su nueva contraseña"
                  value={password}
                  required
                  className="w-3/4 mt-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div id="form-newPassword" className="flex justify-center">
                <label htmlFor="newPassword"></label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Confirme su nueva contraseña"
                  value={confirmPassword}
                  required
                  className="w-3/4 mt-8 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <section
                id="form-nutton"
                className="flex justify-center pb-8 mx-10 mt-10"
              >
                <input
                  type="button"
                  id="button-restore"
                  value="Reestablecer contraseña"
                  onClick={ChangePassword}
                  className={`w-3/5 px-4 py-3 border-red border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                    hover:cursor-pointer hover:bg-red hover:text-white transition-colors`}
                />
              </section>
            </form>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ChangePassword;
