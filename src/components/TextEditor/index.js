import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import StatusContext from '../../context/StatusContext'

import {
  BackgroundContainer,
  TextEditorContainer,
  TextAndImageContainer,
  TextEditorHeading,
  TextEditorImage,
  TextEditorCardContainer,
  ButtonsListContainer,
  ButtonListItem,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  TextArea,
  TextAreaContainer,
} from './styledComponents'

class TextEditor extends Component {
  render() {
    return (
      <StatusContext.Consumer>
        {value => {
          const {
            activeBold,
            activeItalic,
            activeUnderline,
            toggleActiveBold,
            toggleActiveItalic,
            toggleActiveUnderline,
          } = value

          const onClickBold = () => {
            toggleActiveBold()
          }

          const onClickItalic = () => {
            toggleActiveItalic()
          }

          const onClickUnderline = () => {
            toggleActiveUnderline()
          }

          return (
            <BackgroundContainer>
              <TextEditorContainer>
                <TextAndImageContainer>
                  <TextEditorHeading>Text Editor</TextEditorHeading>
                  <TextEditorImage
                    src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                    alt="text editor"
                  />
                </TextAndImageContainer>
                <TextEditorCardContainer>
                  <ButtonsListContainer>
                    <ButtonListItem>
                      <BoldButton
                        type="button"
                        data-testid="bold"
                        onClick={onClickBold}
                        activeStatus={activeBold}
                      >
                        <VscBold size={25} />
                      </BoldButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <ItalicButton
                        type="button"
                        data-testid="italic"
                        onClick={onClickItalic}
                        activeStatus={activeItalic}
                      >
                        <GoItalic size={25} />
                      </ItalicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <UnderLineButton
                        type="button"
                        data-testid="underline"
                        onClick={onClickUnderline}
                        activeStatus={activeUnderline}
                      >
                        <AiOutlineUnderline size={25} />
                      </UnderLineButton>
                    </ButtonListItem>
                  </ButtonsListContainer>
                  <TextAreaContainer>
                    <TextArea
                      activeBold={activeBold}
                      activeItalic={activeItalic}
                      activeUnderline={activeUnderline}
                    />
                  </TextAreaContainer>
                </TextEditorCardContainer>
              </TextEditorContainer>
            </BackgroundContainer>
          )
        }}
      </StatusContext.Consumer>
    )
  }
}

export default TextEditor
