import {Row,Col,Container} from "react-bootstrap";
import {Link} from "react-router-dom"
import React, {useEffect, useRef} from 'react';
import ReactPlayer from 'react-player';
import tcv_vid from "./tcv_video.mp4";
import glyphfig from "./Figure_8.png"
import nce_poster from "./NCE_poster.jpg"
import gscal from "./gscal_demo.mp4"
import ekn_poster from "./NCE_poster.pdf"
import aa_final from "./MATH171_Final_Project.pdf"

function Projects() {
    const playerRef = useRef(null);
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
        let selected = document.getElementById("projects")
        selected.classList.add("selected_text", "text-dark")
        console.log(selected)
    });
    return(
        <Container fluid className={"pt-4 px-5"}>
            <Row className={"justify-content-center mb-4"}>
                <Col className={"col-7"}><h1>Featured Projects</h1></Col>
                <Col className={"col-4"}></Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-5 pe-5 my-auto"}>
                    <h3>Glyph-Based Multiscale Visualization of Turbulent Multi-Physics Statistics</h3>
                    <h4>(Master's Thesis)</h4>
                    <p> Many multi-physical scientific and engineering problems involving span a wide range of physical scales. 
                        Understanding the interactions across these scales is essential for fully comprehending such complex problems. 
                        However, visualizing multivariate, multiscale data within an integrated view where correlations across space, scales, and fields are easily perceived remains challenging. 
                        To address this, we introduce a novel local spatial statistical visualization of flow fields across multiple fields and turbulence scales. 
                        Our method leverages the curvelet transform for scale decomposition of fields of interest, a level-set-restricted centroidal Voronoi tessellation to partition the spatial domain into local regions for statistical aggregation, 
                        and a set of glyph designs that combines information across scales and fields into a single, or reduced set of perceivable visual representations. 
                        Each glyph represents data aggregated within a Voronoi region and is positioned at the Voronoi site for direct visualization in a 3D view centered around flow features of interest. 
                        We implement and integrate our method into an interactive visualization system where the glyph-based technique operates in tandem with linked 3D spatial views and 2D statistical views, supporting a holistic analysis. 
                        We demonstrate with case studies visualizing turbulent combustion data--multi-scalar compressible flows--and turbulent incompressible channel flow data. 
                        This new capability enables scientists to better understand the interactions between multiple fields and length scales in turbulent flows.
                    </p>
                    <a href={"https://arxiv.org/abs/2506.23092"}>Publication</a>
                </Col>
                <Col className={"col-5 text-end"}>
                    <div>
                        <img src={glyphfig} className="img-fluid"/>
                    </div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-5 pe-5 my-auto"}>
                    <h3>Turbulent Combustion Visualization</h3>
                    <p> For my final project in Information Visualization (ECS272), a fellow classmate and I were tasked with building a visualization system
                        for visualizing a large volumetric turbulent combustion dataset to effectively show important spatial statistical features and behavior of a premixed flame.
                        Utilizing Tyson Neuroth's <a href={"https://arxiv.org/abs/2208.06970"}>voronoi decomposition method</a> as a base, we devised, then developed a web-based system that would allow users to select 2D cross sections of the data volume,
                        then hierarchically navigate the slice data by levels of visual abstraction (layer, component, cell).
                        At each level, aggregate statistics for selected cross-section elements would be displayed in the side view with the scatter plot and bar chart, allowing for focused data analysis and directed navigation.
                        In building such visualization system, we aimed to promote dataset exploration that is intuitive, accessible, and scalable for combustion scientists and analysts.
                    </p>
                    <a href={"https://github.com/kevinkaitung/Info_Vis_Final_Project"}>Project Repository</a>
                </Col>
                <Col className={"col-5 text-end"}>
                    <div>
                        <ReactPlayer ref={playerRef} url={tcv_vid} controls={true} />
                    </div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-6"}>
                <Col className={"col-5 my-auto"}>
                    <h3>Timesheets for EKN Engineering</h3>
                    <p> For my clinic project (Harvey Mudd College's senior capstone project), I colloborated with four other students and liasons from EKN Engineering
                        to re-architect “Timesheets”, EKN's own project management application. Because Timesheets was built from scratch, it suffered from a host of usability issues
                        stemming from poorly designed user interface (UI) layouts and components, significantly dampening user satisfaction and productivity among employees.
                        Hence, our goal was to improve usability by revising Timesheets' design and functionalities, then integrating those changes into the existing application.
                        Per the SCRUM development process, we regularly consulted with EKN's project managers, UI/UX designers, and technical experts to design, program and test
                        the re-architected version of Timesheets, taking advantage of tools like Figma, Jira, and Bitbucket. Per EKN's specifications, we implemented
                        custom UI components that functioned with employee's Timesheets data from EKN's employee database using Vue.js, Javascript APIs, PHP, and Laravel. Compared to the old Timesheets, our new version streamlined user interaction and greatly improved user satisfaction
                        as was supported by the user tests we conducted with EKN employees. We documented our collective progress through a statement of work report, presented the re-architected version of Timesheets to professors, students, and liasons at HMC Projects Day 2023,
                        then turned in our final deliverables and documentation to EKN Engineering.
                    </p>
                    <a href={ekn_poster}>Clinic Poster (pdf)</a>

                </Col>
                <Col className={"col-5 ps-5 text-center my-auto"}>
                    <img src={nce_poster} className="img-fluid"/>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-5 pe-5"}>
                    <h3>Gradescope Calendar</h3>
                    <p> For Harvey Mudd College's Summer StartUp Program 2022, I collaborated with two other students to conceptualize, design, and build Gradescope Calendar.
                        For context, Gradescope is an assignment submission portal that many universities, including Harvey Mudd, utilize.
                        It displays assignment due dates but only in list format, making calendar scheduling tedious and inconvenient.  We based our proposed startup product around this problem and came up with Gradescope Calendar as a solution.
                        We first conducted research to scope out potential user-bases. Then, we proposed our product to students
                        and formulated product specifications around the feedback we gathered. From there, we used Canva and UML diagrams to architect Gradescope Calendar, then developed it using React and Axios.
                        The final result is a web-application that can scrape due dates from Harvey Mudd students' Gradescope accounts then display the information as an interactive calendar and list.
                        It offers numerous functionalities that automates and aids in scheduling, with the most exciting being the Google Calendar export. These features garnered positive feedback from students and professors alike.
                    </p>
                    <a href={"https://github.com/acowe/gscal_fe_w_scraper"}>Project Repository</a>
                </Col>
                <Col className={"col-5 text-end"}>
                    <div className={"mt-5"}>
                        <ReactPlayer ref={playerRef} url={gscal} controls={true} />
                    </div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-7"}><h2>Other</h2></Col>
                <Col className={"col-4"}></Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>3D Reconstruction with OpenCV</h4>
                    <p>For my final project in Computer Vision (CS153), a classmate and I explored
                        a method for reconstructing a 3D structure from 2D images using the <a href={"https://en.wikipedia.org/wiki/Eight-point_algorithm#:~:text=The%20eight%2Dpoint%20algorithm%20is,case%20of%20the%20essential%20matrix."}>8-point algorithm</a>.
                        The results of our work is documented in this <a href={"https://github.com/acowe/hmc-cs153-8-pt-reconstruction-project"}>interactive jupyter notebook</a> where we set up a rudimentary
                        3D reconstruction set-up with the 8-point algorithm using numpy and OpenCV, explaining in depth the mathematical underpinnings behind each step of our process.
                    </p>
                </Col>
                <Col className={"col-3 text-end"}>
                    <div className={"fs-5"}></div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>Detection with Discrete Differential Geometry</h4>
                    <p>For my final project in Discrete Differential Geometry (CSMT181A), I explored the mathematical connections between image feature detection in computer vision
                        and differential exterior calculus. The results of this exploration is presented as an <a href={"https://drive.google.com/drive/folders/1IZMvUdYV0cXyQC-Pr3s2nuC0eBalVNsi?usp=sharing"}>interactive jupyter notebook</a> in
                        which I demonstrate frequently-used feature detection operations in OpenCV and their relation to differentiable k-forms seen in past DDG assignments.
                        (Note: The steps and necessary dependencies for setting up this notebook are exactly the same as the ones outlined for the 3D reconstruction nptebook above.)
                    </p>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>Systolic Array Implementation in Logisim</h4>
                    <p>For my final project in Computer Architecture (CS181ORPO),
                        I collaborated with three other students to implement a <a href={"https://arxiv.org/abs/2110.15456"}> systolic array of FAST Multipler-Accumulators</a> (fMACs)
                        in Logisim Evolution that could be integrated with a pre-built Logisim CPU, then be used to carry out matrix multiplication and other parallelized computations.
                        Documentation on the Logisim implementation I worked on is available <a href={"https://docs.google.com/document/d/1EfHkMaUY8uVQOWvP3zHO5BKNeTWEVt7uUIl12FaF6u4/edit?usp=sharing"}>here</a>.
                        Additional details and outcomes on this project are mentioned in the "Systolic Array" section of this <a href={"https://drive.google.com/file/d/1qARpV5bq5lHYargQTcjDltOVedSHyYpW/view"}>publication</a> I recently co-authored.
                    </p>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>Applications of Abstract Algbera in Computational Concurrency</h4>
                    <p>For my final project in Abstract Algebra (MATH171), I explored two algebras utilized in concurrent computing:
                        the algebra of communicating processes (ACP) and thread algebra. Based on this exploration. I wrote an analytical <a href={aa_final}>piece</a> describing each algebra and their operations,
                        the type of <a href={"https://en.wikipedia.org/wiki/Outline_of_algebraic_structures#Types_of_algebraic_structures"}>algebraic structures</a> they could be categorized as, and the implications that categorization had on the algebra's utility in scheduling concurrent processes.</p>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>Lambda Calculus Visualization</h4>
                    <p>For my final project in Programming Languages (CS131), I devised a visual representation of lambda calculus,
                        Lambdras, anthropomorphized lambda calculus expressions whose name aptly comes from the combination of "lamda" and "hydra".
                        I designed them as silly hydra-like creatures such with the hope of engaging learners of all ages in lambda calculus, especially in carrying out
                        complicated beta reductions. Unfortunately, the project repository has become unavailable but the video is still
                        available <a href={"https://drive.google.com/file/d/16-ujMIWzXAGdUjiXPvZ2Lb6qyuw_YoNy/view?usp=sharing"}>here</a>, explaining what lamdras are
                        and how they behave with each other during beta reduction operations.
                    </p>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-3"}>
                <Col className={"col-10"}>
                    <h4>Gradio - An Academic Planning Application</h4>
                    <h6>(Not to be confused with the Python package of the same <a href={"https://www.gradio.app/"}>name</a>)</h6>
                    <p> For my semester-long Software Engineering (CS181AA) project, I collaborated with two other students to create Gradio,
                       a web-application similar to Gradescope Calendar in that it would scrape information about assignments, deadlines, and grades from various
                        academic sites used by Harvey Mudd students, like Gradescope and Sakai, then display a schedule that would help students to
                        prioritize and manage assignments and grades. Utilizing the <a href={"https://asana.com/resources/agile-methodology"}>Agile</a> methodology of project development, we regularly came together to plan, architect,
                        and build Gradio, extensively documenting, then submitting our progress to our professor as weekly deliverables for each phase of the project.
                    </p>
                </Col>
                <Col className={"col-3 text-end"}>
                    <div className={"fs-5"}></div>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <Col className={"col-10"}>
                    <h4>To-Do List Application</h4>
                    <p>In my Interaction Design course (CS124) I collaborated with another student to develop a to-do list web-application over the course of a semester.
                        We started off with a series of static HTML and CSS pages, then gradually incorporated JavaScript and the React.js framework to provide the expected
                        functionality. Towards the end, we integrated Google Firebase into our application which allowed us to authenticate users and share to-do lists with different
                        authenticated users. The repository with the final application and screenshots is available <a href={"https://github.com/acowe/cs124/tree/lab5"}>here</a>.</p>
                </Col>
            </Row>




        </Container>
    )
}
export default Projects