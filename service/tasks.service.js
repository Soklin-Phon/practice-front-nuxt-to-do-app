import Api from "./api.service";

const END_POINT = 'api/tasks';

export default {
    all() {
        console.log("calling api...?")
        return Api.get(END_POINT);
    },

    store(data) {
        console.log(data);
        return Api.post(END_POINT, data);
    },

    delete(id) {
        console.log("task id", id)
        return Api.delete(`${END_POINT}/${id}`);
    },

    deleteAll() {
        return Api.delete(END_POINT);
    },

    editStatus(id, data) {
        console.log(id);
        console.log("data", data);
        return Api.put(`${END_POINT}/${id}`, data);
    },

    edit(id, data) {
        console.log(id);
        console.log("data", data);
        return Api.put(`${END_POINT}/edit/${id}`, data);
    },

}