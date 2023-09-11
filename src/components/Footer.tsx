import React from 'react';
import { Box, Flex, Text,Center, Image} from '@chakra-ui/react';
import {Twitter, Facebook, Instagram,Youtube} from 'react-feather';

 function Footer() {
    return   (
        <Box bgColor={'white'}>
      
            <Flex justifyContent={'center'}  gap={10}>
                <Facebook color="black" />
                <Instagram color="black" />
    <Twitter color="black" />
    
    
    <Youtube color="black" />
</Flex>

<Flex justifyContent={'center'} my={'4'} bgColor={'white'} gap={10}>
<Text textColor={'black'} fontWeight={'lg'}>Conditions of use</Text>
<Text color={'black'} fontWeight={'lg'}>Privacy & Policy</Text>
<Text color={'black'} fontWeight={'lg'}>Press room</Text>
</Flex>
<Text color={'#6B7280'} textAlign={'center'}>© 2023 MovieBox by Stephen Adeosun  </Text>

</Box>

 )};

    export default Footer;