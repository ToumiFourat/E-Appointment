import { assets } from "../assets/assets"


export const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10">

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>À PROPOS DE <span className="text-gray-700 font-medium">NOUS</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[320px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-10 md:w-2/4 text-sm text-gray-600">
          <p>Bienvenue sur Dawini, votre partenaire de confiance pour gérer vos besoins de santé de manière pratique et efficace. Chez Dawini, nous comprenons les défis auxquels les individus sont confrontés pour prendre des rendez-vous médicaux et gérer leurs dossiers de santé.</p>
          <p>Dawini s&apos;engage à exceller dans la technologie de santé. Nous travaillons constamment à améliorer notre plateforme, en intégrant les dernières avancées pour enrichir l&apos;expérience utilisateur et offrir un service de qualité supérieure. Que ce soit pour réserver votre premier rendez-vous ou gérer des soins continus, Dawini est là pour vous accompagner à chaque étape.</p>
          <b className="text-gray-800">Notre Vision</b>
          <p>Notre vision chez Dawini est de créer une expérience de santé fluide et accessible pour chaque utilisateur. Nous nous efforçons de rapprocher les patients et les professionnels de santé, afin que vous puissiez accéder aux soins dont vous avez besoin, au moment où vous en avez besoin.</p>
        </div>
        </div>

        <div className=" text-xl pt-10 text-gray-500">
          <p>POURQUOI <span className="text-gray-700 font-semibold">NOUS CHOISIR</span></p>

        </div>

          <div className="flex flex-col md:flex-row mb-20 ">

            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>EFFICACITÉ:</b>
              <p>Planification de rendez-vous rationalisée qui s&apos;adapte à votre style de vie chargé.</p>
            </div>

            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>COMMODITÉ:</b>
              <p>Accédez à un réseau de professionnels de la santé de confiance dans votre région.</p>
            </div>

            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Personnalisation:</b>
              <p>Recommandations et rappels personnalisés pour vous aider à rester au top de votre santé.</p>
            </div>

      
        </div>

    </div>
  )
}
