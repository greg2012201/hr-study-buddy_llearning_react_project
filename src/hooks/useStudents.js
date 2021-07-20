import axios from 'axios'
import { useCallback } from 'react'
const studentsAPI = axios.create({})

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const {
        data: { groups },
      } = await studentsAPI.get('/groups')
      return groups
    } catch (e) {
      console.log(e)
    }
  }, [])
  const getStudentById = useCallback(async (studentId) => {
    try {
      const {
        data: { students },
      } = await studentsAPI.get(`/students/${studentId}`)
      return students
    } catch (e) {
      console.log(e)
    }
  }, [])
  const getStudentsByGroup = useCallback(async (id) => {
    try {
      const {
        data: { students },
      } = await studentsAPI.get(`/groups/${id}`)
      return students
    } catch (e) {
      console.log(e)
    }
  }, [])

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }
  return { getGroups, getStudentsByGroup, findStudents, getStudentById }
}
