import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pédiatres from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Médecin généraliste',
        image: General_physician
    },
    {
        speciality: 'Gynécologue',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologue',
        image: Dermatologist
    },
    {
        speciality: 'Pédiatres',
        image: Pédiatres
    },
    {
        speciality: 'Neurologue',
        image: Neurologist
    },
    {
        speciality: 'Gastro-entérologue',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Fourat Toumi',
        image: doc1,
        speciality: 'Médecin généraliste',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Fourat est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Fourat est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Zarzis'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Malek Haddar',
        image: doc2,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 Ans',
        about: 'Le Dr Malek est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Malek est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces..',
        fees: 60,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Tataouine'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Malek Souayeh',
        image: doc3,
        speciality: 'Dermatologue',
        degree: 'MBBS',
        experience: '1 Ans',
        about: 'Le Dr Malek est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Malek est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 30,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Sfax'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Bechir Daoua',
        image: doc4,
        speciality: 'Pédiatres',
        degree: 'MBBS',
        experience: '2 Ans',
        about: 'Le Dr Bechir est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Bechir est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 40,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Gbéli'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Assil Barhoumi',
        image: doc5,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Assil est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Assil est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Gafsa'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Houssaine Ben Dhieb',
        image: doc6,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Houssaine est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Houssaine est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Djerba'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Mohamed ali Maali',
        image: doc7,
        speciality: 'Médecin généraliste',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Mohamed ali est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Mohamed ali est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Gbéli'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Raed Zayoud',
        image: doc8,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 Ans',
        about: 'Le Dr Raed est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Raed est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 60,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Djerba'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Hadil Hammemi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Ans',
        about: 'Le Dr Hadil est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Hadil est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 30,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Séliana'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Idriss Jdid',
        image: doc10,
        speciality: 'Pédiatres',
        degree: 'MBBS',
        experience: '2 Ans',
        about: 'Le Dr Idriss est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Idriss est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 40,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Médnine'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Khouloud Ghabi',
        image: doc11,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Khouloud est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Khouloud est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Kélibia'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Rabie Houssaini',
        image: doc12,
        speciality: 'Neurologue',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Rabie est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Rabie est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Gbelli'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Tayma Hrizi',
        image: doc13,
        speciality: 'Médecin généraliste',
        degree: 'MBBS',
        experience: '4 Ans',
        about: 'Le Dr Tayma est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Tayma est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 50,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Douz'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Sabri Lamouchi',
        image: doc14,
        speciality: 'Gynécologue',
        degree: 'MBBS',
        experience: '3 Ans',
        about: 'Le Dr Sabri est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Sabri est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 60,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Gabes'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Nesrine Lagneb',
        image: doc15,
        speciality: 'Dermatologue',
        degree: 'MBBS',
        experience: '1 Ans',
        about: 'Le Dr Nesrine est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces. Le Dr Nesrine est fermement engagé à fournir des soins médicaux complets, en se concentrant sur la médecine préventive, le diagnostic précoce et les stratégies de traitement efficaces.',
        fees: 30,
        address: {
            line1: 'G38V+Q9,',
            line2: 'Tataouine'
        }
    },
]