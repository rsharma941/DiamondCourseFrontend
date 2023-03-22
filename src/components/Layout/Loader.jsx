import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = ({color="yellow.500"}) => {
  return (
    <VStack h='100vh' justifyContent={'center'}>
    <div style={{transform:"scale(4)"}}>
    <Spinner size={'xl'} speed="0.60s" color={color} thickness="2px" emptyColor='transparent'>
    </Spinner>
    
    </div>
    
    </VStack>
  )
}

export default Loader