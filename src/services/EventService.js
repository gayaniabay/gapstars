import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/posts`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPosts() {
    return apiClient.get('?_limit=5')
  }
}
