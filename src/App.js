import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Aux from './components/header';
import {Row, Container} from "react-bootstrap";
import Body from './components/body';
import Derecha from './components/sectionRight';

function App() {
  return (
    <div className="App">
        <Aux></Aux>
        <Container className='container-cv my-2 rounded-5'>
          <Row>
          <div class="col-sm-12 col-md-4 col-lg-4 px-left-0">
            <Body></Body>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-8"> 
            <Derecha></Derecha>
          </div>
          </Row>
        </Container>
      <footer>
      </footer>
    </div>
  );
}

export default App;
