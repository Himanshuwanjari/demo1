import axios from "axios";

export const addUserDetails = (values) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post(`http://localhost:4005/users/adduser`, values)
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

export const getUserById = (userId) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`http://localhost:4005/users/${userId}`)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

export const deleteUserById = (userId) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.delete(`http://localhost:4005/users/deleteUser/${userId}`)
            console.log(response)
            resolve(response)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}