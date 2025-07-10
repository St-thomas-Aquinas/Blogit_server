import express from "express"
import userRouter from "./routes/users.router"
import cors from 'cors'
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())


app.use(cors({origin:true}))

app.get('/ping',(req, res) => {
    res.json({message:"hey"}).status(200)
})
app.use('/users',userRouter)

app.listen(port, () => {
    console.log(`server up and runnning on port ${port}`)
})