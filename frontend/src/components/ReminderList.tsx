import React from 'react'
import Reminders from '../models/reminders'


interface ReminderListProps {
    items : Reminders[]
    removeReminder:(id:number)=>void
}

function reminderList({items, removeReminder}: ReminderListProps) {
  return (
    <ul className='list-group'>
        {items.map(item => <li className='list-group-item' key={item.id}>
          {item.title}
          <button onClick={()=>removeReminder(item.id)} className="btn btn-outline-danger mx-2"> Delete</button>
        </li>)}        
    </ul>
  )
}

export default reminderList