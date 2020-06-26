import React from 'react';
import logo from '../../assets/logo.png'
import {Container, Logo, Header, HeaderTitle, InputContaiter, InputTitle, Input, RegisterButton, 
    RegisterButtonText, FormContainer, InputHeader} from './styles'
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Register(){
    const navigation = useNavigation();
    
  function navigateLogin(){
    navigation.navigate('NotesTabs');
  }
    return(
        <Container>
             <Header>
                <Logo source={logo} alt="React Notes"/> 
                <HeaderTitle>Faça o seu cadastro no React Notes</HeaderTitle>               
            </Header>

            <FormContainer>
                <InputContaiter>
                    <InputHeader>
                        <Feather name="user" size={20} color="white" />
                        <InputTitle>Nome:</InputTitle>
                    </InputHeader>
                    
                    <Input placeholder="Digite seu nome..."/>
                </InputContaiter>

                <InputContaiter>
                    <InputHeader>
                        <Feather name="mail" size={20} color="white" />
                        <InputTitle>Email:</InputTitle>
                    </InputHeader>
                    <Input placeholder="Digite seu melhor email..."/>
                </InputContaiter>

                <InputContaiter>
                    <InputHeader>
                        <Feather name="phone-call" size={20} color="white" />
                        <InputTitle>Telefone:</InputTitle>
                    </InputHeader>
                    <Input placeholder="Digite o seu número..."/>
                </InputContaiter>

                <InputContaiter>
                    <InputHeader>
                        <Feather name="lock" size={20} color="white" />
                        <InputTitle>Senha:</InputTitle>
                    </InputHeader>
                    <Input placeholder="Digite sua senha..."/>
                </InputContaiter>

                <InputContaiter>
                    <InputHeader>
                        <Feather name="lock" size={20} color="white" />
                        <InputTitle>Confirme sua senha:</InputTitle>
                    </InputHeader>
                    <Input placeholder="Confirme sua senha..."/>
                </InputContaiter>

                <RegisterButton onPress={() => navigateLogin()}>
                    <RegisterButtonText>Cadastrar</RegisterButtonText>
                </RegisterButton>
            </FormContainer>

           
            
        </Container>

    )
}