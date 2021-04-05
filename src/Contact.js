import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card,Button,Form} from 'react-bootstrap';

function Contact(){
return(

  <div class="contactmain">

  <div class="contactcontainer1">
<div class="contactbg">
<Container>
  <Row>
    <Col sm>
<h2 >Ready to GetStarted?</h2>
    </Col>

    <Col sm>
    <Form class="bar">
        <Form.Control type="email" placeholder="Enter email" />
        </Form>
    </Col>

    <Col sm>
<Form class="bar">
    <Form.Control type="password" placeholder="Password" />
</Form>
    </Col>

    <Col sm>
    <Button class="bar" variant="primary">Primary</Button>{' '}
    </Col>

  </Row>
</Container>
</div>
</div>


<div class="contactcontainer2">

</div>
<Container>
  <Row>
    <Col xs={6}>
    <span>
        <img src="/images/logo.png" width="35px" height="35px"></img>
    <h3>AttainU</h3>
    </span>
    <p >
AttainU is a scalable college alternative, focusing on high-quality, industry-aligned learning outcomes, targeted towards highly motivated individuals looking to get into high growth careers
     </p>
     <i class="fab fa-2x fa-facebook-square" aria-hidden="true"></i>
     <i class="fab fa-2x fa-linkedin" aria-hidden="true"></i>
     <i class="fab fa-2x fa-youtube" aria-hidden="true"></i>
    </Col>

    <Col>
    <h3>Important Links</h3>
    <ul class="li" ><li><a href="/blog"><i class="fab fa-fw fa-blogger-b" aria-hidden="true"></i>Blog</a></li><li>
    <a href="https://forum.attainu.com" target="_blank">
    <i class="fab fa-fw fa-discourse" aria-hidden="true"></i>
    Forum</a></li><li><a href="/privacy" target="_blank">
    <i class="fas fa-fw fa-user-secret" aria-hidden="true"></i>Privacy Policy</a>
    </li><li>
    <a href="/terms" target="_blank"><i class="fas fa-fw fa-asterisk" aria-hidden="true">
    </i>Terms &amp; Conditions</a></li><li>
    <a href="/sitemap" target="_blank">
    <i class="fas fa-fw fa-sitemap" aria-hidden="true"></i>Sitemap</a></li></ul>
    </Col>


    <Col>
      <h3>Contact Us</h3>
    <div>For Admissions: <br/>080-47192019 <a href="mailto:admissions@attainu.com">admissions@attainu.com</a> </div>
    <div>For Hiring Partners: <br/><a href="mailto:hiringpartners@attainu.com">hiringpartners@attainu.com</a> </div>


    </Col>
  </Row>
  </Container>

</div>
)
}
export default Contact;
