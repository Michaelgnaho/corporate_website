import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
	{
	  id: 1,
	  name: "John Wills",
	  description:
		"The team exceeded our expectations by delivering a beautifully designed and highly functional website. Their attention to detail and commitment to quality made a huge difference. Highly recommend!",
	  designation: "Manager",
	},
	{
	  id: 2,
	  name: "Jasmine Perry",
	  description:
		"Working with this team has been an incredible experience. They were responsive, professional, and brought our vision to life seamlessly. Our business has grown significantly since the launch of our new platform.",
	  designation: "Accountant",
	},
	{
	  id: 3,
	  name: "Rocky Johnson",
	  description:
		"Exceptional service from start to finish. Their expertise and innovative approach helped us stand out in a competitive market. We are thrilled with the results and look forward to future collaborations.",
	  designation: "CEO",
	},
];

export default function AppTestimonials() {
	return (
		<section id="testimonials" className="testimonials-block animate">
			<Container fluid>
				<div className="title-holder animate">
					<h3>Client testimonials</h3>
					<div className="subtitle animate">what client says about us</div>
				</div>

				<Carousel controls={false} className="animate">
					{testimonialsData.map(testimonial => {
						return (
							<Carousel.Item key={testimonial.id} className="animate">
								<blockquote className="animate">
									<p>{testimonial.description}</p>
									<cite className="animate">
										<span className="name animate">{testimonial.name}</span>
										<span className="designation animate">{testimonial.designation}</span>
									</cite>
								</blockquote>
							</Carousel.Item>
						)
					})}
				</Carousel>
			</Container>
		</section>
	)
}
