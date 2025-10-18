import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import myFace from "./my_face.jpeg";
import myFace2 from "./my_face.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AboutMe from "./AboutMe";
import {useEffect} from "react";
import "./App.css"


function Home(){
    useEffect(() => {
        let tabs= document.getElementsByClassName("nav-custom")
        console.log(tabs)
        for (let t of tabs){
            t.classList.remove("selected_text", "text-secondary")
        }
    });
    return (
        <Container fluid className={"p-0"}>
            <Row className={"justify-content-center pt-4 mb-5"}>
                <Col className={"col-6 my-auto"}>
                    <h1 className={"mb-3"}>Hello!</h1>
                    <p className={"fs-2 lead"}> I'm Arisa Cowe, a third-year PhD student at
                        UC Davis and a graduate from Harvey Mudd College with a passion for computer science,
                        mathematics, and art.
                    </p>
                    <p className={"fs-4 lead mb-5"}>
                        This site serves as a showcase of my collective work in academia, programming, and illustration.
                        Feel free to check out the pages above to see what I have been up to!
                    </p>
                </Col>
                <Col className={"col-4 my-auto text-end"}>
                    <img src={myFace} alt="" className="img-fluid" style={{width: "325px"}}/>
                </Col>
            </Row>
            <AboutMe/>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-5 my-auto"}>
                    <p className={"fs-4 mb-2"}>Reach out here!</p>
                    <div>
                        <FaEnvelope /> arcowe12@gmail.com
                    </div>
                    <div className={"d-flex align-items-center mb-0"}>
                        <FaLinkedin />
                        <a className={"ps-1 sm_links"} href={"https://www.linkedin.com/in/arisa-cowe-68a699229"}>
                        LinkedIn</a>
                    </div>
                    <div>
                        <FaGithub />
                        <a className={"ps-1 sm_links"} href={"https://github.com/acowe"}>GitHub</a>
                    </div>
                </Col>
                <Col className={"col-5 text-end"}>
                </Col>
            </Row>


        </Container>
    )
}
export default Home
