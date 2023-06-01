import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import verificationRouter from "./routes/verification-code.route";

const app = express()


//middleware
app.use(express.json())
app.use(cors({
    origin:'https://pin-verification-task.netlify.app/'
}))
dotenv.config()


//routes
app.use('/verify', verificationRouter)


app.listen(process.env.PORT||5000,()=>console.log("Server is running"))