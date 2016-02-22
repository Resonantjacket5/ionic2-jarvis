import {Page, NavController} from 'ionic-framework/ionic';

/*
  Generated class for the TasksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tasks/tasks.html',
})
export class TasksPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.tasks = [];
    this.tasks = [
      {
        name: "Walk dogs",
        length: 5
      },
      {
        name: "Eat chicken",
        length: 6
      },
      {
        name: "Take Trash",
        length: 3
      }
    ];
    console.log("constructor called");
  }
  
  addTask(name, length)
  {
    this.tasks.push({
      name:name,
      length:length
    });
  }
  
  removeTask(task)
  {
    this.tasks.splice(this.tasks.indexOf(task),1); 
  }
  
  // handles enters on browser
  doneTyping($event) {
    if($event.which === 13){
      this.addTask($event.target.value, 9);
      $event.target.value = null;
    }
  }
}

