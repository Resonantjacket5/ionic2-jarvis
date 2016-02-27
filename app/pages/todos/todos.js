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
  constructor(nav: NavController, taS: TaskService, toS: TodoService) {
    this.nav = nav;
    this.taS = taS;
    this.toS = toS;
    this.myBool = true;
    this.todos = this.toS.fixTodos(); //this.toS.sortTasks(); //ts.getTasks();
  }
  
  onHiCall()
  {
    console.log("hi");
  }
  
  finishedTodo(todo)
  {
     this.toS.popTodo(todo);
  }
  
}
