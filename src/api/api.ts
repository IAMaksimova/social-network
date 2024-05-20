import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': '32011f67-7ebe-42e9-857e-25684b20e3fc'}
})
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    unfollow(userId: number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${userId}`)
},
    getProfile(userId: number){
        console.warn('obsolete method, use new version!')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me(){
       return instance.get(`auth/me`)
    }
}

export const profileAPI ={
    getProfile(userId: number){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put('profile/status', {status})
    }
}