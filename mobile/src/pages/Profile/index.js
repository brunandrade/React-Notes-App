import React from 'react';
import {Container, Logo} from './styles'

import logo from '../../assets/logo2.png'

export default function Profile() {

  return (
   <Container behavior='padding'>
       
        <Logo source={logo} alt="ReactShows"/>  
      
   </Container>
  );
}

