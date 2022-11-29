import './App.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function App() {

  const confirmed = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Confirmed!</Popover.Header>
    </Popover>
  );
  const canceled = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Canceled!</Popover.Header>
    </Popover>
  );
  return (
    <div className="App">
      <OverlayTrigger trigger="click" placement="left" overlay={confirmed}>
        <Button variant="success">Confirm</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={canceled}>
        <Button variant="danger">Cancel</Button>
      </OverlayTrigger>
    </div>
  );
}

export default App;
