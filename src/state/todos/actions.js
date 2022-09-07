import { ADD_TODO } from './actionTypes';
import { TOGGLE_TODO } from './actionTypes';
import { REMOVE_TODO } from './actionTypes';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      title
    }
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
}
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  };
}

