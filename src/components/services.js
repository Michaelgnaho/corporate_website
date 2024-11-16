import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "Our designs adapt seamlessly to any screen size, ensuring an optimal user experience on mobile, tablet, and desktop devices.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "We craft visually stunning designs that captivate your audience and leave a lasting impression, tailored to your brand's identity.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Boost your online visibility with our SEO-friendly designs, engineered to rank higher and attract more organic traffic.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Enjoy crystal-clear visuals on all high-resolution screens with our retina-ready designs, offering unmatched clarity and detail.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Browser Compatibility",
    description:
      "Our solutions are tested across all major browsers to ensure consistency and flawless performance for every user.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "We provide dedicated support to address your queries and ensure the smooth functioning of your project at all times.",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block animate">
      <Container fluid>
        <div className="title-holder animate">
          <h2>Our Services</h2>
          <div className="subtitle animate">- services we provide -</div>
        </div>

        <Row>
          {servicesData.map((service) => {
            return (
              <Col sm={4} className="holder animate" key={service.id}>
                <div className="icon animate">
                  <i className={service.icon}></i>
                </div>
                <div className="animate">
                  <h4>{service.title}</h4>
                </div>
                <div className="animate">
                  <p>{service.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
