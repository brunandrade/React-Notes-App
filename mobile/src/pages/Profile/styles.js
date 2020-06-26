import styled from 'styled-components/native';


export const Container = styled.View`
    alignItems:center;
    flex: 1;
    background: #D9D9D9;
`

export const Header = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;

`
export const Logo = styled.Image`
    marginTop:50px;
    padding: 20px;
    marginBottom:20px;
    marginRight: 180px;

`
export const HeaderTitle = styled.Text`
    marginTop:50px;
    padding: 20px;
    marginBottom:20px;
    fontFamily: Roboto;
    fontWeight: bold;
    fontSize: 24px;
    color: #7159C1;

`
export const ProfileContent = styled.View`
    background: #EAE8E8;
    padding: 20px;
    height: 480px;
    width:370px;
    borderRadius: 8px;
    marginBottom: 15px;
`

export const ProfileInfo = styled.Text`
    fontFamily: Roboto;
    fontSize: 18px;
    fontWeight: bold;
    color:#7159C1;
    marginBottom: 5px;
`

export const UserInfo = styled.Text`
    fontFamily: Roboto;
    fontSize: 16px; 
    marginBottom: 10px;
`
export const EditButton = styled.TouchableOpacity`

`
export const InfoContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;

`

export const Line = styled.View`
    display: flex;
    border: 1px solid;
    borderColor:#7159C1;
    opacity: 0.3;
    marginTop: 20px;
`

export const InfoButton = styled.TouchableOpacity`
    display:flex;
    flexDirection: row;
    alignItems:center;  
    marginTop: 20px;    
`

export const InfoTex = styled.Text`
    fontFamily: Roboto;
    fontSize: 16px; 
    padding: 0 20px;
    
`


