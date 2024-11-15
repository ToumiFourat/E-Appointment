import { assets } from "../assets/assets"


export const Contact = () => {

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500"> 
        <p>CONTACTEZ-<span className="text-gray-700 font-semibold">NOUS</span></p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt=""  />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600 ">Notre BUREAU</p>

          <p className="text-gray-600">Immeuble El Waha, Avenue Habib Bourguiba<br/>Tunis, Tunisie</p>

          <p className="text-gray-600">Tel: (+216)  75 394 229 <br/>Email: dawini@contact.com</p>

          <p className="font-semibold text-lg text-gray-600 ">Carrières chez DAWINI</p>
          <p className="text-gray-600">Apprenez-en davantage sur nos équipes et nos offres d’emploi.</p>
  
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-gray-600 cursor-pointer">
            Explorer les emplois
          </button>
        </div>
      </div>
    </div>
  )
}
