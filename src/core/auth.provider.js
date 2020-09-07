import React, { Component } from 'react'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  let state = { token: "sdfsfsdsdsdfsf" }
  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthContext, AuthProvider }
