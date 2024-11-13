import axios from "axios";

const getAllContries = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/countries')
            // console.log(response)
            // console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}
const getAllStates = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/states')
            // console.log(response)
            // console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

const getAllCities = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/cities')
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

const getAllReligion = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/religions')
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

const getAllCast = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/casts')
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

const getAllsubCast = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:4005/subCasts')
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        } catch (err) {
            reject('somthing went wrong')
        }
    })
    return promise
}

export default { getAllContries, getAllStates, getAllCities, getAllReligion, getAllCast, getAllsubCast }