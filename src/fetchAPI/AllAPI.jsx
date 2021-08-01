import axios from 'axios'
// import * as constants from '../constants'

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

export { getPost, addPost, updatePost, deletePost }
