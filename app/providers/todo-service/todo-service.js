import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {TaskService} from '../task-service/task-service';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {
  constructor(http: Http, taS: TaskService) {
    this.taS = taS;
    this.todos = [];
    this.http = http;
    this.data = null;
  }
  
  getTodos() {
    return this.taS.getTasks();
  }
  
  // sort Tasks in ascending (or equal) deadline order
  
  sortTasks() {
    var tempTasks = this.taS.getTasks();
    tempTasks.sort(function(a,b){
      return a.deadline-b.deadline;
    });
    return tempTasks;
  }
  
  
  fixTodos() {
    var tempTodos = this.sortTasks();
    var lastEnd =0;
    for(let i =0; i< tempTodos.length; i++)
    {
      
      tempTodos[i].start = lastEnd;
      lastEnd = (lastEnd + tempTodos[i].length);
      tempTodos[i].end = lastEnd;
      tempTodos[i].isLate = false;
    }
    return tempTodos;
  }
  
  popTodo(todo)
  {
    this.todos.pop(todo);
    this.taS.popTask(this.findTask(todo));
  }
  
  findTask(todo)
  {
    function sameName(task)
    {
       return task.name === todo.name;
    }
    return this.taS.tasks.find(sameName);
  }
  
  /*fixTasks() {
    var tempTasks = this.sortTasks();
    var tempTodos = [];
    for( let i =0; i< tempTasks.length; i++)
    {
       
    }
  }*/

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

