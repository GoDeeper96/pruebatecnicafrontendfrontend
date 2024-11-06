import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/auth.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // sucursales:sucursalesSlice,
    // productos:productosSlice,
    // clientes:clientesSlice,
    // marcas:marcasSlice,
    // lineas:lineasSlice,
    // proveedores:proveedoresSlice,
    // vendedores:vendedoresSlice,
    // fuerzaventas:fuerzaventasSlice
  },
  
})