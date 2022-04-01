import { watch } from 'vue'
import { Store, useStore } from 'vuex'
import { ITodo, TODO_STATUS } from '@/typings'
import {
  INIT_TODO_LIST,
  ADD_TODO_ITEM,
  CHANGE_TODO_ITEM,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS,
} from '@/store/actionTypes'

export interface IUseTodo {
  initTodoList: () => void
  addTodoItem: (value: string) => void
  changeTodoItem: (todo: { id: number; content: string }) => void
  removeTodo: (id: number) => void
  setStatus: (id: number) => void
  setDoing: (id: number) => void
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[]
  setLocalList: (todoList: ITodo[]) => void
}

function useTodo(): IUseTodo {
  const store: Store<any> = useStore()
  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage()
  const todoList: ITodo[] = getLocalList()

  watch(
    () => {
      return store.state.list
    },
    todoList => {
      setLocalList(todoList)
    },
    { deep: true },
  )

  function initTodoList() {
    store.dispatch(INIT_TODO_LIST, todoList).then(r => r)
  }

  function addTodoItem(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    }
    store.dispatch(ADD_TODO_ITEM, todo).then(r => r)
  }

  function changeTodoItem(todo: { id: number; content: string }): void {
    store.dispatch(CHANGE_TODO_ITEM, todo).then(r => r)
  }

  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id).then(r => r)
  }

  function setStatus(id: number): void {
    store.dispatch(SET_TODO_STATUS, id).then(r => r)
  }

  function setDoing(id: number): void {
    store.dispatch(SET_DOING_STATUS, id).then(r => r)
    setLocalList(store.state.list)
  }

  return {
    initTodoList,
    addTodoItem,
    changeTodoItem,
    removeTodo,
    setStatus,
    setDoing,
  }
}

// 将数据保存在浏览器缓存中
function useLocalStorage(): IUseLocalStorage {
  function getLocalList(): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return {
    getLocalList,
    setLocalList,
  }
}

export { useTodo }
