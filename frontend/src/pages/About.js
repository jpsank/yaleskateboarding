import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <Container fluid className="px-sm-5 p-3">
            <h1>About</h1>
            <Container className="p-0">
                <Row className="no-gutters">
                    <Col xs={12} md={6}>
                        <img src="img/ecbazaar-med.jpeg" className="img-fluid" alt="Us at the EC bazaar" />
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="img/handsomedan-med.jpeg" className="img-fluid" alt="Handsome Dan" />
                    </Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12} md={6}>
                        <img src="img/jalen.jpeg" className="img-fluid" alt="Jalen" />
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="img/jalenscantlebury.jpeg" className="img-fluid" alt="Jalen at Scantlebury" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default About;
