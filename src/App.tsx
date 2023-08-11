import './App.scss'
import { Fragment } from 'react'
import Icons from './components/Icons/Icons'
import Dock from './components/Dock/Dock'
import MenuBar from './components/MenuBar/MenuBar'

function App() {

  return (
    <Fragment>
      <div className="desktop">
        {/* <Icons /> */}
        <MenuBar />
        <Dock />
      </div>
    </Fragment>
  )
}

export default App
