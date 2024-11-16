import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
	{
	  id: 1,
	  image: require("../assets/images/blog1.jpg"),
	  time: "15 Nov 2016",
	  title: "Coffee Lovers",
	  description:
		"Discover the rich history and culture behind coffee, along with tips to brew the perfect cup every time. A must-read for all coffee enthusiasts.",
	  link: "https://www.google.com",
	},
	{
	  id: 2,
	  image: require("../assets/images/blog2.jpg"),
	  time: "10 Nov 2016",
	  title: "Tips for UI Design",
	  description:
		"Learn essential tips to create user-friendly and visually appealing UI designs that improve user experience and engagement.",
	  link: "https://www.facebook.com",
	},
	{
	  id: 3,
	  image: require("../assets/images/blog3.jpg"),
	  time: "07 Nov 2016",
	  title: "Beautiful Day",
	  description:
		"Celebrate the little joys of life with inspiring stories and moments that make every day a beautiful one to cherish.",
	  link: "https://www.twitter.com",
	},
];

export default function AppBlog() {
	return (
		<section id="blog" className="animate">
			<Container fluid className="animate">
				<Row className="animate">
					<div className="title-holder animate">
						<h2>Latest from blog</h2>
						<p>get our latest news from blog</p>
					</div>
					{blogData.map((blog) => {
						return (
							<Col key={blog.id} className="animate">
								<div className="holder animate">
									<Card className="animate">
										<Card.Img variant="top" src={blog.image} className="animate" />
										<Card.Body className="animate">
											<time className="animate">{blog.time}</time>
											<Card.Title className="animate">{blog.title}</Card.Title>
											<Card.Text className="animate">{blog.description}</Card.Text>
											<a href={blog.link} className="btn btn-primary animate">
												Read More
											</a>
										</Card.Body>
									</Card>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}
