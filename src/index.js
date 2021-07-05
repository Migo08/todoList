import './css/style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/funciones';

export const todoList = new TodoList();

//todoList.todos.forEach( todo => crearTodoHtml (todo) );
todoList.todos.forEach( crearTodoHtml ); // cuando el argumento retorna un solo elemento y es el que requiere la funcion ( se envia el todo )

