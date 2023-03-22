import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Link,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { courseRequest } from '../../redux/actions/other';
  
  const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(' ');
  
    const [course, setCourse] = useState('');
    const dispatch = useDispatch();
    const {
      loading,
      error,
      message: stateMessage,
    } = useSelector(state => state.other);
  
    const submitHandler = e => {
      e.preventDefault();
      dispatch(courseRequest(name, email, course));
    };
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
  
      if (stateMessage) {
        toast.success(stateMessage);
        dispatch({ type: 'clearMessage' });
      }
    }, [dispatch, error, stateMessage]);
    return (
      <Container h={'98vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing="16">
          <Heading children="Request A Course" />
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box my={4}>
              <FormLabel htmlFor="name" children="Name:" />
              <Input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                focusBorderColor="yellow.400"
                type={Text}
                placeholder="Enter your Name"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={'email'}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="message" children="Message" />
              <Textarea
                required
                
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="Explain about  course...."
                focusBorderColor="yellow.500"
              />
            </Box>
  
            <Box>
              <Button
                isLoading={loading}
                children="Send Mail"
                my="4"
                colorScheme={'yellow'}
                type="submit"
              />
            </Box>
            <Box my="4">
              See Available courses{' '}
              <a href="/courses">
                <Button colorScheme={'yellow'} variant="link">
                  Click
                </Button>{' '}
                here
              </a>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Request;
  