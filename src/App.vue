<template>
  <div class="app">
    <todo-list :todo-list="todoList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from 'components/todo/index.vue'

export default defineComponent({
  name: 'App',
  components: { TodoList },
  computed: {
    todoList(): [] {
      return this.$store.state.list
    },
  },
})
</script>

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
