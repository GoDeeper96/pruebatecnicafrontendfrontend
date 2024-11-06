import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Nomatch = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  if(user){
    return (<Navigate to='/portal'/>)
  
  } 
  return (
   <Navigate to='/portal/login'/>
  )

}

export default Nomatch