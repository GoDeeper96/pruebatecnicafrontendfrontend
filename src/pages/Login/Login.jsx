import React,{useEffect,useState} from 'react'
import { Button, Card, Checkbox, ConfigProvider, Divider, 
  Form, Input, Layout, Modal, Popover, Space, Spin,message as Mensaje,
   Typography,notification, Select } from 'antd';
import { UserOutlined,LockOutlined, LoadingOutlined, TruckFilled } from '@ant-design/icons';
import ButtonPrincipal from '../../components/ButtonPrincipal';

import ButtonCancel from '../../components/ButtonCancel';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../redux/auth/auth.slice';
import { useDispatch, useSelector } from 'react-redux';


const { Title,Link } = Typography;
const Login = (props) => {
    const [FormularioLogin] = Form.useForm()
    const [api, contextHolder] = notification.useNotification();
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
      const openNotificationWithIcon = (type,msg,desc) => {
        api[type]({
          duration:8,
          message: msg,
          description:desc
        });
      };
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [CargandoBoton,SetCargandoBoton] = useState(false)
    const onFinish = (fieldsValue)=>{
      
        // console.log(fieldsValue)
        SetCargandoBoton(true)
        const ob = {
            Usuario:fieldsValue.Usuario,
            Contraseña:fieldsValue.Contraseña,
      
        }
        dispatch(login(ob))
       
     
    }
    const ParseAccount = ()=>{
    
        if(localStorage.getItem('user'))
        {
          
            const lob = JSON.parse(localStorage.getItem('user'))
            const values = {
                Usuario:lob.Usuario,
                Contraseña:lob.Contraseña
            }
        FormularioLogin.setFieldsValue(values)
        }
    }
    const onReset = ()=>{
        FormularioLogin.resetFields()
    }
    
      useEffect(() => {
       
        ParseAccount()
        
       }, [FormularioLogin])
      useEffect(() => {

        if (isError) {
            openNotificationWithIcon('error','Error','Algo salió mal, vuelve a intentar porfavor.')
            SetCargandoBoton(false)
        }
    
        if (isSuccess || user) {
          SetCargandoBoton(false)
          // navigate('/portal',{replace:true})
          openNotificationWithIcon('info','Mensaje','Esta siendo redireccionado al portal')
          window.location.href = '/portal'
        }

        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
 
  return (
<Layout  className='d-flex justify-content-center align-items-center vh-100 vw-100' style={{
        background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     transition: 'background 1s linear'
}}>
{contextHolder}
<div className='card align-items-center' style={{
        opacity:'0.95',boxShadow:'0px 0px 30px 0px rgba(0,0,0,0.75)',
        
        //   background:'#f2d7d5',
        // background:'#eaeded'
        }}>
            <Form 
            
            form={FormularioLogin}
            className='p-4'
            layout='vertical'
          
            onReset={onReset}
            onFinish={onFinish}
            style={{
                height:'23rem',
                width:'25rem',
                borderRadius:'10px'
            }}
            >       
             <h1 className='text-center' style={{color:'#34495e'}}>
                PedidosFast
            </h1> 
            <p style={{fontSize:'14px'}}>Bienvenido a PedidosFast, porfavor inicie sesión</p>  
            <div className='border-bottom mb-4 mt-4'/> 
           
             <Form.Item 
             rules={[
                    {
                    required: true,
                    message: 'Porfavor ingrese un usuario!',
                    },
                ]}  
              
             name='Usuario'   
             style={{marginBottom:'20px'}}
             >
                <Input placeholder='Ramirez.p' style={{borderRadius:'4px'}}   prefix={<UserOutlined />} size='large'/>
            </Form.Item>   
       
      
            <Form.Item 
            rules={[
                    {
                    required: true,
                    message: 'Porfavor ingrese su contraseña!',
                    },
                ]}
                style={{marginBottom:15}}
                name='Contraseña'
                
                >
                 
                     <Input.Password placeholder='******' style={{borderRadius:'4px',marginBottom:'0px'}}   
                       prefix={<LockOutlined />} size='large'/>
                 
                </Form.Item>
          
           
                
                <div className='d-flex justify-content-center'>
        
          
          <ButtonCancel type='primary'size='large' htmlType='submit' 
           style={{width:'100%',marginTop:'15px'}} 
        //    loading={CargandoBoton}
           >
         
    Iniciar Sesion
            
          </ButtonCancel>
        
        </div>   
            </Form>
     </div>
       
        
        
     
     </Layout>
  )
}

export default Login