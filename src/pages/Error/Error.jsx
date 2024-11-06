import React from 'react'
import { Button, Result, notification } from 'antd';
import { Content } from 'antd/es/layout/layout';
const Error = ({error,resetErrorBoundary}) => {

 
  const Regresar = ()=>{
    window.location.href = '/portal/login'
  }
  return (
    <Content>
    <Result
    status="500"
    title={`${error.message}`}
    subTitle="Disculpa, algo salió mal."
    extra={<Button onClick={Regresar}>Regresar</Button>}
    
  /></Content>


  )
}

export default Error