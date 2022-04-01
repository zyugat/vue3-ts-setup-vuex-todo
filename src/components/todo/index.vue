<script setup lang="ts">
import { PropType, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import { ITodo } from '@/typings'
import { IUseTodo, useTodo } from '@/hooks/todo'

import TodoItem from 'components/todo/TodoItem.vue'
import TodoInput from 'components/todo/TodoInput.vue'

const props = defineProps({
  todoList: {
    type: Array as PropType<ITodo[]>,
    required: true,
  },
})
// 向 TodoItem组件 传递方法,用来对状态的操作
const { removeTodo, changeTodoItem, setStatus, setDoing }: IUseTodo = useTodo()
defineExpose({ removeTodo, changeTodoItem, setStatus, setDoing })

// 初始化列表
const { initTodoList }: IUseTodo = useTodo()
const store: Store<any> = useStore()
onMounted(() => {
  initTodoList()
})
</script>

<template>
  <div class="wrapper">
    点击文字可修改内容。
    <todo-input class="todo-input" />
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      class="todo-item"
      :item="item"
      @change-todo-item="changeTodoItem"
      @remove-todo="removeTodo"
      @set-status="setStatus"
      @set-doing="setDoing"
    />
  </div>
</template>

<style lang="scss">
.wrapper {
  border: 1px red solid;
  width: 300px;
  .todo-input {
    margin: 5px;
  }
  .todo-item {
    padding: 0px 5px;
  }
}
</style>
