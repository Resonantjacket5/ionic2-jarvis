import {Page, NavController} from 'ionic-framework/ionic';
import {TaskService} from '../../providers/task-service/task-service';
import {TodoService} from '../../providers/todo-service/todo-service';
/*
  Generated class for the TodosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/todos/todos.html'
})
export class TodosPage {
  constructor(nav: NavController, ts: TaskService, toS: TodoService) {
    this.nav = nav;
    this.ts = ts;
    this.toS = toS;
    
    this.todos = this.toS.fixTodos(); //this.toS.sortTasks(); //ts.getTasks();
  }
  
}
