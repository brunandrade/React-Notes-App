import React, { useState } from "react";
import {Container, Logo, Info, Note, InfoTab, Amount, Title, Description, StarButton, NoteList, NoteHeader, TrashButton, CheckButton} from './styles'
import { FontAwesome, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons'; 

import logo from '../../assets/logo2.png'

export default function Notes() {

   const [isSelected, setSelection] = useState(false);

  return (
   <Container >
        <Info>

          <Logo source={logo} alt="ReactS hows"/>  

          <InfoTab>
            <AntDesign name="star" size={24} color="#544097" />
            <Amount>5</Amount>
          </InfoTab>

          <InfoTab>
            <FontAwesome5 name="clipboard-check" size={24} color="#544097" />
            <Amount>10</Amount>
          </InfoTab>

          <InfoTab>
            <FontAwesome5 name="clipboard-list" size={24} color="#544097" />
            <Amount>10</Amount>
          </InfoTab>
          
        </Info>
        
        <NoteList showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
            <Note>
              <NoteHeader>   
                <CheckButton>
                  <Feather name="square" size={21} color="#544097" />
                </CheckButton>
                
                <Title>Hello World</Title>
                <StarButton>
                    <FontAwesome name="star-o" size={20} color="#544097" />
                </StarButton>
              </NoteHeader>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est officia mollitia ab odio eaque voluptates excepturi et </Description>
            <TrashButton>
              <FontAwesome5 name="trash-alt" size={20} color="#544097" />
            </TrashButton>
          </Note>

          <Note>
              <NoteHeader>      
              <CheckButton>
                  <Feather name="square" size={21} color="#544097" />
                </CheckButton>      
                <Title> Teste Lista</Title>
                <StarButton>
                    <FontAwesome name="star-o" size={20} color="#544097" />
                </StarButton>
              </NoteHeader>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est officia mollitia ab odio eaque voluptates excepturi et </Description>
            <TrashButton>
              <FontAwesome5 name="trash-alt"size={20} color="#544097" />
            </TrashButton>
          </Note>

          <Note>
              <NoteHeader>     
              <CheckButton>
                  <Feather name="square" size={21} color="#544097" />
                </CheckButton>       
                <Title>Ola Mundo</Title>
                <StarButton>
                    <FontAwesome name="star-o" size={20} color="#544097" />
                </StarButton>
              </NoteHeader>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est officia mollitia ab odio eaque voluptates excepturi et </Description>
            <TrashButton>
              <FontAwesome5 name="trash-alt" size={20} color="#544097" />
            </TrashButton>
          </Note>

          <Note>
              <NoteHeader> 
              <CheckButton>
                  <Feather name="square" size={21} color="#544097" />
                </CheckButton>           
                <Title>Praticar React</Title>
                <StarButton>
                    <FontAwesome name="star-o" size={20} color="#544097" />
                </StarButton>
              </NoteHeader>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est officia mollitia ab odio eaque voluptates excepturi et </Description>
            <TrashButton>
              <FontAwesome5 name="trash-alt" size={20} color="#544097" />
            </TrashButton>
          </Note>

          <Note>
              <NoteHeader>      
              <CheckButton>
                  <Feather name="square" size={21} color="#544097" />
                </CheckButton>      
                <Title>Ta batenu</Title>
                <StarButton>
                    <FontAwesome name="star-o" size={20} color="#544097" />
                </StarButton>
              </NoteHeader>

            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, est officia mollitia ab odio eaque voluptates excepturi et </Description>
            <TrashButton>
              <FontAwesome5 name="trash-alt" size={20} color="#544097" />
            </TrashButton>
          </Note>
        </NoteList>
   </Container>
  );
}

