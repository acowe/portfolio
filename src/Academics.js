import React, { useState, useEffect } from 'react';
import {Row,Col,Container} from "react-bootstrap";
import sparseMat from "./sparse-matrix.png"
import iscaLogo from "./ISCA_2023.png"
import vsrPic from "./cybervsr_photo.png"
import vidiLogo from "./vidi_logo.png"


function Academics(){
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
        let selected = document.getElementById("academia")
        selected.classList.add("selected_text", "text-dark")
        console.log(selected)
    });

    return(
        <Container fluid className={"pt-4 px-5"}>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-7"}><h1>Education</h1></Col>
                <Col className={"col-4"}></Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-7"}>
                    <h4>PhD of Computer Science (with Master’s) </h4>
                    <h6>University of California, Davis - Davis, CA</h6>
                </Col>
                <Col className={"col-3 text-end"}>
                  <div className={"fs-5"}>June 2027</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-7"}>
                    <h4>Bachelor of Science in Joint Computer Science and Mathematics</h4>
                    <h6>Harvey Mudd College - Claremont, CA</h6>
                    <div className={"fs-6"}>Graduated with distinction and honors in computer science. </div>
                </Col>
                <Col className={"col-3 text-end"}>
                    <div className={"fs-5"}>May 2023</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-7"}>
                    <h1>Research</h1>
                </Col>
                <Col className={"col-4"}>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-6"}>
                    <h4>Visualization and Interaction Design Innovation (VIDi) Labs Research at UC Davis</h4>
                    <h6 className={""}>Davis, CA</h6>
                </Col>
                <Col className={"col-4 text-end"}>
                    <div className={"fs-5"}>September 2023 - Current</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-4"}>
                <Col className={"col-6"}>
                    <p>I am doing research on and developing scientific visualizations as a graduate student researcher. Under the guidance of Professor Kwan-Liu Ma, senior VIDi students, and other scientists, I aim to develop interactive visualization systems for a variety of scientific applications.
                        The topics I am currently working in are differentiable volume rendering and turbulence visualization.
                        I co-developed and recently authored the visualization for the ArXiV publication “Glyph-Based Multiscale Visualization of Turbulent Multi-Physics Statistics” (2025) in collaboration with another VIDi student and turbulence scientists from Sandia National Laboratories and University of Houston.
                    </p>
                    <p>Relevant Links</p>
                    <ul>
                        <li>
                           <a href={"https://vidi.cs.ucdavis.edu/"}>VIDI Labs</a>
                        </li>
                        <li>
                            <a href={"https://arxiv.org/abs/2506.23092"}>Publication</a>
                        </li>
                    </ul>
                </Col>
                <Col className={"col-4 text-end"}>
                    <img src={vidiLogo} className="img-fluid"/>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-6"}>
                    <h4>Architectural and Algorithmic Acceleration Lab (ARCALA) Research at Pomona College</h4>
                    <h6 className={""}>Claremont, CA</h6>
                </Col>
                <Col className={"col-4 text-end"}>
                    <div className={"fs-5"}>May - August 2023</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-4"}>
                <Col className={"col-6"}>
                    <p>I worked as a research assistant under the guidance of Professor Thomas Yeh of UC Irvine (formerly Pomona College)
                        where I, along with several other students, assisted him in his research on computer architecture and machine learning.
                        In the first 2-3 weeks of the program, I co-authored Yeh's “Visualization with Experiential Learning to Encourage Participation and Research in Computer Architecture”, which discusses a
                        curriculum for teaching advanced computer architecture concepts to beginner students using Logisim Evolution. This paper was presented at the Workshop on Computer Architecture Education (WCAE) in Orlando, Florida on June 2023 and accepted into the Journal of the Association for Computing Machinery (ACM).
                        For the remainder of the program, I helped run experiments for Yeh's research on optimizing machine learning architecture. There, I tested various configurations of pruning and quantization across multiple
                        machine learning architectures and datasets using PyTorch, compiling and analyzing the resultant data on remaining network weight and inference accuracy.
                    </p>
                    <p>Relevant Links</p>
                    <ul>
                        <li>
                            <a href={"https://www.csc2.ncsu.edu/faculty/efg/people/www/wcae2023.html"}>WCAE 2023</a>
                        </li>
                        <li>
                            <a href={"https://github.com/Arcala-Research-Lab"}>ARCALA GitHub</a>
                        </li>
                        <li>
                            <a href={"https://dl.acm.org/doi/10.1145/3605507.3610630"}>Publication</a>
                        </li>
                    </ul>
                </Col>
                <Col className={"col-4 text-end"}>
                    <img src={iscaLogo} className="img-fluid"/>
                    <img src={sparseMat} className="img-fluid"/>

                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-6"}>
                    <h4> Cybersecurity Visiting Research (CyberVSR) at Rochester Institute of Technology </h4>
                    <h6 className={"mt-0"}>Rochester, NY</h6>
                </Col>
                <Col className={"col-4 text-end"}>
                    <div className={"fs-5"}>June - August 2020</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-6"}>
                    <p> I participated in RIT's CyberVSR summer program as an undergraduate student researcher under the guidance of Professor Matthew Wright, where I learned about, then
                        performed dynamic analysis using Cuckoo Sandbox, an open source malware analysis system. Using Cuckoo Sandbox,
                        I analyzed the behavior of malicious executable files using within a Virtualbox VM, which returned the results as a JSON summary outlining the likelihood of
                        a given file being malware and the behavior/activity that points to it being so. At the end of the program, I presented results of research and analysis to other fellow participants.
                        Along the way, I participated in multiple academic discussions led by other CyberVSR faculty and graduate students, where they presented on their work in various
                        cybersecurity topics such as reverse code obfuscation for static analysis of malware.
                    </p>
                    <p>Relevant Links</p>
                    <ul>
                        <li>
                            <a href={"https://www.rit.edu/cybersecurity/cybervsr_2020"}>CyberVSR 2020</a>
                        </li>
                        <li>
                            <a href={"https://cuckoosandbox.org/"}>Cuckoo Sandbox</a>
                        </li>
                    </ul>
                </Col>
                <Col className={"col-4 text-center"}>
                    <img src={vsrPic} className="img-fluid"/>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-7"}>
                    <h1>Publications</h1>
                </Col>
                <Col className={"col-4"}>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <div> Arisa Cowe, Tyson Neuroth, Qi Wu, Martin Rieth, Jacqueline Chen, Myoungkyu Lee, Kwan-Liu Ma. 2025.
                         Glyph-Based Multiscale Visualization of Turbulent Multi-Physics Statistics. <i>arXiv [cs.GR]</i> </div>
                </Col>
            </Row>
             <Row className={"justify-content-center mb-5"}>
                <Col className={"col-10"}>
                    <div>Thomas Y. Yeh, Maxwell Sterner, Carl Bell, and Arisa Cowe. 2023.
                        Visualization with Experiential Learning to Encourage Participation
                        and Research in Computer Architecture. In <i>Proceedings of Workshop
                        on Computer Architecture Education (WCAE ’23)</i>. ACM,
                        New York, NY, USA, 9 pages. (DOI: 10.1145/3605507.3610630) </div>
                </Col>
            </Row>


        </Container>

    )
}
export default Academics