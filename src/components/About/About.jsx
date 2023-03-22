import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import vg from '../../assets/images/Avatar.jpeg'
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsandcondition from '../../assets/docs/termsAndCondition';
import { RiSecurePaymentFill } from 'react-icons/ri';
const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);
const TandC = ({ termsandcondition }) => (
  <Box>
    <Heading
      children="Terms & Conditions"
      fontFamily={'heading'}
      size="md"
      my="4"
      textAlign={['center', 'left']}
    />
    <Box h={'sm'} p="4" overflowY="scroll">
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsandcondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['8', '16']} padding="8">
    <VStack>
      <Avatar src={vg} boxSize={['40', '48']} />
      <Text children="Founder" opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Raman Sharma " size={['md', 'xl']} />
      <Text
        children="Hi i am full stack developer and a learner ,our misssion is to provide quality content at best price with all material to as many people as we can  "
        textAlign={['center', 'left']}
      />
    </VStack>
  </Stack>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About us " textAlign={['center', 'left']} />

      <Founder />
      <Stack direction={['column', 'row']} m="8" alignItems="center">
        <Text
          children="We are Course provider platform with premium content for exculusively for premium user "
          textAlign={['center', 'left']}
          fontFamily="cursive"
        />
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout our plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsandcondition={termsandcondition} />
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill/>
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
