import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <Heading size={'4xl'} children='OOPs' color={'yellow.400'}/>
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Payment Failed</Heading>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme='yellow'>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
