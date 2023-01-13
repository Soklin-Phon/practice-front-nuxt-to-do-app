import Tasks from "../../../service/tasks.service";

export const getTasks = ({ commit }) => {

    Tasks.all()
        .then(commit('IS_LOADING', true))
        .then(response => {
            commit('IS_LOADING', false)
            commit('SET_TASKS', response.data)
     })
}

// export const addToTask = ({ commit, dispatch }, { task }) => {
//     commit('ADD_TO_TASK', { task });

//     Tasks.store({
//         task: task,
//     });
// }


export const addToTask = ({ commit }, { task }) => {
    console.log("addToTask")
    if (task) {
        var id = 0;
        commit('ADD_TO_TASK', { id: id++, title: task });
    }
    
    // state.newTask.push({
    //     product,
    //     quantity
    // })
    
    // Tasks.store({
    //     task: task,
    // });
}




