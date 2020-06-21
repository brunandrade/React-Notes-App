import styled from 'styled-components/native';

export const Container = styled.View`
    background: #D9D9D9;
    flex: 1;
    alignItems: center;
  `


export const Logo = styled.Image`
    marginTop:50px;
    padding: 20px;
    marginBottom: 30px;

`

export const Note = styled.View`
   
    background: #EAE8E8;
    padding: 20px;
    height: 480px;
    width:370px;
    borderRadius: 8px;
    marginBottom: 15px;
    
`

export const Title = styled.Text`
    fontFamily: Roboto;
    fontSize: 18px;
    fontWeight: bold;
    marginBottom: 5px;
    color:#7159C1;
`

export const TitleInput = styled.TextInput.attrs({
    placeholderTextColor: '#AEA0DD',
})`
    height: 50px;
    border: 1px solid;
    borderColor: #7159C1;
    borderRadius:8px;
    padding: 0 10px;
    marginBottom: 20px; 
`

export const Description = styled.Text`
    fontFamily: Roboto;
    fontSize: 18px;
    fontWeight: bold;
    marginBottom: 5px;
    color:#7159C1;
     
`

export const DescriptionInput = styled.TextInput.attrs({
    placeholderTextColor: '#AEA0DD',
})`

    height: 100px;
    border: 1px solid;
    borderColor: #7159C1;
    borderRadius:8px;
    padding: 10px;
    marginBottom: 20px; 
     
`

export const NoteTypes = styled.ScrollView`
    flexDirection: row;
    
`
export const TypeButton = styled.TouchableOpacity`

`

export const Type = styled.View`
    marginRight: 22px;
    backgroundColor: #7159C1;
    height: 95px;
    width: 95px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 8px;
   
`

export const TypeSelected = styled.View`
    marginRight: 22px;
    backgroundColor: #AEA0DD;
    height: 95px;
    width: 95px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 8px;
    border: 2px solid;
    borderColor:#544097;
`

export const CreteNoteButton = styled.TouchableOpacity`
    flexDirection: row;
    backgroundColor: #7159C1;
    height: 50px;
    alignItems: center;   
    borderRadius: 8px;
    marginTop: 40px;
`

export const Icon = styled.View`
    backgroundColor: #544097;
    padding: 12px;
    marginRight: 157px;
    borderRadius: 8px;
    position: absolute;

`
export const ButtonText = styled.Text`
    padding: 20px;
    fontFamily: Roboto;
    fontSize: 18px;
    fontWeight: bold;
    color:#FFF;
    marginLeft: 110px;
`