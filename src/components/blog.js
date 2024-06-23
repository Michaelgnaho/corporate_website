import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const blogData = [
	{
	  id: 1,
	  image: require('../assets/images/blog1.jpg'),
	  time: '15 Nov 2016',
	  title: 'Coffee Lovers',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
	  link: 'https://www.google.com'
	},
	{
	  id: 2,
	  image: require('../assets/images/blog2.jpg'),
	  time: '10 Nov 2016',
	  title: 'Tips for UI Design',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
	  link: 'https://www.facebook.com'
	},
	{
	  id: 3,
	  image: require('../assets/images/blog3.jpg'),
	  time: '07 Nov 2016',
	  title: 'Beautiful Day',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
	  link: 'https://www.twitter.com'
	}
  ]
export default function  AppBlog() {
	return (
		<section id='blog' >
			   <Container fluid>
			  
		
      <Row>
	  
	  <div className='title-holder'>
				<h2>Latest from blog</h2>
				<p>get our latest news from blog</p>
			   </div>
	  {blogData.map(blog => {
		return (
			<Col key={blog.id}>
		<div className='holder'>
		<Card >
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
	  <time>{blog.time}</time>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.description}
        </Card.Text>
        <a href={blog.link} className='btn btn-primary'>ReadMore</a>
      </Card.Body>
    </Card>


		</div>

		</Col>

		);

	  })}
        
      </Row>
    			</Container>
		</section>
	)
	
}