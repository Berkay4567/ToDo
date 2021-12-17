<!--
<template>
  <form class="col-12 col-sm-10 col-md-8 cl-lg-6" @submit.prevent="createTodo()">
    <input
      v-model="todoName"
      type="text"
      class="form-control"
      placeholder="Yeni ekle"
    />
    
    <button type="submit" class="rounded-md shadow text-white bg-blue-700 py-2 px-6">Ekle</button>
  </form>
</template>

<script>
import todoitem from './TodoItem';
export default {
emits: ['create'],
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    createTodo() {
      if (this.todoName.length > 0) {
        this.$emit("create", this.todoName);
      }
      this.todoName = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
-->