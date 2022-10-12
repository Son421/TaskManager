function TaskList(name, deadline){
  this.taskListName = name;
  this.taskListDateOfCreation = new Date();
  this.taskListEndDate = deadline;
  this.taskListArr = [];

  this.AddToTaskList = function(task) {
    this.taskListArr.push(task);
  }

  this.searchNameTask  = this.taskListArr.findIndex(name => this.taskListArr.taskName === name);

  this.priorityTask = function(nameTask){
    this.remove = this.taskListArr.splice(this.searchNameTask, 1);
    this.taskListArr.splice(0, 0, this.remove);
  }

  this.taskListArr = this.taskListArr.map(function(task){
    if ( this.taskListEnd.getTime()  < task.taskEndDate.getTime()){
      return task.taskDescription = this.taskListEndDate;
    }

    return task;
  });
}

function Task(name, description, deadline){
  this.taskName = name;
  this.taskDescription = description;
  this.taskEndDate = deadline;
  this.taskArr = [];

  this.finishingTask = function(status){
    if (this.endDate.getTime() > Date.now() && !status){
      return false;
    } else {
      return true;
    }
  }

  this.taskTransfer = function(){
    this.new = new Date();
    if(!this.finishingTask && this.endDate.getDay().getTime() > this.new.getDay().getTime()){
      return true;
    } else {
      return false;
    }
  }

  this.AddToTask = function (subsection) {
    this.taskArr.push(subsection);
  }

  this.searchSubsectionName  = this.taskArr.findIndex(name => this.taskArr.subsectionName === name);

  this.prioritySubsection = function(nameSubsection){
  this.remove = this.taskArr.splice(this.searchSubsectionName, 1);
  this.taskArr.splice(0, 0, this.remove);
  }

}

function Subsection(name, description){
  this.subsectionName = name;
  this.subsectionDescription = description;

  this.finishingSubsection = function(status){
      if (!status){
          return false;
      } else {
          return true;
      }
  }
}

  let task1 = new Task("Повчитись", "Зробити завдання яке дав Сергій",  "October 31, 2022 03:12:00" );
  // взагалі можна зробити так щоб було без дедлайну,
  //  а ще треба зробити зрівняння дедлайнів щоб не було казусів
  // додати статуси на рівні тасків та рівні сабтасків, якщо таска закінчена то і сабтаски закінчені
  
  let list1 = new TaskList("Завдання на сьогодні", "October 20, 2022 03:12:00");
  
  list1.AddToTaskList(task1);








  