import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setState] = useState("Administrateur");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Administrateur") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error("data.message");
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96-border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semobold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full ">
          <p>E-mail</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Mot de passe</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base ">
          Se connecter
        </button>
        {state === "Administrateur" ? (
          <p>
            Connexion médecin ?
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Cliquez ici
            </span>
          </p>
        ) : (
          <p>
            Connexion administrateur ?
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Administrateur")}
            >
              Cliquez ici
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
