import $ from 'jquery';

export const writeNextTodo = (nextTodoText) => {
  $('#nextTodo').text('次のTODO: ' + nextTodoText);
};

export const writeTodoCount = (count) => {
  $('#todoCount').text('(全' + count + '件)');
};

export const toggleTodoList = (count) => {
  if (count) {
    $('#todoList').show();
  } else {
    $('#todoList').hide();
  }
};

export const toggleTodoEmpty = (count) => {
  if (count) {
    $('#todoEmpty').hide();
  } else {
    $('#todoEmpty').show();
  }
};

export const removeTodo = ($element) => {
  $element.closest('.todo').remove();
};

export const addTodo = () => {
  var wrapper = $('<div>');
  wrapper.addClass('todo');

  var input = $('<input>');
  input.attr('type', 'text');

  var deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper);
};