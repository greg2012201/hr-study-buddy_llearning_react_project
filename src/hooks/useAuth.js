import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useError } from './useError'
const AuthContext = React.createContext({})
export const AuthProvider = ({ children }) => {
  const { dispatchError } = useError()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          setUser(response.data)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])
  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      })
      setUser(response.data)
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      dispatchError('Invalid login or password')
    }
  }
  const signOut = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext')
  }
  return auth
}
