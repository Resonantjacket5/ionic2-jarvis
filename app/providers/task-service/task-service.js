import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

/*
  Generated class for the TaskService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TaskService {
  constructor(http: Http) {
    console.log("task service constructor called");
    this.http = http;
    this.data = null;
    this.tasks = [];
    this.tasks = [
      {
        name: "Eat chicken",
        length: 2,
        deadline: 4
      },
      {
        name: "Walk dogs",
        length: 1,
        deadline: 3
      },
      {
        name: "Take Trash",
        length: 3,
        deadline: 6
      }
    ];
  }
  
  getTasks()
  {
    return this.tasks; 
  }
  
  pushTask(name,length,deadline){
    this.tasks.push({
      name:name,
      length: length,
      deadline: deadline
    });
  }
  
  popTask(task){
    if(this.tasks.length!=0)
      this.tasks.splice(this.tasks.indexOf(task),1);
  }

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

