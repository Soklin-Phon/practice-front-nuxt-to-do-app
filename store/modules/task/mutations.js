export const SET_TASKS = (state, tasks) => {
    console.log("Mutation...")
    state.tasks = tasks;
}

export const ADD_TO_TASK = (state, tasks) => {
    console.log("Mutation...")
    state.tasks.push(tasks)
}

export const IS_LOADING = (state, is_loading) => {
    console.log("is loading...", is_loading);
    state.is_loading = is_loading;
}