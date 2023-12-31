// src/components/common/Navbar.tsx
import React from 'react';
import { Image, Box, Text, Flex,Center, Input, InputGroup, InputRightElement, Button, Stack, Link, useColorModeValue, Grid, GridItem, IconButton } from '@chakra-ui/react';
import { Search as SearchIcon } from 'react-feather';
import { PlayCircle as PlayIcon } from 'react-feather';
import Footer from '../components/Footer';
import Top10Movies from '../components/Top10Movies';
import Logo from '.././assets/images/Logo.png';
import Menu from '.././assets/images/Menu.png';
import Poster from '.././assets/images/Poster.png';
import IMDB from '.././assets/images/imdb.png';
import Orange from '.././assets/images/orange.png';
import Pagination from '../assets/images/Pagination Box.png';


const Navbar: React.FC = () => {
    return (
        <Box>
        <Box bgColor={'black'}
            px={{base:'2',md:'20'}}
            pb={{base:'20', md:'20'}}
            backgroundImage={`url(${Poster})`}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            backgroundRepeat={'no-repeat'}
        >
            <Flex as="nav" justify="space-between" flexDirection={{ md:'row'}}  align="center" gap={{base:'2', md:"0"}} p={4}>
                <div>
                    <Image src={Logo} alt="Logo" />
                </div> 
                <Flex as="form"  w={{base:'200px', md:'500px'}} align="center">
                    <InputGroup w={'100%'}>
                        <Input
                            type="text"
                            placeholder="What do you want to watch?"
                            _placeholder={{ color: 'white' }}
                           
                            border={'1px solid white'}

                        />
                        <InputRightElement
                            cursor="pointer"
                            color='white'
                            bg={'transparent'}
                            children={<SearchIcon color="white" style={{ background: 'transparent', boxShadow: 'none' }} />} // Replace with your chosen icon
                        
                        />
                    </InputGroup>
                </Flex>

                <Flex align="center" gap={'4'}>
                    <Text color={'white'} fontSize={{base:'sm',md:'md'}} display={{base:'none', md:'block'}} >SignIn</Text>
                    <Image src={Menu} alt="Menu" w='100%' />
                </Flex>

            </Flex>


            <Flex justifyContent={'space-between'} alignItems={'center'} mx={{base:'auto', md:'0'}} mt={{base:'4' , md:'20'}} textAlign={{md:'left'}}>
            <Box maxWidth={{base:'550px', md:'500px'}} margin={{base:'auto', md:'0'}} >
                <Text color={'white'} fontSize={{base:'4xl', md:'5xl'}} fontWeight={'bold'}>John Wick 3 : Parabellum</Text>
                <Box  m={{base:'auto'}}>
                        <Flex gap={{base:'1', md:'4'}} maxWidth={'220px'} justifyContent={{ md:'space-between'}}  mt={'4'} mx={{ md:'0'}} textAlign={{ md:'left'}}>
                    <Image src={IMDB} alt="Logo" />
                    <Text color={'white'}  >86.0 / 100</Text>
                    <Image src={Orange} alt="Logo" w={'auto'} h={'auto'} />
                    <Text color={'white'}  >97%</Text>
                </Flex>

                </Box>
                <Text my={'4'} maxWidth={{base:'600px', md:'330px'}}fontSize={{base:'sm', sm:'md'}} mx={{base:'auto', md:'0'}} color={'white'}  textAlign={{ md:'left'}}>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</Text>
               <Button leftIcon={<PlayIcon />} backgroundColor={'#BE123C'} color={'white'} >Watch Trailer</Button>
            </Box>

            <Image src={Pagination} alt="Logo" display={{ md:'block'}} h={'100px'}/>
            
            </Flex>
       
      
        </Box>
        <Top10Movies />
  <Footer />

  </Box>
       
    );
};

export default Navbar;
