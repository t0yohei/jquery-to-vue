import $ from 'jquery';
import EventBus, {
  ADD_TODO,
  REMOVE_TODO
} from './EventBus';

export const toggleTodoList = (count) => {
  if (count) {
    $('#todoList').show();
  } else {
    $('#todoList').hide();
  }
};

export const removeTodo = ($element, index) => {
  EventBus.$emit(REMOVE_TODO, index);
};

export const addTodo = () => {
  EventBus.$emit(ADD_TODO);
};
