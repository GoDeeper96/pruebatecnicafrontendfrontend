import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const AuthGuard = ()=>{
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  

  return user ? <Outlet/> : <Navigate replace to={'/portal/login'} />
  
    
      
}