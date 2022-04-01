import { IState, ITodo, TODO_STATUS } from '@/typings'
import {
  INIT_TODO_LIST,
  ADD_TODO_ITEM,
  CHANGE_TODO_ITEM,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS,
} from './actionTypes'

export default {
  [INIT_TODO_LIST](state: IState, todoList: ITodo[]): void {
    state.list = todoList
  },
  [ADD_TODO_ITEM](state: IState, todo: ITodo): void {
    state.list.unshift(todo)
  },
  [CHANGE_TODO_ITEM](
    state: IState,
    todo: {
      id: number
      content: string
    },
  ): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === todo.id) {
        item.content = todo.content
      }
      return item
    })
  },
  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter((item: ITodo) => item.id !== id)
  },
  [SET_TODO_STATUS](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        item.status =
          item.status === TODO_STATUS.FINISHED
            ? TODO_STATUS.WILLDO
            : TODO_STATUS.FINISHED
      }
      return item
    })
  },
  // 确保只存在一个<正在完成>
  [SET_DOING_STATUS](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id !== id) {
        if (item.status === TODO_STATUS.DOING) {
          item.status = TODO_STATUS.WILLDO
        }
      } else {
        item.status =
          item.status === TODO_STATUS.WILLDO
            ? TODO_STATUS.DOING
            : TODO_STATUS.WILLDO
      }

      return item
    })
  },
}
