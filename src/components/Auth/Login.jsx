import { Box, Button, Center, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/user.js';

function Login() {
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
   e.preventDefault();
   dispatch(login(email,password));
  }
  return (
    <Container h={'98vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing='16'>
        <Heading
          children="Welcome to DiamondCourse"
          
        />
        <form onSubmit={submitHandler} style={{width:"100%"}}>
          <Box my={4}>
          <FormLabel htmlFor='email'   children='Email Address:'/>
          <Input
            required
            value={email}
            onChange={e => Setemail(e.target.value)}
            focusBorderColor="yellow.400"
            type={email}
            id='email'
            placeholder="abc@email.com"
          />
          </Box>
          <Box my={4}>
          <FormLabel htmlFor='password'   children='Password:'/>
          <Input
            required
            value={password}
            onChange={e => Setpassword(e.target.value)}
            focusBorderColor="yellow.400"
            type={password}
            id='password'
            placeholder="Enter your password"
          />
          </Box>
          <Box>
            <Link to='/forgetpassword'>
                <Button variant='link'>
                    ForgetPassword?
                </Button>
            </Link>
          </Box>
          <Box>
            <Button children='Submit' my='4' colorScheme={'yellow'} type='submit'/>
          </Box>
          <Box my='4'>
          New User ? {''}
          <Link to='/register'>
          <Button variant='link' color={'yellow.400'}>
            Sign up 
          </Button>
          </Link>{' '}
             here 
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Login;
