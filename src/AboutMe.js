import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import myFace from "./my_face.jpeg";

function AboutMe(){
    return (
        <Row className={"justify-content-center"}>
            <Col className={"col-10"}>
                <div className={"fs-5 fw-normal"}>
                    <h2 className={"mb-3"}>More About Me</h2>
                    <p>
                        As someone who's passionate about all things visual and interactive, I'm particularly interested in using data science and analytics to uncover insights and communicate them through intuitive, engaging visual experiences. My interests span: </p>
                    <ul>
                        <li>Data science and analytics</li>
                        <li>Scientific and information visualization</li>
                        <li>Human-computer interaction</li>
                        <li>Computer graphics</li>
                        <li>UI/UX design and development</li>
                    </ul>
                    <p>
                        Throughout my academic career, I've developed applications and conducted research focused on making complex information more accessible and understandable. My work has ranged from visualizing volumetric simulations to building interactive tools, with research spanning scientific visualization, differentiable rendering, and computer architecture education.
                        Looking ahead, I hope to continue exploring data science, analytics, and visualization while developing interactive systems that transform complex data into meaningful insights and experiences.
                    </p>
                    <p className={"mb-4"}>Outside of computing, I enjoy drawing as well as immersing myself in video games, graphic novels, and animated series/works from other independent creators.</p>
                </div>
            </Col>
        </Row>
    )
}
export default AboutMe
