import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
}))
app.use(express.json())

async function main() {
	await mongoose.connect(process.env.DB_CONNECT + process.env.DB_NAME)
}

main().catch(err => console.log(err))

app.listen(process.env.PORT, () => console.log("Server was runned on port " + process.env.PORT))

