import axios from 'axios'
import { useEffect, useState } from 'react'

export const useStudents = (id = '') => {
  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { groups },
        } = await axios.get('/groups')
        setGroups(groups)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  useEffect(() => {
    if (!id) {
      return
    } else {
      ;(async () => {
        try {
          const {
            data: { students },
          } = await axios.get(`/students/${id}`)
          return setStudents(students)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [id])
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
  return { groups, students, findStudents }
}
