<template>

    <navbar/>
    <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <todo-list list-name="To Do" />
            <router-view/> 
                      
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
 import { VueDraggableNext } from 'vue-draggable-next'
 import TodoList from '@/pages/todo/TodoList.vue';

export default {
      name: "App",
    components: {Navbar,draggable: VueDraggableNext,TodoList,},
    data() {
        return {
            title: 'Speed Tail',
                    enabled: true,
        dragging: false,
        }
    },
    watch: {
        $route(to, from) {
            document.title = `${to.name} - ${this.title}`;
        }
    },
    created() {
        document.title = this.title;
    }
};
</script>
