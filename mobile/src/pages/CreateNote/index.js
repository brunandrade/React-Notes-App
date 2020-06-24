import React from 'react';
import {Container, Logo, Note, Title, TitleInput, Description, DescriptionInput,
    CreteNoteButton, ButtonText, Icon, Type, NoteTypes, TypeButton, TypeSelected, TypeText, Header, HeaderTitle} from './styles'
import { MaterialIcons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';


import logo from '../../assets/logo2.png'

export default function CreateNote() {

  return (
   <Container behavior='padding'>

        <Header>
          <Logo source={logo} alt="ReactShows"/>  
    
          <HeaderTitle>            
            Crie a sua Nota!            
          </HeaderTitle>
          
        </Header>
          
          <Note>            
            <Title>Título</Title>
              <TitleInput placeholder="Digite o título da nota..."  autoCapitalize="none"/>

            <Description>Descrição</Description>
              <DescriptionInput placeholder="Digite a descrição..."  autoCapitalize="none" multiline = {true}/>

            <TypeText>Tipo da Nota</TypeText>
              <NoteTypes  horizontal={true} showsHorizontalScrollIndicator={false}>
                <TypeButton >
                    <TypeSelected>                
                        <MaterialCommunityIcons name="silverware-fork-knife" size={40} color="white" />                               
                    </TypeSelected>
                </TypeButton>     

                <TypeButton>
                  <Type>
                        <AntDesign name="creditcard" size={40} color="white"/>               
                  </Type>
                </TypeButton>

                <TypeButton>
                  <Type>               
                    <AntDesign name="book" size={40} color="white"/>        
                  </Type>
                </TypeButton>      

                <TypeButton>
                  <Type>            
                      <AntDesign name="shoppingcart" size={40} color="white"/>
                  </Type>
                </TypeButton>

                <TypeButton>
                  <Type>             
                      <AntDesign name="folder1" size={40} color="white"/>
                  </Type>
                </TypeButton>
              </NoteTypes>

              <CreteNoteButton>
                <Icon>
                  <MaterialIcons name="create" size={24} color="white" />
                </Icon>                  
                  <ButtonText>Criar Nota</ButtonText>
              </CreteNoteButton>
          </Note>
    
        
      
   </Container>
  );
}

