import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from './config/mongodb.js'; // Ajoutez ".js" à l'import
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
// Configuration de l'application
dotenv.config();
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
console.log("CLOUDINARY_SECRET_KEY:", process.env.CLOUDINARY_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4000;

// Connexion à la base de données
dbConnect();

// Connexion à la cloudinary
connectCloudinary()



// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.use('/api/admin',adminRouter)

// localhost:4000/api/admin 


// Endpoints de l'application
app.get('/', (req, res) => {
    res.send('API WORKING');
});

// Lancer le serveur
app.listen(port, () => console.log(`Server started on port ${port}`));
