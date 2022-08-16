class Reminders{
    id:number;
    constructor(public title:string){
        this.id = Date.now()
    }
}

export default Reminders