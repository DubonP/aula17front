import { ADD_TODO } from './actionTypes';
import { TOGGLE_TODO } from './actionTypes';
import { REMOVE_TODO } from './actionTypes';

const INITIAL_STATE = {
  todos: []
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false
          }
        ]
      };
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: true
            };
          }
          return todo;
        })
      };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }
    default:
      return state;
  };
}