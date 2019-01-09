import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SubcultureLinks from '../components/SubcultureLinks';
import config from '../config';

const renderSubcultures = () => ReactDOMServer.renderToString(
  (<SubcultureLinks subcultures={config.subcultures} />),
);

export default renderSubcultures;