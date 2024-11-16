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
];

export default function AppPricing() {
	return (
		<section id="pricing" className="block pricing-block animate">
			<Container fluid="md" className="animate">
				<div className="title-holder animate">
					<h2>Pricing & plans</h2>
					<p>check our pricing & plans</p>
				</div>
				<Row className="animate">
					{pricingData.map((pricing) => {
						return (
							<Col sm={4} key={pricing.id} className="animate">
								<div className="heading animate">
									<h3>{pricing.plan}</h3>
									<h2 children="price">{pricing.price}</h2>
								</div>

								<div className="content animate">
									<ListGroup className="animate">
										{pricing.features.map((feature, index) => {
											return (
												<ListGroup.Item key={index} className="animate">
													{feature}
												</ListGroup.Item>
											);
										})}
									</ListGroup>
								</div>

								<div className="btn-holder animate">
									<a className="btn btn-primary animate" href={pricing.link}>
										ORDER NOW!
									</a>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}
