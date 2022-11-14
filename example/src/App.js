import React from 'react'

import { Button } from 'eagelui'
import 'eagelui/dist/index.css'

const App = () => {
  return (
    <>
    <Button text="default" />
    <Button text="primary" type="primary"/>
    <Button text="dashed" type="dashed"/>
    <Button text="text" type="text"/>
    <Button text="link" type="link"/>
    </>
  )
}

export default App
