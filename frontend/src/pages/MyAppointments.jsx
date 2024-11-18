import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        Mes rendez-vous
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600 ">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Adresse:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & heure :
                </span>
                25 janvier 2025 | 08h30
              </p>
            </div>

            <div></div>

            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone -500 text-center sm:min-w-48 py-2 border rounded hover:bg-blue-300 hover:text-white transition-all duration-300 ">
                Payez ici
              </button>
              <button className="text-sm text-stone -500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300">
                Annuler le rendez-vous
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
