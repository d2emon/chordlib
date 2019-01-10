import React from 'react';
import {
  Button,
} from 'reactstrap';
import wikipediaLogo from '../assets/wikipedia.svg';

const WikipediaButton = ({ ...props }) => (
  <Button {...props}>
    <img src={wikipediaLogo} width="32" alt="wikipedia" /> Wikipedia
  </Button>
);

export default WikipediaButton;
