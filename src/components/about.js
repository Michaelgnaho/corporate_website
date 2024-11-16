import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

const now = 80;
const responsive = 95;
const photoshop = 60;

export default function AppAbout() {
  return (
    <section id="about" className="block about-block animate">
      <Container fluid>
        <div className="title-holder animate">
          <h2>About Us</h2>
          <div className="subtitle animate">Learn more about us</div>
        </div>
        <Row className="animate">
          <Col sm={6} className ="animate">
            <Image src={img1}  />
          </Col>
          <Col sm={6} className ="animate">
            <p>
              Welcome to our company! We specialize in delivering high-quality web development and design solutions tailored to meet your needs. With a passion for innovation and a commitment to excellence, we ensure every project we undertake stands out. 
            </p>
            <p>
              From responsive web designs to powerful front-end development, we strive to create exceptional user experiences. Our team of experts is dedicated to turning your vision into reality, combining creativity, technical expertise, and attention to detail.
            </p>
            <div className="progress-block animate">
              <h4>HTML / CSS / JavaScript</h4>
              <ProgressBar now={now} label={`${now}%`} />
            </div>
            <div className="progress-block animate">
              <h4>Responsive Design</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block animate">
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
