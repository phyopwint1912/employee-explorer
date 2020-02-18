import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import { Row, Col, Container } from "react-bootstrap";
import { Context } from "../Context";

export default function Info() {
  const { name } = useParams();
  const [directSubs, setDirectSubs] = useState([])
  const appContext = useContext(Context);
  const { setEmployees } = appContext;
  const URL = "https://api.additivasia.io/api/v1/assignment/employees";
  useEffect(() => {
    const getDirectSubs = async () => {
      const data = await fetch(URL + `/${name}`).then(res => {
        return res.json()
      });
      const directSubs = data[1] && data[1]['direct-subordinates'];
      if(!directSubs) return false;
      setDirectSubs(directSubs? directSubs : [])
      directSubs.forEach(sub => setEmployees(prev => prev.add(sub)))
    }
    getDirectSubs()
  },[name, setDirectSubs, setEmployees]);

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
            {directSubs.length === 0 && <div> No Subordinates Found. </div> }
            {directSubs.length > 1 && directSubs.map(name => <UserCard name={name} key={name} depth={0} />)}
        </Col>
      </Row>
    </Container>
  );
}
