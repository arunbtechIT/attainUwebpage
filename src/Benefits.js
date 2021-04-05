import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';

function Benefits(){
  return(
    <div  class="Benefitwrapper ">

  <div class="Benefitcontent">  <h1>How Does Attain Help U?</h1></div>
    <p >With AttainU you can completely re-write your career. No prior coding knowledge needed. Only willingness to put in efforts is required. Learn in-depth Software Development besides interview preparation. We prioritize on teaching excellence above all else.</p>

    <Container>
    <Row>
        <Col sm>
<div class="benefitwrapper"><div class=" benefitcss"><img src="/images/college.svg" class="benefitimage"></img></div><h3>Out of 90 lakhs only 15% get direct jobs rest are unemployed</h3></div>
        </Col>
        <Col sm>
<div class="benefitwrapper"><div class=" benefitcss"><img src="/images/internet.svg" class="benefitimage"></img></div><h3>Out of 90 lakhs only 15% get direct jobs rest are unemployed</h3></div>
        </Col>
        <Col sm>
<div class="benefitwrapper"><div class=" benefitcss"><img src="/images/offline.svg" class="benefitimage"></img></div><h3>Out of 90 lakhs only 15% get direct jobs rest are unemployed</h3></div>
        </Col>
      </Row>
    </Container>
    </div>





  )
}
export default Benefits;
