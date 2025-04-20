import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/admin.route.js'

//app config 
const app = express()
const PORT = process.env.PORT || 8080
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})