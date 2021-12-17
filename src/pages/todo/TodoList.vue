<!--
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
              
        <h1>{{ listName }}</h1>
                
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @create="createTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
        <draggable>
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
          </draggable>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo2.vue";
import CreateTodo from "./CreateTodo.vue";
 import { VueDraggableNext } from 'vue-draggable-next'
export default {
  props: {
    listName: String,
    
  },
  data() {
    return {
        enabled: true,
        dragging: false,
      todos: [
        { description: "Ketçap al", completed: false },
        { description: "Okulu ara", completed: false },
        { description: "Maaşı çek", completed: false },
      ],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    },
  },
  components: { Todo, CreateTodo,draggable: VueDraggableNext },
};
</script>

<style scoped lang="scss"></style>
-->