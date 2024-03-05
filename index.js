import express from "express"
import cors from "cors"
import authRoute from "./routes/authRoute.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/auth", authRoute)
const PORT = 5500 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Happy to see you connected!" })
})
app.get("/home", (req, res) => {
    res.status(200).json("this is home page")
})
app.listen(PORT, () => console.log(`our app running on PORT`, PORT))