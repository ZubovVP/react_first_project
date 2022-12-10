import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "9ea113d5-5b84-48b4-a3d4-35d7e6dd7df7"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    follow(id){
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(response => response.data);
    }

}

export const loginAPI = {
    login() {
        return instance('auth/me').then(response => response.data);
    }
}