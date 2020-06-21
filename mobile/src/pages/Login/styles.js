import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient).attrs({
    colors:['#7159c1', '#9B49c1'],
    start:{x: 0, y:0},
    end: {x:1, y:1}
  })`
  
    flex: 1;
    alignItems:center;
    
  `;
  
  export const Title = styled.Text`
    marginTop:100px;
    fontSize: 40px;
    fontFamily: Roboto;
    color: #FFF;
    fontWeight: bold;
    padding: 20px;
    marginBottom:60px;
  
  `

  export const Logo = styled.Image`
    marginTop:100px;
    padding: 20px;
    marginBottom:60px;
  
  `
  
  export const Form = styled.KeyboardAvoidingView`
    alignItems:center;
    flex: 1;
  `
  
  export const Input = styled.TextInput.attrs({
      placeholderTextColor: '#999',
  })`
    background : #FFF;
    marginBottom:10px;
    height: 40px;
    width:300px;
    borderRadius: 6px;
    paddingLeft: 10px;
    fontSize: 14px;
  `
  
  export const SubmitButton = styled.TouchableOpacity `
      background : #59C16A;
      height: 40px;
      width:300px;
      alignItems:center;
      justifyContent: center;
      borderRadius: 6px;
      
  `
  
  export const SubmitButtonText = styled.Text `
      fontFamily: Roboto;
      color: #FFF;
      fontWeight: bold;
      fontSize: 16px;
    
  `
  
  export const RegisterButton = styled.TouchableOpacity `
      alignItems:center;
      justifyContent: center;
      marginTop: 30px;
      
    
  `
  export const RegisterButtonText = styled.Text `
      fontFamily: Roboto;
      color: #D49FF4;
      fontWeight: bold;
      fontSize: 16px;
      textDecorationStyle: dotted;
    
  `