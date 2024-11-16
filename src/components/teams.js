import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require("../assets/images/my_personal_headshot3.jpg"),
    fbLink: "https://web.facebook.com/?_rdc=1&_rdr",
    twitterLink: "https://x.com/MichaelGnaho",
    linkedinLink: "https://www.linkedin.com/in/michael-a-m-a-g-7b487020b/",
    name: "Michael Gnaho",
    designation: "CEO",
    description:
      "Michael is a visionary leader with a passion for innovation. He brings years of experience in business strategy and leadership to drive the company’s success.",
  },
  {
    id: 2,
    image: require("../assets/images/team2.jpg"),
    fbLink: "https://web.facebook.com/?_rdc=1&_rdr",
    twitterLink: "https://x.com/MichaelGnaho",
    linkedinLink: "https://www.linkedin.com/in/michael-a-m-a-g-7b487020b/",
    name: "David Antony",
    designation: "Manager",
    description:
      "David is a skilled manager who ensures smooth operations and effective team collaboration. His dedication to excellence keeps projects on track and clients satisfied.",
  },
  {
    id: 3,
    image: require("../assets/images/team3.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "UX Designer",
    description:
      "Nicholas is a creative UX designer who focuses on crafting intuitive and engaging user experiences. His designs combine aesthetics with functionality.",
  },
  {
    id: 4,
    image: require("../assets/images/team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "Developer",
    description:
      "Sarah is a talented developer with expertise in building scalable and robust applications. Her technical skills and attention to detail ensure high-quality results.",
  },
  {
    id: 5,
    image: require("../assets/images/team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "Sophia is a passionate developer who excels at writing clean and efficient code. She is committed to creating innovative solutions for complex challenges.",
  },
  {
    id: 6,
    image: require("../assets/images/team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "Taylor specializes in back-end development, ensuring the systems are reliable, secure, and optimized for performance. He is a problem-solver at heart.",
  },
  {
    id: 7,
    image: require("../assets/images/team7.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Content Writer",
    description:
      "Ryan is a creative content writer who crafts compelling and engaging copy. His words help communicate the brand's message effectively to the audience.",
  },
  {
    id: 8,
    image: require("../assets/images/team8.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "SEO Expert",
    description:
      "David is an experienced SEO expert who specializes in improving website visibility and driving organic traffic. His strategies are data-driven and results-oriented.",
  },
];

export default function AppTeam() {
  return (
    <section id="teams" className="block teams-block animate">
      <Container fluid>
        <div className="title-holder animate">
          <h2>Our Teams</h2>
          <p className="subtle">some of our expert</p>
        </div>
        <Row>
          {teamsData.map((team) => {
            return (
              <Col sm={3} key={team.id} className="animate">
                <div className="image animate">
                  <Image src={team.image} className="animate" />
                  <div className="overlay ">
                    <div className="socials animate">
                      <ul>
                        <li>
                          <a href={team.fbLink} className="animate">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.twitterLink} className="animate">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.linkedinLink} className="animate">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content animate">
                  <h3>{team.name}</h3>
                  <span>{team.designation}</span>
                  <p>{team.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
