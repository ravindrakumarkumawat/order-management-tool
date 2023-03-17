import React, { useEffect, createContext, useReducer, useMemo } from 'react'
import { SIGN_IN_USER, SIGN_OUT_USER } from './authTypes'
import { reducer } from './authReducer'

const initialState = {
  isSignedIn: false,
  user: null
}

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const authUser = useMemo(() => ({
    uid: '6avert352b32b4n2',
    photo: `https://google.com/`,
    email: 'ravindra@gmail.com',
    displayName: 'ravindra'
  }), [])
  useEffect (() => {
    if (authUser) {
    // User is logged in
    dispatch(
        {
        type: SIGN_IN_USER, 
        payload: {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
        }
    })
    } else {
    // User is logged out
    dispatch({type: SIGN_OUT_USER})
    }
  }, [authUser])

  return <AuthContext.Provider 
            value={{
              isSignedIn: state.isSignedIn,
              user: state.user
            }}>{props.children}</AuthContext.Provider>
}