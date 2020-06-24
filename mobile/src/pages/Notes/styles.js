import styled from 'styled-components/native';



export const Container = styled.View`
    background: #D9D9D9;
    flex: 1;
  `


export const Logo = styled.Image`

`

export const Info = styled.View`
    marginTop:50px;
    marginLeft: 15px;
    flexDirection: row;
    padding: 10px;

`

export const InfoTab = styled.View`
    flex: 1;
    flexDirection: row;
    marginTop: 15px;
    padding: 0 25px;     
    
`

export const Amount = styled.Text`
    fontFamily: Roboto;
    fontSize: 14px;
    padding: 0 5px;
    marginTop: 5px;
`
export const NoteList = styled.ScrollView`
    padding: 10px;  
`

export const Note = styled.View`
   
    background: #EAE8E8;
    padding: 10px;
    height: 150px;
    width:370px;
    borderRadius: 8px;
    marginBottom: 15px;
    
`
export const NoteHeader = styled.View`
    flexDirection: row;
`

export const Title = styled.Text`
    fontFamily: Roboto;
    fontWeight: bold;
    fontSize: 18px;
    padding:10px;
    marginLeft: 20px;
    color: #7159C1;
`
export const Description = styled.Text`
    fontFamily: Roboto;
    fontSize: 14px;
    padding:5px;
    
`

export const TypeDescription = styled.Text`
    fontFamily: Roboto;
    fontSize: 14px;
    padding:5px;
    fontWeight: bold;
    color: #7159C1;
    
`
export const CheckButton = styled.TouchableOpacity`
    marginLeft: 5px;
    marginTop: 12px;
    position: absolute;
`

export const StarButton = styled.TouchableOpacity`
    marginLeft: 320px;
    marginTop: 8px;
    position: absolute;
`

export const TrashButton = styled.TouchableOpacity`
    marginLeft: 330px;
    marginTop: 115px;
    position: absolute;
`
