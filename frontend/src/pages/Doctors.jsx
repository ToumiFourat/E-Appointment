import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export const Doctors = () => {
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [doctors, speciality]);

    return (
        <div className="md:mx-10 my-10">
            <p className="text-gray-600">Parcourez les médecins spécialistes</p>
            <div className="flex col sm:flex-row items-start gap-5 mt-5">
                {/* Specialties Sidebar */}
                <div className="w-1/4 flex flex-col gap-3">
                    <p  className="font-semibold text-lg mb-3">Spécialités :</p>
                    <p onClick={()=> speciality === 'Médecin généraliste'? navigate('/doctors'):navigate('/doctors/Médecin généraliste')} className={`cursor-pointer ${speciality === "Médecin généraliste" ? "text-blue-500" : "hover:text-blue-500"}`}>Médecin généraliste</p>
                    <p onClick={()=> speciality === 'Gynécologue'? navigate('/doctors'):navigate('/doctors/Gynécologue')} className={`cursor-pointer ${speciality === "Gynécologue" ? "text-blue-500" : "hover:text-blue-500"}`}>Gynécologue</p>
                    <p onClick={()=> speciality === 'Dermatologue'? navigate('/doctors'):navigate('/doctors/Dermatologue')} className={`cursor-pointer ${speciality === "Dermatologue" ? "text-blue-500" : "hover:text-blue-500"}`}>Dermatologue</p>
                    <p onClick={()=> speciality === 'Pédiatres'? navigate('/doctors'):navigate('/doctors/Pédiatres')} className={`cursor-pointer ${speciality === "Pédiatres" ? "text-blue-500" : "hover:text-blue-500"}`}>Pédiatres</p>
                    <p onClick={()=> speciality === 'Neurologue'? navigate('/doctors'):navigate('/doctors/Neurologue')} className={`cursor-pointer ${speciality === "Neurologue" ? "text-blue-500" : "hover:text-blue-500"}`}>Neurologue</p>
                    <p onClick={()=> speciality === 'Gastro-entérologue'? navigate('/doctors'):navigate('/doctors/Gastro-entérologue')} className={`cursor-pointer ${speciality === "Gastro-entérologue" ? "text-blue-500" : "hover:text-blue-500"}`}>Gastro-entérologue</p>
                </div>
                
                {/* Doctors List */}
                <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {filterDoc.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                            key={index}
                        >
                            <img className=" bg-blue-50" src={item.image} alt="" />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                    <p>Disponible</p>
                                </div>
                                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                <p className="text-gray-600 text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
