import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Cookies from "js-cookie";

const LoginCard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const [token, setToken] = useState("");

  const key = "6Ld4DS8mAAAAAEF7bwmdKpvrQtil9Qn2IXYln36F";
  const captcha = useRef(null);
  const [validCaptcha, setValidCaptcha] = useState(false);

  const onChange = () => {
    captcha.current.getValue() ? setValidCaptcha(true) : console.log("error");
  };

  const handleLogin = () => {
    validCaptcha ? window.location.href="/Parkings" : alert("Por favor acepta el captcha");
  };

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const body = {
    user: "parkud_db_admin",
    password: "20181020027",
  };

  const tokenPetition = () => {
    axios
      .post("http://parkud.eastus.cloudapp.azure.com:5000/crearToken", body)
      .then((res) => {
        setToken(res.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    tokenPetition();
    Cookies.set("token", token);
    localStorage.setItem('rol',rol);

  }, [rol]);

  return (
    <main className="container flex justify-center mx-auto mt-2 mb-0">
      <article
        id="userSign"
        className={`w-1/4  absolute rounded-t-2xl shadow-xl rounded-b-xl bg-blue`}
      >
        <img
          src="https://res.cloudinary.com/dn1k0drir/image/upload/v1685304390/sale_1_vzaywe.png"
          alt="Logo de la app"
          id="appLogo"
          width="290"
          height="230"
          className="mx-auto"
        />

        <form action="" id="userSignIn-form" className="mt-0">
          <div id="form-username" className="flex justify-center">
            <label htmlFor="username"></label>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Correo electrónico"
              value={username}
              className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div id="form-password" className="flex justify-center">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              className="w-3/4 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5">

                  <select
                    name="rol"
                    required
                    onChange={(e)=>{setRol(e.target.value)}}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  >
                    <option value="">
                      Selecciona rol
                    </option>
                    <option value="cliente">
                      cliente
                    </option>
                    <option value="administrador">
                      administrador
                    </option>
                    <option value="gerente">
                      gerente
                    </option>
                    
                  </select>
           </div>
          <div className="flex justify-center mt-5">
            <ReCAPTCHA
              sitekey={key}
              onChange={onChange}
              ref={captcha}
              className="scale-95"
            />
          </div>

          <section className="flex justify-center pb-8 mx-10 mt-10 mb-4">
            <input
              type="button"
              id="button-logIn"
              value="Iniciar sesión"
              onClick={handleLogin}
              className={`w-1/2 px-4 py-2 mr-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
            />

            <input
              type="button"
              id="button-signIn"
              value="Registrarse"
              onClick={handleSignUp}
              className={`w-1/2 px-4 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
            />
          </section>
        </form>
      </article>
    </main>
  );
};

export default LoginCard;
