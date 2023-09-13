import React from 'react';
import { Box, Flex, Text,Center, Image} from '@chakra-ui/react';
import {Twitter, Facebook, Instagram,Youtube} from 'react-feather';
import '../styles/MovieCard.css'
 function Footer() {
    return   (
        <Box bgColor={'white'}>
        <Box  bgColor={'white'} mt='10'>
      
            <Flex justifyContent={'center'}  gap={10}>
                <Facebook className='icon' color="white" fontWeight={'bold'}/>
                <Instagram className='icon' color="white" />
    <Twitter className='icon' color="white" />
    
    
    <Youtube className='icon' color="white" />
</Flex>

<Flex justifyContent={'center'} my={'8'}  textAlign='center'  flexDirection={{base:'column', md:'row'}} bgColor={'white'} gap={{base:'4', md:'10'}}>
<Text textColor={'black'} fontWeight={'lg'}>Conditions of use</Text>
<Text color={'black'} fontWeight={'lg'}>Privacy & Policy</Text>
<Text color={'black'} fontWeight={'lg'}>Press room</Text>
</Flex>
<Text color={'#6B7280'} mb='10' textAlign={'center'}>© 2023 MovieBox by Stephen Adeosun  </Text>

</Box>
</Box>
 )};

    export default Footer;