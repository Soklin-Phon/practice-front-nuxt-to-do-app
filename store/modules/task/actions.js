import Tasks from "../../../service/tasks.service";
import { async } from '../../../.nuxt/utils';

export const getTasks = ({ commit }) => {

    Tasks.all()
        .then(commit('IS_LOADING', true))
        .then(response => {
            console.log("responding...", response.data.data)
            commit('IS_LOADING', false)
            commit('SET_TASKS', response.data.data)
     })
}

export const  addToTask = async ({ commit }, { task }) => {
    console.log("addToTask")
    const  result = await Tasks.store({
        title: task,
        due_date: "12-12-12"
    });
 
    if (result) {
         commit('ADD_TO_TASK', result.data);
    }
    
}

export const deleteTask = ({ commit, dispatch }, id) => {
    console.log("delete task", id);
    commit('DELETE_TASK', id);

    dispatch('addNotification', {
        type: 'success',
        message: 'Task.'
    }, { root: true });

    Tasks.delete(id);
}


export const IsDone = async ({ commit, dispatch }, task) => {
    
    if (task.status == 1) {
        task.status = 0;
        console.log(task.status);
    } else {
        task.status = 1;
    }
    const result = await Tasks.editStatus(task.id, { is_completed: task.status });
    const response = await Tasks.all();

    if (result) {
    dispatch('addNotification', {
        type: 'success',
        message: 'Product added to cart.'
    }, { root: true });
    }
    
    commit('UPDATE_STATUS', task.id);
    commit('SET_TASKS', response.data.data)
    
}


export const editTask = async ({ commit, dispatch }, task) => {
    console.log(" task", task);

     await Tasks.edit(task.id, { title: task.title });
     const response = await Tasks.all();

    commit('SET_TASKS', response.data.data)
}
