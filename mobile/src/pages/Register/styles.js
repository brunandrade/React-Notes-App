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

export const Header = styled.View`
    display: flex;
    flexDirection: column;
    alignItems: center;

`
export const Logo = styled.Image`
    marginTop:50px;
`

export const HeaderTitle = styled.Text`
    padding: 10px;
    marginBottom:10px;
    fontFamily: Roboto;
    fontSize: 18px;
    color: #FFF;

`

export const FormContainer = styled.View`
  display: flex;
  flexDirection: column;
  alignItems: center;

`


export const InputContaiter = styled.View`
    display: flex;
    flexDirection: column;
`
export const InputHeader = styled.View`
    display: flex;
    flexDirection: row;
`

export const InputTitle = styled.Text`
    fontFamily: Roboto;
    fontSize: 16px;
    color: #FFF;
    padding: 0 10px;
    fontWeight: bold;
    marginBottom: 5px;
`

export const Input = styled.TextInput`
    backgroundColor: #FFF;
    width: 300px;
    height: 40px;
    marginBottom:15px;
    borderRadius: 8px;
    padding: 10px;

`

export const RegisterButton = styled.TouchableOpacity`
    backgroundColor: #59C16A;
    width: 300px;
    height: 40px;
    borderRadius: 8px;
    alignItems: center;
    justifyContent: center;
    marginTop: 10px;
`

export const RegisterButtonText = styled.Text`
    fontFamily: Roboto;
    fontSize: 16px;
    fontWeight: bold;
    color: #FFF;

`