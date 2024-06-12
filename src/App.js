import {Component} from 'react'
import StatusContext from './context/StatusContext'
import TextEditor from './components/TextEditor'
import './App.css'
// Replace your code here
class App extends Component {
  state = {activeBold: false, activeItalic: false, activeUnderline: false}

  toggleActiveBold = () => {
    this.setState(prevState => ({
      activeBold: !prevState.activeBold,
    }))
  }

  toggleActiveItalic = () => {
    this.setState(prevState => ({
      activeItalic: !prevState.activeItalic,
    }))
  }

  toggleActiveUnderline = () => {
    this.setState(prevState => ({
      activeUnderline: !prevState.activeUnderline,
    }))
  }

  render() {
    const {activeBold, activeItalic, activeUnderline} = this.state
    console.log(activeBold)

    return (
      <StatusContext.Provider
        value={{
          activeBold,
          activeItalic,
          activeUnderline,
          toggleActiveBold: this.toggleActiveBold,
          toggleActiveItalic: this.toggleActiveItalic,
          toggleActiveUnderline: this.toggleActiveUnderline,
        }}
      >
        <TextEditor />
      </StatusContext.Provider>
    )
  }
}

export default App
