import { Router } from "express";
import  Reminders from '../models/reminders'
const router = Router();
let reminders: Reminders[] = [
    {
        id:1,
        title:"Reminder1"
    },
    {
        id:2,
        title:"Reminder2"
    }
]
router.get('/', (req, res)=>{
    res.json(reminders)
})

router.post('/', (req, res)=>{

    const {title} = req.body;
    const newReminder = new Reminders(title)
    reminders.push(newReminder);
    res.status(201).json(reminders);
})

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    reminders = reminders.filter(reminder => reminder.id !== id)
    res.status(201).json(reminders);
})

export default router