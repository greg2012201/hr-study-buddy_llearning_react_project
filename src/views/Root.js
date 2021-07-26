import React from 'react'
import { Wrapper } from './Root.styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import { Button } from 'components/atoms/Button/Button'
import Dashboard from 'views/Dashboard'
import FormField from 'components/molecules/FormField/FormField'
import { useForm } from 'react-hook-form'

import { useAuth } from 'hooks/useAuth'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import { useError } from 'hooks/useError'
const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group/" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  )
}
const UnauthenticatedApp = () => {
  const auth = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField
        autocomplete="current-password"
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  )
}
const Root = () => {
  const auth = useAuth()
  const { error } = useError()
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  )
}

export default Root
