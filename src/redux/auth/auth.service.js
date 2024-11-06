import axios from 'axios'


import { Api } from '../../routes/BackendServices.js'
import { UsuariosRoutes } from '../../routes/ApiRoutes/Usuarios.js'

const loginMdb = async(userData)=>{

  const response = await axios.post(`${Api}${UsuariosRoutes.LOGIN}`, userData)


  if (response.data) {
  
      localStorage.setItem('user', JSON.stringify(response.data))
    
    // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  window.location.href = '/portal/login'
}

const authService = {
  loginMdb,

  // register,
  logout,
  // login,
}

export default authService

