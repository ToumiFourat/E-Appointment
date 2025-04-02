import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
<<<<<<< HEAD
        api_key:process.env.CLOUDINARY_API_NKEY,
=======
        api_key:process.env.CLOUDINARY_API_KEY,
>>>>>>> 663dfd5 (Guess who’s back?)
        api_secret:process.env.CLOUDINARY_SECRET_KEY,
    })
}

export default connectCloudinary