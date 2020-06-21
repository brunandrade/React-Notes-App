import React from 'react';
import {Container, Title, Form, Input, SubmitButton, RegisterButton, SubmitButtonText, RegisterButtonText, Logo} from './styles'
import logo from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'

export default function App() {
  const navigation = useNavigation();

  function navigateLogin(){
    navigation.navigate('NotesTabs');
}
  return (
   <Container>
      <Form behavior='padding' >
        <Logo source={logo} alt="ReactShows"/>    

        <Input placeholder="Digite seu melhor email..." type="email" autoCapitalize="none"/>
        <Input placeholder="Digite sua senha" secureTextEntry={true} autoCapitalize="none"/>

        <SubmitButton onPress={() => navigateLogin()}>
            <SubmitButtonText>Entrar</SubmitButtonText>
        </SubmitButton>

        <RegisterButton>
            <RegisterButtonText>Cadastre-se Aqui!</RegisterButtonText>
        </RegisterButton>

     </Form>
   </Container>
  );
}

