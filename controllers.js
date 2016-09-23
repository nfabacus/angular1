toDoApp.controller('ToDoController', function() {
  // two objects, each with two attributes
  var self = this;
  self.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }];
  self.addToDo = function(todoText){
    self.todos.push ({
      text: todoText, completed: false
    });
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
});
