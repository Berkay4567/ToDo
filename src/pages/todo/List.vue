<template>
    <div class=" divide-y divide-gray-300">
        <draggable list :todos="todos">
           <todo-item v-for="todo in todos" :todo="todo"/>
        </draggable>
        
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
 import { VueDraggableNext } from 'vue-draggable-next'
export default {
    components: {TodoItem,draggable: VueDraggableNext},
    props: ['todos'],

      data() {
      return {
        enabled: true,
        dragging: false,
      }
       },
       }
</script>

<style scoped>
</style>
