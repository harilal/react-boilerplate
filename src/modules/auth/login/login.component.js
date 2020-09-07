import React, { useContext } from 'react';
import { AuthContext } from '../../../core/auth.provider';
export const LoginComponent = (props) => {
  const token = useContext(AuthContext)
  console.log(token)
  return (
    <div>login</div>
  )
}