import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function AppContact() {
	return <section id= "contact" className='block contact-block'>
	<Container fluid>
	<div className='title-holder'>
		<h3>Contact us</h3>
		<p>get connected with us</p>
	</div>
        <Form className='contact-form'>
      <Row>
        <Col sm={4}>
          <Form.Control type='text' placeholder="Enter your fullname" required />
        </Col>
        <Col sm={4}>
          <Form.Control type='email' placeholder="Enter your email" required />
        </Col>
		<Col sm={4}>
          <Form.Control type='email' placeholder="Enter contact phone number" required />
        </Col>
      </Row>

	  <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
    </Form>
	
    </Container>
	<div className='google-map'>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631059143!2d3.11914082495672!3d6.548369374447861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1718785878425!5m2!1sen!2sng"
	  allowFullScreen="" 
	  loading="lazy" 
	  referrerPolicy="no-referrer-when-downgrade" 
	  title='Lagos, Nigeria Map'></iframe>
	</div>
	<Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              gnahomichael@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +2348145046894
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Lagos, Nigeria
            </li>
          </ul>
        </div>
      </Container>

	
	</section>
	
}