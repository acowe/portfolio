import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
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
                    <h4>Master of Science in Computer Science</h4>
                    <h6>University of California, Davis - Davis, CA</h6>
                </Col>
                <Col className={"col-3 text-end"}>
                  <div className={"fs-5"}>June 2026</div>
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
                    <h1>Publications</h1>
                </Col>
                <Col className={"col-4"}>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10 fs-5"}>
                    <p><b>Cowe, A.</b>, Neuroth, T., Wu, Q., Rieth, M., Chen, J., Lee, M. and Ma, K.-L. (2026), Glyph-Based Multi-Scale Visualization of Spatial Turbulent Multi-Physics Statistics. In <i>Computer Graphics Forum (Electronic Issue e70399)</i>. DOI: 10.1111/cgf.70399</p>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-10 fs-5"}>
                    <p>Yeh, T., Sterner M., Bell C., and <b>Cowe, A.</b> (2023). Visualization with Experiential Learning to Encourage Participation and Research in Computer Architecture. In <i>Proceedings of Workshop on Computer Architecture Education (WCAE ’23)</i>. ACM, New York, NY, USA, 9 pages. DOI: 10.1145/3605507.3610630 </p>
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
                    <h4>Digital Fabrication Research at UC Davis</h4>
                    <h6 className={""}>Davis, CA</h6>
                </Col>
                <Col className={"col-4 text-end"}>
                    <div className={"fs-5"}>August - September 2026</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-4"}>
                <Col className={"col-10"}>
                    <p>As a graduate student research assistant under the guidance of Professor Julian Panetta at UC Davis, I supported his research on developing computational design tools for 3D-printable engineered materials.
                    Using VoxelFEM-based simulations, we explored how a structure composed of microstructure tiles behaves as the tiling grid size increases, with respect to boundary conditions, gravity, and applied forces. 
                    We wanted to understand how the top-middle tile behaves across grid sizes to develop a generalizable periodic tile that could be used as a stand-in for simulating these larger structures, which would reduce computational overhead. 
                    For this exploration, we set up microstructure tiling experiments, running simulations to compute the elastic energy and displacement in the structures with different tiling grid sizes, boundary conditions, and material densities. 
                    The results were then visualized using an <Link id={"projects"} to={"/projects"}>interactive python notebook</Link>, revealing how global boundary conditions affect the displacement and energy in the top-middle tile, and introduced a significant consideration that was unaccounted for prior in developing the generalizable tile.
                    </p>
                    <p>Relevant Links</p>
                    <ul>
                        <li>
                           <a href={"https://julianpanetta.com/"}>Julian Panetta's Website</a>
                        </li>
                        <li>
                            <a href={"https://github.com/MeshFEM/VoxelFEM"}>VoxelFEM Repository</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-6"}>
                    <h4>Visualization and Interaction Design Innovation (VIDi) Labs Research at UC Davis</h4>
                    <h6 className={""}>Davis, CA</h6>
                </Col>
                <Col className={"col-4 text-end"}>
                    <div className={"fs-5"}>September 2023 - June 2026</div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-4"}>
                <Col className={"col-6"}>
                    <p>I conducted research in scientific visualization as a graduate student researcher in the Visualization and Interface Design Innovation (VIDi) Lab at UC Davis under the guidance of Professor Kwan-Liu Ma. My work focused on developing interactive visualization systems for scientific applications, with emphasis on turbulent flow visualization.
                        There, I authored “Glyph-Based Multiscale Visualization of Turbulent Multi-Physics Statistics” (2025), developed in collaboration with VIDi researchers and turbulence scientists from Sandia National Laboratories and the University of Houston. This work explored multiscale visualization techniques for analyzing complex turbulent datasets.
                    </p>
                    <p>Relevant Links</p>
                    <ul>
                        <li>
                           <a href={"https://vidi.cs.ucdavis.edu/"}>VIDI Labs</a>
                        </li>
                        <li>
                            <a href={"https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.70399"}>Publication</a>
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
            


        </Container>

    )
}
export default Academics