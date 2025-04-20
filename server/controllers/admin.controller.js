import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctor.model.js"
import jwt  from "jsonwebtoken"

const addDoctor = async (req, res) => {
    try{
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFIle = req.file

        console.log(req.body)
        console.log(req.file)

        if(!imageFIle){
            return res.status(400).json({ message: 'Image is required' })
        }
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false, message: 'All fields are required' })
        }

        if(!validator.isEmail(email)){
            return res.json({success:false, message: 'Invalid email' })
        }

        if(password.length < 8){
            return res.json({success:false, message: 'Password must be at least 8 characters long' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFIle.path, {resource_type: 'image'})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date:Date.now(),
            image: imageUrl
        }

        const doctor = await doctorModel.create(doctorData)
        await doctor.save()

        res.status(201).json({success:true, message: 'Doctor added successfully', doctor})
    }catch(error){
        console.log(error)
        res.status(500).json({success:false, message: error.message })
    }
}

//admin login 
const adminLogin = async (req, res) => {
    try{
        console.log(req.body)
        const { email, password } = req.body
        
        if(!email || !password){
            return res.status(400).json({success:false, message: 'All fields are required' })
        }

        if(email === process.env.ADMIN_EMAIL && password){
            const token = jwt.sign({email,password}, process.env.JWT_SECRET, {expiresIn: '1d'})

            return res.status(200).json({success:true, token, message: 'Admin logged in successfully' })
        }else{
            return res.status(400).json({success:false, message: 'Invalid credencials' })
        }
        res.status(200).json({success:true, message: 'Admin logged in successfully', admin})
    }catch(error){
        console.log(error)
        res.status(500).json({success:false, message: error.message })
    }
}

export { addDoctor, adminLogin }