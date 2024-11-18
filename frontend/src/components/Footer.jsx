import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*---------- Left Section -------------*/}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prenez soin de votre santé en toute simplicité. Grâce à notre
            plateforme, vous pouvez facilement réserver un rendez-vous avec les
            meilleurs professionnels de santé près de chez vous. Pour toute
            question ou assistance, n hésitez pas à nous contacter. Votre
            bien-être est notre priorité !
          </p>
        </div>

        {/*---------- Center Section -------------*/}
        <div>
          <p className="text-xl font-medium mb-5">ENTREPRISE</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Accueil</li>
            <li>À propos de nous</li>
            <li>Contactez-nous</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        {/*---------- Right Section -------------*/}
        <div>
          <p className="text-xl font-medium mb-5">RESTONS EN CONTACT</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+ 75 394 229</li>
            <li>dawini@contact.com</li>
          </ul>
        </div>
      </div>
      {/* ------------ CopyRight -----------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@Dawini - Tous droits réservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
