
const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const tasks = require('./routes/tasks')
const company = require('./routes/company')
const service = require('./routes/service')
const connectDB = require('./db/connect')
const cors = require('cors')
require('dotenv').config();


// middleware
app.use(express.static('./public'))
app.use(express.json())
/*
app.get('/', (req, res)=> {
    res.send()
})
*/
const storage = multer.diskStorage({
    destinatioon: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploadImage = multer({storage: storage})

app.post("/upload", uploadImage.single('image'), (req, res) => {
    res.send('Image Uploaded');
})

app.use('/api/v1/tasks', tasks)
app.use('/api/v1/company', company)
app.use('/api/v1/service', service)
app.use(cors())

const port = 3000

const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port ${port}...`))
    } catch (error){
        console.log(error)
    }
}

start()

