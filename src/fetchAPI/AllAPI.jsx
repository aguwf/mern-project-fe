import axios from 'axios'
// import * as constants from '../constants'

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`
  }
  return req
})

const getPost = async (dataSend) => {
  const response = await axios.get(dataSend.url).catch((error) => {
    return new Promise((_resolve, reject) => {
      reject(error)
    })
  })
  return response.data
}

const addPost = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error)
      })
    })
  return response
}

const updatePost = async (dataSend) => {
  const response = await axios
    .put(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error)
      })
    })
  return response
}

const deletePost = async (dataSend) => {
  const response = await axios.delete(dataSend.url).catch((error) => {
    return new Promise((_resolve, reject) => {
      reject(error)
    })
  })
  return response
}

const signin = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error)
      })
    })
  return response
}

const signup = async (dataSend) => {
  const response = await axios
    .post(dataSend.url, dataSend.data)
    .catch((error) => {
      return new Promise((_resolve, reject) => {
        reject(error)
      })
    })
  return response
}

export { getPost, addPost, updatePost, deletePost, signin, signup }
