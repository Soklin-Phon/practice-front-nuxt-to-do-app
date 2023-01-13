import Api from "./api.service";

const END_POINT = 'todos';

export default {
    all() {
        console.log("calling api...?")
        return Api.get(END_POINT);
    },

    store(data) {
        return Api.post(END_POINT, data);
    },

    delete(id) {
        return Api.delete(`${END_POINT}/${id}`);
    },

    deleteAll() {
        return Api.delete(END_POINT);
    }
}