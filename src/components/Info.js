import React, { useContext, useEffect } from "react";
import { Context } from "../context/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import { Row, Col, Container } from "react-bootstrap";

export default function Info() {
  const { name } = useParams();
  const appContext = useContext(Context);
  const { directSubs, setDirectSubs } = appContext;

  const getDirectSubs = async (name) => {
    const data = await fetch(URL + `/${name}`).then(res => res.json());
    const directSubs = data[1] && data[1]['direct-subordinates'];
    return directSubs;
  }

  // useEffect(() => {
  //   const directSubs = await getDirectSubs(name)
  //   setDirectSubs(directSubs)
  // },[getDirectSubs,name,setDirectSubs]);

  // console.log(directSubs)

  return (
    <Container>
      <Row style={{ paddingTop: '5em' }}>
        <Link to="/">
          <FontAwesomeIcon style={{ color: 'grey' }} size="lg" icon={faHome} />
        </Link>
      </Row>
      <Row>
        <h1> Employee Overview </h1>
      </Row>
      <Row>
        <Col>
            {directSubs.map(name => <UserCard name={name} key={name} depth={0} />)}
        </Col>
      </Row>
    </Container>
  );
}
