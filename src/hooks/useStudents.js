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

  const getStudents = useCallback(async (id) => {
    try {
      const {
        data: { students },
      } = await axios.get(`/students/${id}`)
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
  return { getGroups, getStudents, findStudents }
}
