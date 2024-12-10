// Define the AngularJS module
var app = angular.module('todoApp', []);

// Define the controller
app.controller('TodoController', function ($scope) {
  $scope.todos = []; // List of todos
  $scope.newTodo = ""; // Model for the input field
  $scope.editIndex = null; // Index of the todo being edited

  // Function to add a new todo
  $scope.addTodo = function () {
    if ($scope.newTodo.trim()) {
      $scope.todos.push($scope.newTodo.trim());
      $scope.newTodo = ""; // Clear the input field
    }
  };

  // Function to delete a todo
  $scope.deleteTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  // Function to enable edit mode
  $scope.enableEdit = function (index) {
    $scope.editIndex = index; // Set the index of the todo to be edited
  };

  // Function to save the edited todo
  $scope.saveEdit = function () {
    $scope.editIndex = null; // Exit edit mode
  };

  // Function to cancel edit mode
  $scope.cancelEdit = function () {
    $scope.editIndex = null; // Exit edit mode without saving
  };
});
