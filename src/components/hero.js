import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
var heroData = [
	{
	  id: 1,
	  image: require('../assets/images/img-hero1.jpg'),
	  title: 'The Perfect Design for Your Website',
	  description: 'Discover stunning, user-friendly designs tailored to elevate your online presence. Our innovative solutions ensure your website stands out in today’s digital world.',
	  link: 'https://www.google.com'
	},
	{
	  id: 2,
	  image: require('../assets/images/img-hero2.jpg'),
	  title: 'Start Your Future Financial Plan',
	  description: 'Take charge of your financial future with tools and strategies designed to help you save, invest, and grow. Secure a better tomorrow today.',
	  link: 'https://www.facebook.com'
	},
	{
	  id: 3,
	  image: require('../assets/images/img-hero3.jpg'),
	  title: 'Enjoy the Difference',
	  description: 'Experience a new level of innovation and excellence. Discover services that transform ordinary into extraordinary, designed just for you.',
	  link: 'https://www.twitter.com'
	}
  ];
  


export default function AppHero()
{
	return(
		<section id = "Home" className='hero-block'>
		<Carousel>
		{
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
			

		
	  </Carousel>

		</section>
		
		
	);
}