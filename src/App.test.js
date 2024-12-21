import React from 'react';
import LayoutModal from './components/LayoutModal';
import ChartComponent from './components/ChartComponent';
import WorldMap from './components/WorldMap';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <LayoutModal />
        </Col>
        <Col md={9}>
          <ChartComponent />
          <WorldMap />
        </Col>
      </Row>
    </Container>
  );
};

export default App;