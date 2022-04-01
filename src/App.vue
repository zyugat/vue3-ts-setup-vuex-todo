<script setup lang="ts">
import { computed } from 'vue'
import { Store, useStore } from 'vuex'
import TodoList from 'components/todo/index.vue'

const store: Store<any> = useStore()
const todoList = computed(() => store.state.list)
</script>

<template>
  <div class="app">
    <todo-list :todo-list="todoList" />
  </div>
</template>

<style lang="scss">
.app {
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  select,
  input,
  label,
  button {
    vertical-align: middle;
  }
}
</style>
