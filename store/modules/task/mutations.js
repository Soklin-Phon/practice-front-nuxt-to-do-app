export const SET_TASKS = (state, tasks) => {
    state.tasks = tasks;
}

export const ADD_TO_TASK = (state, tasks) => {
    state.tasks.push(tasks)
}

export const IS_LOADING = (state, is_loading) => {
    console.log("is loading...", is_loading);
    state.is_loading = is_loading;
}


export const DELETE_TASK = (state, id) => {

    
    let removed_tasks = state.tasks.filter((el) => el.id !== id);
    state.tasks = removed_tasks;
}

export const UPDATE_STATUS = (state, id) => {

    // let incompleted_task = state.tasks.filter((el) => el.id !== id);
    console.log("completed id", id);
    console.log("state.tasks", state.tasks)
    return state.tasks;

}


