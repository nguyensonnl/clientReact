import axios from "../axios"

const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });

}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('Check data from service:', data)
    return axios.post('/api/create-new-user', data)
}

const editUserService = (userId) => {
    return axios.put('/api/edit-user', userId);
}

const deleteUserService = (userId) => {
    //return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

export { handleLogin, getAllUsers, createNewUserService, deleteUserService, editUserService }