import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Stuff } from '../modal/stuff';
import { TaskhttpService } from '../service/taskhttp.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  taskName = { "task": "", "isValid": false };
  dataSet: Stuff[] = []

  constructor(public taskService: TaskhttpService) {
    this.getAllTasks();
  }

  ngOnInit(): void {
  }

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe((data: Stuff[]) => this.dataSet = data)
  }

  deleteTask(stuff: Stuff) {
    this.taskService.delete(stuff.id)
      .subscribe(data => {
        console.log(data)
        this.getAllTasks();
      })
  }
}
