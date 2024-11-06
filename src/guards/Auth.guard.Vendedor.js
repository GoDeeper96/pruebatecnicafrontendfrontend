import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"


export const AuthGuardVendedor = ()=>{
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  // const location = useLocation();
  
  // if (location.pathname.includes("/portal/recuperarcontrasena")) {
  //   return <Outlet />;
  // }

  return user.Rol==='Vendedor' ? <Outlet/> : <Navigate replace to={'/portal'} />
  
    
      
}