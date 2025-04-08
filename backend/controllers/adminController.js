import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
//api pour ajouter un medecin

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // vérifier que tous les données sont completes pour ajouter médecin
    if (
      !name ||
      !email ||
      !password ||
      !imageFile ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Détails manquants" });
    }

    // valider email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Veuillez entrer un email valide",
      });
    }

    // validation mot de passe fort
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Veuillez entrer un mot de passe fort",
      });
    }
    //hacher le mot de passe du médecin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //transferer image vers cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      ressource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Médecin ajouté" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api pour admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token, message: "Bienvenue! " });
    } else {
      res.json({ success: false, message: "Identifiants invalides" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin };
