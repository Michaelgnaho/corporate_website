import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Lonely Path",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/images/img3.jpg"),
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/images/img4.jpg"),
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/images/img5.jpg"),
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/images/img6.jpg"),
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/images/img7.jpg"),
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../assets/images/img8.jpg"),
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../assets/images/img9.jpg"),
    title: "Appreciation",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Happy Days",
    subtitle: "Web Design",
  },
];

export default function AppWorks(params) {
  return (
    <section id="works" className="block works-block animate">
      <Container fluid>
        <div className="title-holder animate">
          <h2>Our works</h2>
          <div>our awesome works</div>
        </div>
        <Row className="portfoliolist animate">
          {worksData.map((work) => {
            return (
              <Col sm={4} key={work.id} className="animate">
                <div className="portfolio-wrapper animate">
                  <a href={work.link} className="animate">
                    <Image src={work.image} className="animate" />
                    <div className="label text-center ">
                      <h3>{work.title}</h3>
                      <p>{work.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination className="animate">{items}</Pagination>
      </Container>
    </section>
  );
}
