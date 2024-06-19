import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
	{
	  id: 1,
	  plan: 'Basic',
	  price: '£49',
	  features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
	  link: 'https://www.google.com'
	},
	{
	  id: 2,
	  plan: 'Premium',
	  price: '£149',
	  features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
	  link: 'https://www.facebook.com'
	},
	{
	  id: 3,
	  plan: 'Ultimate',
	  price: '£349',
	  features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
	  link: 'https://www.twitter.com'
	}
  ]


export default function  AppPricing() {

	return <section id = "pricing" className="block pricing-block"> 
	<Container fluid="md">
	<div className='title-holder'>
	<h2> Pricing & plans </h2>
	<p> check our pricing & plans </p>
	</div>
	<Row>

	{pricingData.map(pricing => {

		return(
			<Col sm= {4} key={pricing.id}>
	  <div className='heading'>
	  <h3>{pricing.plan}</h3>
	  <h2 children ="price">{pricing.price}</h2>
	  </div>

	  <div className='content'> 
	  <ListGroup>
	  {pricing.features.map((index, feature) => {
		return <ListGroup.Item key={index}>{feature}</ListGroup.Item>
	  } )}
    </ListGroup>

	  </div>
	  <div className='btn-holder'>
		<a className='btn btn-primary' href={pricing.link}>ORDER NOW!</a>
	  </div>

	  
	  </Col>

		)
	})}
	 
	</Row>
  </Container>
  </section>
	
}