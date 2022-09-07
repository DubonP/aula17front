import { useSelector } from "react-redux";
import { todosSelector } from '../state/todos/selectors';
import { toggleTodo } from "../state/todos/actions";
import { removeTodo } from "../state/todos/actions";
import { useDispatch } from "react-redux";

export function List() {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch();

  function onToggle(id) {
    dispatch(toggleTodo(id));
  }

  function onRemove(id) {
    dispatch(removeTodo(id));
  }

  return (
    <div id="list">
      <ul>
        {todos.map((todo) => {
          return (
            <li key={`${todo.title}-${todo.id}`}>
              <h1>
                {todo.title} {todo.completed && "✅"}
              </h1>
              <div>
                <button className="remove-button" onClick={() => {onRemove(todo.id)} }>
                  Remove ✘
                </button>
                <button className="mark-as-done-button" onClick={() => {onToggle(todo.id)}}>
                  Done ✔
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
