import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stuff } from '../modal/stuff';

@Injectable({
  providedIn: 'root'
})
export class TaskhttpService {
  url:string = "http://localhost:3000/tasks";

  constructor(private http:HttpClient) { }

  getAllTasks():Observable<Stuff[]>
  {
    return this.http.get<Stuff[]>(this.url);
  }
  
  delete(taskid:number):Observable<number>{
    return   this.http.delete<number>(this.url+'/'+taskid)
  }

  addEmployee(stuff:Stuff):Observable<Stuff>
  {
    return this.http.post<Stuff>(this.url, stuff);
  }
}
