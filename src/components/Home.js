import React, { useContext } from "react";
import { Context } from "../context/index";
import { Row, Col, Form, Badge, Container, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home({ history }) {
  const appContext = useContext(Context);
  const { search, handleSearchChange } = appContext;

  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push(`/overview/${search}`)
  }

  return (
    <div className="flex-container">
      <Container>
        <h1>
          Employee Explorer <Badge variant="secondary">Beta</Badge>
        </h1>
        <Row>
          <Col>
            <Form onSubmit={e => handleSubmit(e)}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      onClick={e => handleSubmit(e)}
                      icon={faSearch}
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={e => handleSearchChange(e)}
                  type="text"
                  placeholder="Name"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
