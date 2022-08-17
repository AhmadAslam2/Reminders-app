import axios from 'axios'
import Reminders from '../models/reminders'
class ReminderServices {
    http  = axios.create({
        baseURL:'http://localhost:8000/'
    })

    async getReminder(){
        const response = await this.http.get<Reminders[]>('/reminders');
        return response.data;
    }

    async postReminder(title:string){
       const response = await this.http.post('/reminders', {title});
       return response.data;
    }

    async deleteReminder(id:number){
       const response = await this.http.delete('/reminders' + id);
       return response.data;
    }
}

export default new ReminderServices();