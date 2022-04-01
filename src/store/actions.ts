import { Commit } from 'vuex'
import { IState, ITodo } from '@/typings'
import {
  INIT_TODO_LIST,
  ADD_TODO_ITEM,
  CHANGE_TODO_ITEM,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS,
} from './actionTypes'

interface ICtx {
  commit: Commit
  state: IState
}

export default {
  [INIT_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
    commit(INIT_TODO_LIST, todoList)
  },
  [ADD_TODO_ITEM]({ commit }: ICtx, todo: ITodo): void {
    commit(ADD_TODO_ITEM, todo)
  },
  [CHANGE_TODO_ITEM](
    { commit }: ICtx,
    todo: { id: number; str: string },
  ): void {
    commit(CHANGE_TODO_ITEM, todo)
  },
  [REMOVE_TODO]({ commit }: ICtx, id: number): void {
    commit(REMOVE_TODO, id)
  },
  [SET_TODO_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_TODO_STATUS, id)
  },
  [SET_DOING_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_DOING_STATUS, id)
  },
}
