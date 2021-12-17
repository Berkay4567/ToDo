import { createStore } from 'vuex';
import axios from 'axios';

const state = {
    todos: [],
    todos2: []
};

export const actions = {
    createTodo({ state }, todo) {
        axios.post('todos', {name: todo})
            .then(() => state.todos.unshift(todo))
            .catch(e => console.error(e));
    },
    createTodo2({ state }, todo2) {
        axios.post('todos2', {name: todo2})
            .then(() => state.todo2s.unshift(todo2))
            .catch(e => console.error(e));
    },
    fetchTodos({ state }) {
        axios.get('todos')
            .then(response => {
                state.todos = response.data;
                state.todos2 = response.data;
            })
            .catch(e => console.error('failed to fetch todos', e));
    }
};

export default createStore({
    state,
    actions,
})
