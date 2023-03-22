import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { buySubscription } from '../../redux/actions/user';
import { server } from '../../redux/store';
import logo from '../../assets/images/logo.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    
    setKey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'DiamondCourse',
          description: 'Get access to all premium content like Course Notes,CheatSheet,Roadmap Of The Career Option and Many More....',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Raman Sharma',
          },
          theme: {
            color: '#FFC800',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [dispatch, error, user.name, user.email, key, subscriptionId]);
  return (
    <Container h={'90vh'} my="16">
      <Heading children="Subscription " p={'4'} textAlign={'center'} />
      <VStack
        alignItems={'stretch'}
        spacing="0"
        boxShadow={'lg'}
        borderRadius={'lg'}
      >
        <Box bg={'yellow.400'} p="4" borderRadius="8px 8px 0px 0px">
          <Text
            textAlign={'center'}
            color={'black'}
            children={`Pro Pack - ₹299.00`}
          />
        </Box>

        <Box p={'4'}>
          <VStack textAlign={'center'} px="4" mt={'5'} spacing="8">
            <Heading children="Diamond Courses"/>
            <Text children="Join ProPack to get Access to all Premium Content Like  Course Notes,CheatSheet,Carrer Roadmaps and Many More...  " />
            <Heading size={'md'} children="₹299.00" />
          </VStack>

          <Button
            isLoading={loading}
            w={'full'}
            colorScheme="yellow"
            my={'8'}
            
          >
            Coming Soon
          </Button>
        </Box>
        <Box bg={'black'} p="5" css={{ borderRadius: '0px 0px 8px 8px' }}>
          <Heading
            color={'white'}
            children="100% refund at cancellation"
            fontSize={'sm'}
            textTransform="uppercase"
          />
          <Text
            color={'white'}
            children="*Terms&Conditions apply "
            fontSize={'xs'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
