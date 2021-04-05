import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card,Button} from 'react-bootstrap';

function Fee(){
  return(
    <div class="feesection">
    <div class="sectionhead">
    <h1>Fee Payment Options</h1>
    </div>
    <Container>
    <Row>
    <Col sm>
    </Col>
    <Col sm>
    <Card  align="center" style={{ width: '18rem' }}>
  <i align="center" class="fas fa-dollar-sign fa-7x"></i>
  <Card.Body>
    <Card.Title>Option1</Card.Title>
    <Card.Text>
        <div class="n"><h2>2,60,000/-</h2></div>
    </Card.Text>
    <Button variant="primary">Pay After Placement</Button>
  </Card.Body>
</Card>
    </Col>
    <Col sm>
    <Card align="center" style={{ width: '18rem' }}>
  <i align="center" class="fas fa-money-check fa-7x"></i>
  <Card.Body>
    <Card.Title>Option2</Card.Title>
    <Card.Text>
      <div class="n"><h2>1,00,000/-</h2></div>
    </Card.Text>
    <Button variant="primary">Upfront Fee Payment</Button>
  </Card.Body>
</Card>
</Col>
    <Col sm>
    </Col>

  </Row>
</Container>
</div>
  )
}
export default Fee;
