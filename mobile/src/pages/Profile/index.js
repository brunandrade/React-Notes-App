import React from 'react';
import {Container, Logo, Header, HeaderTitle, ProfileContent, ProfileInfo, UserInfo, EditButton, 
  InfoContainer, Line, InfoButton, InfoTex} from './styles'
import { MaterialIcons, AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

import logo from '../../assets/logo2.png'

export default function Profile() {

  return (
   <Container>
     <Header>
        <Logo source={logo} alt="React Notes"/> 
        <HeaderTitle>Perfil</HeaderTitle>
     </Header>

       <ProfileContent>
        <ProfileInfo>Nome:</ProfileInfo>
          <InfoContainer>          
            <UserInfo>Bruna Andrade</UserInfo>            
            <EditButton>
              <MaterialIcons name="create" size={20} color="#7159C1" />
            </EditButton>
          </InfoContainer>

        <ProfileInfo>Email:</ProfileInfo>
        <InfoContainer>          
            <UserInfo>bruna.card.andrade@gmail.com</UserInfo>            
            <EditButton>
              <MaterialIcons name="create" size={20} color="#7159C1" />
            </EditButton>
          </InfoContainer>

        <ProfileInfo>Telefone:</ProfileInfo>
        <InfoContainer>          
            <UserInfo>(71) 999509445</UserInfo>            
            <EditButton>
              <MaterialIcons name="create" size={20} color="#7159C1" />
            </EditButton>
          </InfoContainer>

          <Line/>

          <InfoButton>
            <AntDesign name="lock1" size={20} color="black" />
            <InfoTex>Esqueci minha senha</InfoTex>
          </InfoButton>
        
          <InfoButton>
            <AntDesign name="deleteuser" size={20} color="black" />
            <InfoTex>Deletar minha conta</InfoTex>
          </InfoButton>

          <InfoButton>
            <AntDesign name="setting" size={20} color="black" />
            <InfoTex>Configurações</InfoTex>
          </InfoButton>

          <InfoButton>
            <Feather name="log-out" size={20} color="black" />
            <InfoTex>Sair</InfoTex>
          </InfoButton>
          

       </ProfileContent>
        
      
   </Container>
  );
}

