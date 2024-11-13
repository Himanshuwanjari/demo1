import axios from "axios";

const getAllFieldsDetails = (endpoint) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`http://localhost:4005${endpoint}`)
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

export default { getAllFieldsDetails }