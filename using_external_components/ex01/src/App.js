import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
    <Modal
      trigger={<Button color='green'>Confirm</Button>}
      header='Confirmed!'
      actions={[{name:'remove', key: 'close', content: 'Close', positive: true }]}
    />
    <Modal
      trigger={<Button color='red'>Cancel</Button>}
      header='Canceled!'
      actions={[{ key: 'close', content: 'Close', positive: true }]}
    />
    </div>
  )
}

export default App