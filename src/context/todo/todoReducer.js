import {ActionType} from '../../const';

const handlers = {
  [ActionType.ADD_TODO]: (state, { title, id}) => ({
    ...state,
    todos: [
      ...state.todos,
      {id, title}
    ]
  }),
  [ActionType.REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [ActionType.UPDATE_TODO]: (state, { title, id }) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })
  }),
  [ActionType.SHOW_LOADER]: (state) => ({...state, loading: true}),
  [ActionType.HIDE_LOADER]: (state) => ({...state, loading: false}),
  [ActionType.SHOW_ERROR]: (state, {error}) => ({...state, error}),
  [ActionType.CLEAR_ERROR]: (state) => ({...state, error: null}),
  [ActionType.FETCH_TODO]: (state, {todos}) => ({...state, todos}),
  DEFAULT: state => state
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
