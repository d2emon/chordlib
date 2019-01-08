import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
} from 'reactstrap';
import { markdown } from 'markdown';
import pageService from '../../services/page';

class Misheard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null,
    };
  }

  componentDidMount() {
    /*
    pageService
      .fetchPages()
      .then(response => {
        console.log(response);
      });
    */
    pageService
      .fetchPage('misheard-lyrics')
      .then((response) => {
        this.setState({
          page: response.page,
        });
      });
  }

  render() {
    const { page } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            {
              page
              ? (
                <Card dangerouslySetInnerHTML={{ __html: markdown.toHTML(page.text) }} />
              )
              : (
                <Card>
                  <h1>Идет загрузка...</h1>
                </Card>
              )
            }
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Misheard;
