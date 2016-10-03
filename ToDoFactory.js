toDoApp.factory('ToDoFactory', function() {
  Todo = function(todoText, completed){
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };
  Todo.prototype.complete = function() {
    this.completed = true;
  };

  Todo.prototype.toggle = function(completed) {
    if (completed === true) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }
  return Todo;
});
