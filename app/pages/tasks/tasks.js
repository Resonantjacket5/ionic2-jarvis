import {Page, NavController} from 'ionic-framework/ionic';
import {TaskService} from '../../providers/task-service/task-service';

/*
  Generated class for the TasksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tasks/tasks.html'
})
export class TasksPage {
  constructor(nav: NavController, ts:TaskService) {
    this.nav = nav;
    this.ts = ts;
    this.tasks = this.ts.getTasks();
    console.log("constructor called");
  }
  
  addTask(name: string, length, deadline)
  {
    this.ts.pushTask(name,parseInt(length),parseInt(deadline),1);
    console.log(this.ts.tasks);
    //console.log(this.fetchTasks());
  }
  
  removeTask(task)
  {
    this.ts.popTask(task);
    this.fetchTasks();
  }
  
  // handles enters on browser
  doneTyping($event) {
    if($event.which === 13){
      this.addTask($event.target.value, 9);
      $event.target.value = null;
    }
  }
  
  fetchTasks(){
    this.tasks=this.ts.getTasks(); 
    return this.ts.getTasks();
  }
}

