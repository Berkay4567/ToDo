<!--
<template>
  <li class="d-flex align-items-center list-group-item">
    <button
      class="rounded-md shadow text-black bg-white-600 py-1 px-2"
      :class="{ completed }"
      @click="$emit('on-toggle')"
      v-if="!isEditing"
    >
      <span>{{ description }}</span>
    </button>
    <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
      <input
        type="text"
        class="form-control"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="todoName"
      />
          <list :todos="todos"/>
    </form>
    <button
      @click="startEditing()"
      class="rounded-md shadow text-white bg-blue-600 py-1 px-2"
    >
      düzenle
    </button>
    <button @click="$emit('on-delete')" class="rounded-md shadow text-white bg-blue-600 py-1 px-2">
      sil
    </button>
  </li>
</template>

<script>
import List from './List.vue';
import {mapState} from "vuex";
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
    components: {List},
    computed: {
        ...mapState(['todos'])
    },
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.todoName.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    }
  }
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
-->