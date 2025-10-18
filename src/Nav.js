import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import {Col, Row} from "react-bootstrap";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";
//<Nav.Link href="#home">CV</Nav.Link>
//onClick={(e) => handleClick(e, "projects")}

function handleClick(e, tab){
    let tabs = document.getElementsByClassName("nav-custom")
    for (let t of tabs){
        t.classList.remove("selected_text")
    }
    console.log(tabs)
    let selected = document.getElementById(tab)
    selected.classList.add("selected_text")
    console.log(selected)
}
function NavBar() {
    let [selectPage, setSelectPage] = useState("none")
    return (
        <Row className={"text-center justify-content-center pt-2 nav-custom"}>
            <Col className={"col-4 my-auto"}>
                <Container>
                    <Row>
                        <Col>
                            <Link id={"academia"} to={"/academia"} className={"nav-custom tab"}>
                                Academia
                            </Link>
                        </Col>
                        <Col>
                            <Link id={"projects"} to={"/projects"} className={"nav-custom tab"}>
                                Projects
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col className={"col-3 pt-3"}>
                <Link id={"nav_header"} to={"/"} className={"nav-custom"}
                ><h2>Arisa Cowe</h2></Link>
                <p className={"text-secondary"} style={{"font-size": "13px"}}>Comp Sci • Math • Illustration</p>
            </Col>
            <Col className={"col-4 my-auto"}>
                <Container>
                    <Row>
                        <Col>
                            <Link id={"illustrations"} to={"/illustrations"} className={"nav-custom tab"}>
                                Gallery
                            </Link>
                            
                        </Col>
                        <Col>
                            <Link id={"algomations"} to={"/algomations"} className={"nav-custom tab"}>
                                Other
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default NavBar;