import axios from 'axios'
import { useCallback } from 'react'

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const {
        data: { groups },
      } = await axios.get('/groups')
      return groups
    } catch (e) {
      console.log(e)
    }
  }, [])
  const getStudentById = useCallback(async (studentId) => {
    try {
      const {
        data: { students },
      } = await axios.get(`/students/${studentId}`)
      return students
    } catch (e) {
      console.log(e)
    }
  }, [])
  const getStudentsByGroup = useCallback(async (id) => {
    try {
      const {
        data: { students },
      } = await axios.get(`/groups/${id}`)
      return students
    } catch (e) {
      console.log(e)
    }
  }, [])

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }
  return { getGroups, getStudentsByGroup, findStudents, getStudentById }
}
