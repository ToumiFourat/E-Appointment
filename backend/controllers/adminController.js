import validator from "validator"
import bcrypt from 'bcrypt'
//api pour ajouter un medecin

const addDoctor = async (req,res) =>{

    try {
        const {name,email,password,image,speciality,degree,experience,about,fees,address} = req.body
        const imageFile = req.file

        // vérifier que tous les donnés sont completes pour ajouter médecin
        if ( !name|| !email|| !password|| !image|| !speciality|| !degree|| !experience|| !about|| !fees|| !address) {
            return res.json({success:false,message:"Détails manquants"})
        }

        // valider email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Veuillez entrer un email valide"})
        }

        // validation mot de passe fort
        if(password.length <8){
            return res.json({success:false,message:"Veuillez entrer un mot de passe fort"})
        }

        //ha

    } catch (error) {
        
    }
}

export {addDoctor}