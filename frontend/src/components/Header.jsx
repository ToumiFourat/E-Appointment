import { assets } from "../assets/assets"


export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-300 rounded-lg px-6 md:px-10 lg:px-20">
        {/*----------- Left Side --------------*/}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Prendre rendez-vous
             <br /> Avec des médecins de confiance
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                <img className="w-28" src={assets.group_profiles} alt=""/>
                <p>Parcourez simplement notre longue liste de médecins de confiance,<br className="hidden sm:block"/>
                Planifiez votre rendez-vous sans tracas
                </p>
            </div>
            <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" >
            Prendre rendez-vous
            <img className="w-3" src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/*----------- Right Side --------------*/}
        <div className="md:w-1/2 relative">

            <img src={assets.header_img} alt="" />

        </div>

    </div>
  )
}