import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';

function CourseHights(){
return(
<div>

<div class="sectionhead">
<h1>Course High Lights</h1>
</div>
<div class="highlightcontainer">
<Container>
<Row>
  <Col sm>
  <div class="highlightwrapper">
  <div><img class="imgwrapper" src="/images/hourglass.svg"></img></div>
  <p class="hightlightcontent">
  <div class="n"><h2>10</h2></div>
   <br></br>Months Long <br></br>
   Evening Classes<br></br>
   Mon - Fri (6pm to 11pm)</p>
   </div>
  </Col>
  <Col sm>
  <div class="highlightwrapper">
  <div><img class="imgwrapper" src="/images/software.svg"></img></div>
  <p class="hightlightcontent">
  <div class="n"><h2>3</h2></div>
   <br></br>Industry <br></br>
   Relevant Projects<br></br>
   </p>
   </div>
  </Col>
  <Col sm>
  <div class="highlightwrapper">
  <div><img class="imgwrapper" src="/images/interview.svg"></img></div>
  <p class="hightlightcontent">
  <div class="n"><h2>13</h2></div>
   <br></br>Peer based <br></br>
   Mock Interviews<br></br>
   </p>
   </div>
  </Col>
  <Col sm>
  <div class="highlightwrapper">
  <div><img class="imgwrapper" src="/images/test.svg"></img></div>
  <p class="hightlightcontent">
  <div class="n"><h2>19</h2></div>
   <br></br>Placement <br></br>
   Preparation<br></br>
   Tasks</p>
   </div>
  </Col>
</Row>
</Container>
</div>
</div>


)
}
export default CourseHights;
