import { Component, Input } from '@angular/core';
import { Stuff } from './modal/stuff';
import { TaskhttpService } from './service/taskhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'todolist';

  taskName=null
  inputBox=""
    task={"task":"","isValid":false};
   isInvalid = this.task.isValid
    
    dataSet:Stuff[]=[]
    constructor(public taskService:TaskhttpService){
      this.getAllTasks();
    }

    saveEmployee(stuff:any)
    {
      this.inputBox =""
    stuff.value.isValid=false
      this.taskService.addEmployee(stuff.value)
      .subscribe(data => {
        console.log(data)

       this.getAllTasks();
      });
    
    }

    getAllTasks()
    {
      this.taskService.getAllTasks()
      .subscribe(data => this.dataSet = data)
    }

    deleteTask(stuff:Stuff)
    {
      this.taskService.delete(stuff.id)
      .subscribe(data=>{
        console.log(data)
      this.getAllTasks();

      })
    }
}
