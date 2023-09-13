import React from 'react';
import {Box, Flex,Heading,Button, Text, Image, Grid} from '@chakra-ui/react';
import Logo from '.././assets/images/Logo 2.png';
import Home from '.././assets/images/Home.png';
import Movies from '.././assets/images/Movie Projector.png';
import TV from '.././assets/images/TV Show.png'; 
import Calendar from '.././assets/images/Calendar.png';
import '../styles/SideBar.css'
import Logout from '.././assets/images/Logout.png';

function sideBar(){
    return(
        <Box background={'white'}  >
            <Box maxWidth={'200px'}   borderTopRightRadius={'40'}  borderBottomRightRadius={'40'} border={'1px solid rgba(0, 0, 0, 0.3)'} >
    <Box px={4} pt={10}>
        <Image src={Logo} alt="Logo" w='95%' />
    </Box>
    <Flex flexDirection={'column'}  >


    <Flex alignItems={'center'}mt={'60px'} p={6} gap={'6'}>
<Image src={Home} alt="Logo" h='24px' w='25px'/>
<Text color={'black'} size={'xl'} fontWeight={'md'}>Home</Text>
    </Flex>
    <Flex alignItems={'center'} borderRight={'5px solid #BE123C'} bgColor={'rgba(190, 18, 60, 0.1)'} p={6}  gap={'3'}>
<Image src={Movies} alt="Movie" h='20px' w='25px'/>
<Text  fontWeight={'md'} color='#BE123C'>Movies</Text>
    </Flex>
    <Flex alignItems={'center'} p={6} gap={'3'}>
<Image src={TV} alt="Logo" h='20px' w='25px'/>
<Text color={'black'} fontWeight={'md'}>TV Series</Text>
    </Flex>
    <Flex alignItems={'center'} p={6} gap={'3'}>
<Image src={Calendar} alt="Logo" h='20px' w='25px'/>
<Text color={'black'} fontWeight={'md'}>Upcoming</Text>
    </Flex>
    

<Box color={'black'} bgColor={'rgba(190, 18, 60, 0.1)'} m='4' borderRadius={15} px={2} pb='2'  pt='6' border={'1px solid #BE123C'}>
    <Text fontSize={'md'} fontWeight={'900'} color={'black'}>
    Play movie quizzes
and earn
free tickets
    </Text>
    <Text mt='2' fontSize={'sm'}>50k people are playing
now</Text>
<Button bgColor='rgba(190, 18, 60, 0.2)' borderRadius={'20'} mt='4' color={'#BE123C'}>Start Playing</Button>
</Box>
<Flex alignItems={'center'} p='6' gap={'3'}>
<Image src={Logout} alt="Logo" h='23px' w='25px'/>
<Text color={'black'} fontWeight={'md'}>Log out</Text>
    </Flex>
</Flex>
</Box>
</Box>


    )
};

export default sideBar;