import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "./../../../admin/src/assets/assets";

const Navbar = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <div>
      <div>
        <img src={assets.logo} alt="" />
        <p>{aToken ? "Administrateur" : "Médecin"}</p>
      </div>
      <button>Déconnexion</button>
    </div>
  );
};

export default Navbar;
