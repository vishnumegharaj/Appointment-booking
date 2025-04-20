import jwt from "jsonwebtoken"

const authAdmin = async (req, res, next) => {
    try {
        const admintoken = req.headers.admintoken
        if (!admintoken) {
            return res.status(401).json({ success: false, message: 'Unauthorized access' })
        }
        const decoded = jwt.verify(admintoken, process.env.JWT_SECRET);

        if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: 'Unauthorized access' });
        }
        
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin