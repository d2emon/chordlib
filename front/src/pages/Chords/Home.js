import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import config from '../../config';
import markdown from '../../helpers/markdown';

export default () => (
  <div className="App">
    <Card>
      <CardHeader>
        <CardTitle>Песенник</CardTitle>
        <CardSubtitle>Мой сборник аккордов</CardSubtitle>
      </CardHeader>
      <CardBody dangerouslySetInnerHTML={{ __html: markdown.render(config.chords || '') }} />
    </Card>
  </div>
);
