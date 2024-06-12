import React from 'react'

const StatusContext = React.createContext({
  activeBold: false,
  activeItalic: false,
  activeUnderline: false,
  toggleActiveBold: () => {},
  toggleActiveItalic: () => {},
  toggleActiveUnderline: () => {},
})

export default StatusContext
