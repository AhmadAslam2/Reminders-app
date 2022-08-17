import express from 'express'
import remindersRoute from './routers/reminders'

const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.use('/reminders',  remindersRoute)
app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
