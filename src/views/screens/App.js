import {Container, Row, Tab, Tabs} from 'react-bootstrap';
import Bin2Dec from '../forms/Bin2Dec';
import Dec2Bin from '../forms/Dec2Bin';
import IPCalc from '../forms/IPcalc';


function App() {
  return (
    <Container>
      <Row>
        &nbsp;
      </Row>


      <Tabs
      defaultActiveKey="bin2dec"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
      >
        <Tab eventKey="bin2dec" title="Bin2Dec">
          <Container>
            <Bin2Dec />
          </Container>
        </Tab>

        <Tab eventKey="dec2bin" title="Dec2Bin">
          <Container>
            <Dec2Bin />
          </Container>
        </Tab>

        <Tab eventKey="ipcalc" title="IPCalc">
          <Container>
            <IPCalc />
          </Container>
        </Tab>
        
      </Tabs>
      
    </Container>
  );
}

export default App;
