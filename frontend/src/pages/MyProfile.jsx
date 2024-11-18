import { useState } from "react";
import { assets } from "../assets/assets";

export const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Khaled Toumi",
    image: assets.profile_pic,
    email: "khaledtoumi@gmail.com",
    phone: "+216  99369965",
    address: {
      line1: "G38V+Q9",
      line2: "Zarzis",
    },
    gender: "Masculain",
    dob: "2002-03-27",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="px-4 sm:px-6 md:px-10">
      <img className="w-36 rounded" src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">COORDONNÉES</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Téléphone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Adresse:</p>

          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">INFORMATIONS DE BASE</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Genre</p>
          {isEdit ? (
            <select
              className="max-w-20bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Masculin">Masculin</option>
              <option value="Féminin">Féminin</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Anniversaire:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-blue-300 px-8 py-2 rounded-full hover:bg-blue-300 hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Enregistrer les informations
          </button>
        ) : (
          <button
            className="border border-blue-300 px-8 py-2 rounded-full hover:bg-blue-300 hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};
