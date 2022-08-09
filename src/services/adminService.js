import axios from '../axios';

class AdminService{

    login =async (data) =>{
        const promise=new Promise((resolve, reject)=> {
            axios.post("auth/login", data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    createPost = async (data) => {
        const promise = new Promise((resolve, reject)=> {
            axios.post("users", data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}
export default new AdminService();