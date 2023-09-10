import { Col, Container, Row, Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid className="p-0">
            <div className="video-container">
                <video className='videoTag' autoPlay loop muted width="100%" style={{objectFit: "cover", filter: "brightness(50%)"}}>
                    <source src="img/promo reel.mov" type='video/mp4' width="100%" />
                </video>
                <div className="overlay text-center text-white">
                    {/* <img src="img/logo-white.png" className="img-fluid" alt="Yale Skateboarding Logo" width="70%" /> */}
                    <h1 className="display-4">Yale Skateboarding</h1>
                    {/* <h5 className="display-7">Join</h5> */}
                </div>
            </div>
        </Container>
    );
};

export default Home;
