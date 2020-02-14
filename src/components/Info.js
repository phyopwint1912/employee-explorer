import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import { Row, Col, Container } from "react-bootstrap";

const URL = "https://api.additivasia.io/api/v1/assignment/employees";
export default function Info() {
  const { name } = useParams();
  const [directSubs, setDirectSubs] = useState([])

  useEffect(() => {
    const getDirectSubs = async () => {
      const data = await fetch(URL + `/${name}`).then(res => {
        return res.json()
      });
      const directSubs = data[1] && data[1]['direct-subordinates'];
      setDirectSubs(directSubs)
    }
    getDirectSubs()
  },[name, setDirectSubs]);

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
