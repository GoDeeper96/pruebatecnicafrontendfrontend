import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Title from 'antd/es/typography/Title';

const Loading = (props) => {
  return (
    <div className="d-flex col-12 align-items-center justify-content-center min-h-screen" style={{
        background:'#eaecee'
    }}>
        
{/*         
        <Title className='mb-0'>Cargando ... </Title> */}

        <Spin style={{color:'#f8c471'}} indicator={<LoadingOutlined style={{fontSize:'100px'}} spin />} />
     
    </div>
  )
}

export default Loading