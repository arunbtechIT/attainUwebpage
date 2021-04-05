import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Button} from 'react-bootstrap';
function Caro(){
  return (
    <div>

    <div class="sectionhead">
    <h1>Placement Offerinf at Attain U</h1>
    </div>
    <div class="carouselcontent">

    <Carousel>
  <Carousel.Item >
  <div><h2 class="location"> <span>Pune</span></h2><div class="other-details"><div class="bg"><i class="fas fa-laptop-code" aria-hidden="true"></i><span>Non Coding Background</span></div><div class="clg"><i class="fas fa-school" aria-hidden="true"></i><span>College Completed</span></div></div><h4 >ANKIT VERMA</h4><h4>Red Panda</h4></div>
  </Carousel.Item>
  <Carousel.Item>
   <div><h2 class="location"> <span>Pune</span></h2><div class="other-details"><div class="bg"><i class="fas fa-laptop-code" aria-hidden="true"></i><span>Non Coding Background</span></div><div class="clg"><i class="fas fa-school" aria-hidden="true"></i><span>College Completed</span></div></div><h4 >ANKIT VERMA</h4><h4>Red Panda</h4></div>
  </Carousel.Item>
  <Carousel.Item>
<div><h2 class="location"> <span>Pune</span></h2><div class="other-details"><div class="bg"><i class="fas fa-laptop-code" aria-hidden="true"></i><span>Non Coding Background</span></div><div class="clg"><i class="fas fa-school" aria-hidden="true"></i><span>College Completed</span></div></div><h4 >ANKIT VERMA</h4><h4>Red Panda</h4></div>
  </Carousel.Item>
</Carousel>


<div align="center" class="carouselbutton"><Button variant="warning" size="lg">
      Apply Now
    </Button>{' '}</div>
</div>



  </div>
  );




}
export default Caro;
