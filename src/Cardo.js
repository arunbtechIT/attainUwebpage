import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Col,Row,Button} from 'react-bootstrap';

function Cardo(){
return(
  <div class="cardo">
  <Container>
  <Row>
  <Col sm>
    <Card>
  <Card.Header><div class="cardohead"><h1>1030+</h1></div></Card.Header>
  <Card.Body>
    <Card.Title><h2>Enrolled Students</h2></Card.Title>
    <Card.Text>
      <p>Over 1,00,000 Student Applications
Primary Selection Criteria - Commitment</p>
    </Card.Text>

  </Card.Body>
</Card>
  </Col>


     <Col sm>
     <Card>
  <Card.Header><div class="cardohead"><h1>185+</h1></div></Card.Header>
  <Card.Body>
    <Card.Title><h2>Placement Partners</h2></Card.Title>
    <Card.Text>
      <p>Looking for Skills over Degrees
From Early Stage to Unicorn Startups</p>
    </Card.Text>

  </Card.Body>
</Card>
     </Col>




     <Col sm>
     <Card>
  <Card.Header><div class="cardohead"><h1>390+</h1></div></Card.Header>
  <Card.Body>
    <Card.Title><h2>Absolute Beginners</h2></Card.Title>
    <Card.Text>
    <p>Beginner to Entry Level Course
Switch Career to Software Engineering</p>
    </Card.Text>

  </Card.Body>
</Card>
     </Col>
   </Row>
 </Container>
 </div>


)
}
export default Cardo;
