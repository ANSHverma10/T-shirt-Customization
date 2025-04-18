import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'

import Shirt from './Shirt'
import CamerRig from './CamerRig'
import Backdrop from './Backdrop'

const CanvasModel = () => {
  return (
    <Canvas 
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{preserveDrawingBuffer:true}}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      
      <CamerRig>
        <Backdrop/>
          <Center>
            <Shirt/>
          </Center>
      </CamerRig>
    </Canvas>
  )
}

export default CanvasModel