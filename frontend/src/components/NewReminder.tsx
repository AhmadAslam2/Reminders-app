import React, { useState } from 'react'

interface NewReminderProps {
    addReminder:(title:string)=>void
}
export default function NewReminder({addReminder}: NewReminderProps) {

    const [title, setTitle] = useState('')
    const submitForm = (e: React.FormEvent)=> {
        e.preventDefault();
        addReminder(title)
        setTitle('')
    }
  return (
    <form onSubmit={submitForm}>
       <label htmlFor="title"></label>
       <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
       <button type='submit' className="btn btn-primary my-3">Add</button>
    </form>
  )
}
