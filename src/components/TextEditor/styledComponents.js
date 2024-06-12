import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  width: 70%;
`

export const TextAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const TextEditorHeading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 32px;
  margin-bottom: 100px;
  font-weight: 500;
  text-align: center;
`

export const TextEditorImage = styled.img`
  width: 60%;
  align-self: center;
  justify-content: center;
`

export const TextEditorCardContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  height: 80vh;
  border: 1px solid #cbd5e1;
  margin: 20px;
  border-radius: 10px;
`

export const ButtonsListContainer = styled.ul`
  display: flex;
  margin-top: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cbd5e1;
`

export const ButtonListItem = styled.li`
  list-style-type: none;
  //   border: 1px solid red;
`
export const BoldButton = styled.button`
  color: ${props => (props.activeStatus === true ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`

export const ItalicButton = styled(BoldButton)`
  margin-right: 20px;
  color: ${props => (props.activeStatus === true ? '#faff00' : '#f1f5f9')};
`

export const UnderLineButton = styled(BoldButton)`
  color: ${props => (props.activeStatus === true ? '#faff00' : '#f1f5f9')};
`

export const TextAreaContainer = styled.div`
  width: 95%;
  margin: auto;
  height: 450px;
  max-height: 575px;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 100%;
  color: #f8fafc;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-left: 20px;
  font-weight: ${props => (props.activeBold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.activeUnderline === true ? 'underline' : 'normal'};
`
