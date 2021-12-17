<template>
  <!--  <div class="px-8 py-6">
     
   <tr>
        <td>{{todo}}</td>
        <td><button @click="editTodo(index)" class="rounded-md shadow text-black bg-blue-600 py-1 px-2">Düzenle</button></td>
    </tr>            
    
    </div>  --> 
      <p>

    <input type="text"
           v-if="edit"
           :todo="todo"
           @blur.native="todo = $event.target.value; 
           edit = false; 
           $emit('input', todo);"
           @keyup.enter.native="todo = $event.target.value; 
           edit = false; 
           $emit('input', todo);"
           v-focus=""
             />
        <div v-else="" >      
        <input type="checkbox" class="nes-checkbox" v-on:click="check(todo)">
          {{todo}}
        </div>
        <button @click="edit = true;" class="rounded-md shadow text-white bg-blue-600 py-1 px-2">Düzenle</button>
    </p>
</template>

<script>
export default {
    
    props: ['todo'],
        methods: {
      
    },
      data () {
  return {
      edit: false
    }
  },

  watch: {
    value: function() {
      this.todo = this.todo;
    }
  },
check(todo){
  todo.done = !todo.done
},
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
  
}
</script>

<style scoped>
</style>
