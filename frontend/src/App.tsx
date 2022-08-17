import { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import Reminders from './models/reminders';
import ReminderServices from './services/reminders'

function App() {

  const [reminders, setReminders] = useState<Reminders[]>([])

  const loadReminders = async() =>{
    const reminders = await ReminderServices.getReminder();
    console.log(reminders)
    setReminders(reminders)
  }
  useEffect(()=>{
    loadReminders()
  }, [])

  const removeReminder  = async (id:number) => {
    const newReminder = await ReminderServices.deleteReminder(id)
    setReminders(newReminder)
  }

  const addReminder = async (title:string) =>{
    const newReminder = await ReminderServices.postReminder(title)
    setReminders(newReminder)
  }

  return (
    <div className="App">
      <NewReminder addReminder = {addReminder}/>
      <ReminderList items = {reminders} removeReminder = {removeReminder}/>
    </div>
  );
}

export default App;
