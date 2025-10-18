import {Container, Row, Col} from "react-bootstrap";
import {useEffect} from "react";
import { FaYoutube } from "react-icons/fa";
import rodolph from "./rodolph.jpg"
import myFace from "./my_face.jpeg";

function Algomations(){
    useEffect(() => {
        let tabs= document.getElementsByClassName("nav-custom")
        for (let t of tabs){
            t.classList.remove("selected_text", "text-secondary", "text-dark")
            if(t.id !== "nav_header"){
                console.log(t.id)
                t.classList.add("text-secondary")
            }
            else{
                t.classList.add("text-dark")
            }
        }
        let selected = document.getElementById("algomations")
        selected.classList.add("selected_text", "text-dark")
        console.log(selected)
    });
    return (
        <Container fluid className={"p-0"}>
            <Row className={"justify-content-center px-5 pt-5 mb-5"}>
                <Col className={"col-4"}>
                <h1 class={"text-center"}> Miscellanea </h1>
                </Col>
            </Row>
            <Row className={"justify-content-center pt-4 mb-5"}>
                <Col className={"col-4 my-auto"}>
                    <img src={rodolph} alt="" className="img-fluid" style={{width: "500px"}}/>
                </Col>
                <Col className={"col-6 my-auto"}>
                    <h2 className={"mb-3"}>[DEFUNCT] Algomations</h2>
                    <p className={"fs-2 lead"}>
                        A YouTube channel dedicated to teaching computer science and math through animated videos.
                    </p>
                    <p className={"fs-5 fw-normal mb-3"}>
                        This channel primarily hosts the "Algomations" series, a collection of videos on algorithms,
                        but also offers short animations on other topics.
                    </p>
                    <span className={"d-flex align-items-center mb-4"}>
                        <FaYoutube size={25} />
                        <a className={"fs-5 ps-1"} href={"https://www.youtube.com/channel/UCp86BHgrNuCsIVAmkiuEeXg"}>Link to channel</a>
                    </span>
                    <h3>Why Algomations?</h3>
                    <p className={"fs-5 fw-normal"}>
                        Since I was young, I've enjoyed learning about various STEM topics through online media like Wikipedia and YouTube.
                        I was particularly drawn to math and, then, computer science when I became interested in programming.
                        In watching videos like those of 3Blue1Brown or Vsauce, I saw the creativity and imagination inherent in math and computer science.
                        However, many other online resources on CS topics have an overwhelming amount of text, code, and static diagrams
                        that can be hard to follow. This made me wonder: "Why can't these resources be a bit more animated? Motivated by this,
                        Algomations was created and released its first video in June 2023. While only a few videos have been released since then,
                        I hope to make more videos that aid in creative learning, like the ones I have watched thus far.
                    </p>

                </Col>

            </Row>



        </Container>
    )
}
export default Algomations
